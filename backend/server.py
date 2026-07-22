from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import io
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional, Any, Annotated
from pydantic import BeforeValidator
from bson import ObjectId
import uuid
from datetime import datetime, timezone

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak,
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Vizija Mebel API")
api_router = APIRouter(prefix="/api")


# ---------- Mongo helpers ----------
def _validate_object_id(v: Any) -> str:
    if isinstance(v, ObjectId):
        return str(v)
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(_validate_object_id)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(populate_by_name=True, arbitrary_types_allowed=True)

    id: Optional[PyObjectId] = Field(default=None, alias="_id")

    @classmethod
    def from_mongo(cls, doc: dict):
        if not doc:
            return None
        return cls(**doc)

    def to_mongo(self) -> dict:
        data = self.model_dump(by_alias=True, exclude_none=True)
        data.pop("_id", None)
        return data


# ---------- Models ----------
class QuoteConfig(BaseModel):
    furnitureType: Optional[str] = None
    style: Optional[str] = None
    finish: Optional[str] = None
    finishHex: Optional[str] = None
    hardware: Optional[str] = None
    dimensions: Optional[str] = None
    width: Optional[str] = None
    height: Optional[str] = None
    depth: Optional[str] = None
    notes: Optional[str] = None
    referenceImage: Optional[str] = None


class QuoteRequestCreate(BaseModel):
    name: str
    phone: str
    email: EmailStr
    address: Optional[str] = None
    config: QuoteConfig
    lang: Optional[str] = "mk"


class QuoteRequest(BaseDocument):
    ref: str = Field(default_factory=lambda: "VM-" + uuid.uuid4().hex[:8].upper())
    name: str
    phone: str
    email: str
    address: Optional[str] = None
    config: QuoteConfig
    lang: Optional[str] = "mk"
    status: str = "new"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str
    lang: Optional[str] = "mk"


class ContactMessage(BaseDocument):
    name: str
    email: str
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str
    lang: Optional[str] = "mk"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------- Static catalog data (used for PDF) ----------
FINISHES = [
    ("Matte White", "#F1EFEA"),
    ("Beech", "#D9BB94"),
    ("Sonoma Oak", "#C8A87C"),
    ("Sahara Oak", "#B8946A"),
    ("Ultra-White Classic", "#FBFBF9"),
    ("Artisan Oak", "#9C7A50"),
    ("Rich Walnut", "#6B4A33"),
    ("Smoked Walnut", "#4A3527"),
    ("Matte Anthracite", "#3A3D40"),
    ("Jet Black Velvet", "#1A1A1C"),
]

CATEGORIES = [
    ("Kitchens", "Bespoke kitchens with CNC-precision cabinetry, stone-look surfaces and integrated lighting."),
    ("Wardrobes", "Fitted and walk-in wardrobes tailored to your space with soft-close systems."),
    ("Living Room", "Sideboards, shelving and media walls in warm wood and matte finishes."),
    ("Bedroom", "Complete bedroom sets: headboards, storage and coordinated cabinetry."),
    ("Office Furniture", "Home and commercial workspaces built for focus and durability."),
    ("TV Units", "Floating and framed media units with cable management and accent lighting."),
]


@api_router.get("/")
async def root():
    return {"message": "Vizija Mebel API"}


@api_router.post("/quotes", response_model=QuoteRequest)
async def create_quote(payload: QuoteRequestCreate):
    quote = QuoteRequest(**payload.model_dump())
    doc = quote.to_mongo()
    await db.quotes.insert_one(doc)
    return quote


@api_router.get("/quotes", response_model=List[QuoteRequest])
async def list_quotes():
    docs = await db.quotes.find().sort("created_at", -1).to_list(500)
    return [QuoteRequest.from_mongo(d) for d in docs]


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(payload: ContactCreate):
    msg = ContactMessage(**payload.model_dump())
    doc = msg.to_mongo()
    await db.contact_messages.insert_one(doc)
    return msg


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts():
    docs = await db.contact_messages.find().sort("created_at", -1).to_list(500)
    return [ContactMessage.from_mongo(d) for d in docs]


