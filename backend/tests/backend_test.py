"""
Backend API test suite for Vizija Mebel
Covers: health, quotes CRUD, contact CRUD, catalog PDF, validation errors.
"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback to reading frontend .env directly
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.split("=", 1)[1].strip().strip('"').rstrip("/")
                    break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="session")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Vizija Mebel" in data["message"]


# ---------- Quotes ----------
class TestQuotes:
    def test_create_quote_success(self, api_client):
        payload = {
            "name": "TEST_John Doe",
            "phone": "+389 70 123 456",
            "email": "test_quote@example.com",
            "address": "Bitola, MK",
            "lang": "mk",
            "config": {
                "furnitureType": "kitchen",
                "style": "modern",
                "finish": "rich_walnut",
                "finishHex": "#6B4A33",
                "hardware": "handleless",
                "dimensions": "medium",
                "notes": "TEST run",
            },
        }
        r = api_client.post(f"{API}/quotes", json=payload)
        assert r.status_code in (200, 201), r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["config"]["furnitureType"] == "kitchen"
        assert data["config"]["finish"] == "rich_walnut"
        assert data.get("ref", "").startswith("VM-")
        assert data.get("status") == "new"
        pytest.quote_ref = data["ref"]

    def test_list_quotes_contains_created(self, api_client):
        r = api_client.get(f"{API}/quotes")
        assert r.status_code == 200
        arr = r.json()
        assert isinstance(arr, list)
        refs = [q.get("ref") for q in arr]
        assert getattr(pytest, "quote_ref", None) in refs

    def test_quote_invalid_email(self, api_client):
        payload = {
            "name": "TEST_Bad Email",
            "phone": "+389 70 000 000",
            "email": "not-an-email",
            "lang": "mk",
            "config": {"furnitureType": "kitchen"},
        }
        r = api_client.post(f"{API}/quotes", json=payload)
        assert r.status_code == 422

    def test_quote_missing_required(self, api_client):
        # Missing name/phone/email/config
        r = api_client.post(f"{API}/quotes", json={"lang": "mk"})
        assert r.status_code == 422


# ---------- Contact ----------
class TestContact:
    def test_create_contact_success(self, api_client):
        payload = {
            "name": "TEST_Contact User",
            "email": "test_contact@example.com",
            "phone": "+389 70 555 555",
            "subject": "TEST inquiry",
            "message": "This is a test message from automated tests.",
            "lang": "en",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code in (200, 201), r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["message"] == payload["message"]
        pytest.contact_email = payload["email"]

    def test_list_contacts_contains_created(self, api_client):
        r = api_client.get(f"{API}/contact")
        assert r.status_code == 200
        arr = r.json()
        assert isinstance(arr, list)
        emails = [c.get("email") for c in arr]
        assert getattr(pytest, "contact_email", None) in emails

    def test_contact_invalid_email(self, api_client):
        payload = {
            "name": "TEST_Bad",
            "email": "invalid",
            "message": "hi",
        }
        r = api_client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_contact_missing_required(self, api_client):
        r = api_client.post(f"{API}/contact", json={"email": "a@b.com"})
        assert r.status_code == 422


# ---------- Catalog PDF ----------
class TestCatalogPDF:
    def test_catalog_pdf(self, api_client):
        r = api_client.get(f"{API}/catalog/pdf")
        assert r.status_code == 200
        assert "application/pdf" in r.headers.get("content-type", "")
        # PDF file must start with %PDF
        assert r.content[:4] == b"%PDF"
        assert len(r.content) > 1000