@api_router.get("/catalog/pdf")
async def catalog_pdf():
    buf = io.BytesIO()
    doc = SimpleDocTemplate(
        buf, pagesize=A4,
        topMargin=22 * mm, bottomMargin=20 * mm,
        leftMargin=20 * mm, rightMargin=20 * mm,
        title="Vizija Mebel — Catalog",
    )
    styles = getSampleStyleSheet()
    anthracite = colors.HexColor("#1A1A1A")
    wood = colors.HexColor("#9C6644")

    title = ParagraphStyle("vmTitle", parent=styles["Title"], fontName="Helvetica-Bold",
                           fontSize=34, leading=36, textColor=anthracite, spaceAfter=4)
    sub = ParagraphStyle("vmSub", parent=styles["Normal"], fontName="Helvetica",
                         fontSize=11, textColor=colors.HexColor("#666666"), spaceAfter=2)
    h2 = ParagraphStyle("vmH2", parent=styles["Heading2"], fontName="Helvetica-Bold",
                        fontSize=17, textColor=anthracite, spaceBefore=14, spaceAfter=8)
    body = ParagraphStyle("vmBody", parent=styles["Normal"], fontName="Helvetica",
                          fontSize=10, leading=14, textColor=colors.HexColor("#333333"))
    label = ParagraphStyle("vmLabel", parent=styles["Normal"], fontName="Helvetica-Bold",
                           fontSize=9, textColor=anthracite)

    story = []
    story.append(Spacer(1, 40 * mm))
    story.append(Paragraph("VIZIJA MEBEL", title))
    story.append(Paragraph("Custom Furniture Manufacturing — Bitola, North Macedonia", sub))
    story.append(Spacer(1, 6))
    story.append(Paragraph("Product &amp; Finish Catalog", h2))
    story.append(Paragraph(
        "Bespoke kitchens, wardrobes, living room and office furniture built with "
        "CNC precision and premium vacuum-wrapped panels.", body))
    story.append(PageBreak())

    story.append(Paragraph("Product Categories", h2))
    cat_rows = [[Paragraph("<b>Category</b>", label), Paragraph("<b>Description</b>", label)]]
    for name, desc in CATEGORIES:
        cat_rows.append([Paragraph(name, body), Paragraph(desc, body)])
    cat_table = Table(cat_rows, colWidths=[45 * mm, 120 * mm])
    cat_table.setStyle(TableStyle([
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, colors.HexColor("#DDDDDD")),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    story.append(cat_table)

    story.append(Paragraph("Premium CNC Vacuumed Media Panel Collection", h2))
    story.append(Paragraph(
        "Each panel is finished with 3D vacuum-wrap technology for seamless, "
        "wrapped edges with no visible joints — durable, moisture-resistant and easy to clean.", body))
    story.append(Spacer(1, 6))

    sw_rows = []
    row = []
    for i, (name, hexv) in enumerate(FINISHES):
        cell = Table([[""], [Paragraph(name, label)]], colWidths=[52 * mm], rowHeights=[18 * mm, 8 * mm])
        cell.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (0, 0), colors.HexColor(hexv)),
            ("BOX", (0, 0), (0, 0), 0.5, colors.HexColor("#CCCCCC")),
            ("ALIGN", (0, 1), (0, 1), "CENTER"),
            ("TOPPADDING", (0, 1), (0, 1), 4),
        ]))
        row.append(cell)
        if len(row) == 3:
            sw_rows.append(row)
            row = []
    if row:
        while len(row) < 3:
            row.append("")
        sw_rows.append(row)
    sw_table = Table(sw_rows, colWidths=[56 * mm, 56 * mm, 56 * mm])
    sw_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    story.append(sw_table)

    story.append(PageBreak())
    story.append(Paragraph("Design Your Furniture", h2))
    story.append(Paragraph(
        "Use our online configurator to choose furniture type, style, finish, hardware "
        "and dimensions, then request a free quote. Visit vizijamebel.mk or contact us "
        "at info@vizijamebel.mk / +389 47 000 000.", body))

    doc.build(story)
    buf.seek(0)
    return StreamingResponse(
        buf, media_type="application/pdf",
        headers={"Content-Disposition": "attachment; filename=vizija-mebel-catalog.pdf"},
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
