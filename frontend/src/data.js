// Bilingual data for Vizija Mebel. Each label object: { mk, en }

export const IMAGES = {
  heroKitchen: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc4MzQzMzIwMnww&ixlib=rb-4.1.0&q=85",
  kitchen2: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc4MzQzMzIwMnww&ixlib=rb-4.1.0&q=85",
  kitchenMarble: "https://images.pexels.com/photos/20348123/pexels-photo-20348123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenWhite: "https://images.pexels.com/photos/37408949/pexels-photo-37408949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenGrey: "https://images.pexels.com/photos/37803522/pexels-photo-37803522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenBright: "https://images.pexels.com/photos/29252361/pexels-photo-29252361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  wardrobe1: "https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  wardrobe2: "https://images.pexels.com/photos/8135001/pexels-photo-8135001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  living1: "https://images.pexels.com/photos/12277129/pexels-photo-12277129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  living2: "https://images.pexels.com/photos/5870/purple-white-design-decoration.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  bedroom1: "https://images.pexels.com/photos/7546276/pexels-photo-7546276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  office1: "https://images.pexels.com/photos/19410747/pexels-photo-19410747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  tv1: "https://images.pexels.com/photos/34992777/pexels-photo-34992777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  tv2: "https://images.pexels.com/photos/36871613/pexels-photo-36871613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  workshop1: "https://images.pexels.com/photos/13005858/pexels-photo-13005858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  workshop2: "https://images.pexels.com/photos/5711766/pexels-photo-5711766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  workshop3: "https://images.pexels.com/photos/34520428/pexels-photo-34520428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const CATEGORIES = [
  { key: "kitchen", label: { mk: "Кујни", en: "Kitchens" }, image: IMAGES.heroKitchen,
    desc: { mk: "Кујни по нарачка со CNC прецизност, површини со изглед на камен и вградено осветлување.",
            en: "Bespoke kitchens with CNC precision, stone-look surfaces and integrated lighting." } },
  { key: "wardrobe", label: { mk: "Плакари", en: "Wardrobes" }, image: IMAGES.wardrobe1,
    desc: { mk: "Вградени и walk-in плакари прилагодени на вашиот простор со soft-close системи.",
            en: "Fitted and walk-in wardrobes tailored to your space with soft-close systems." } },
  { key: "living", label: { mk: "Дневна соба", en: "Living Room" }, image: IMAGES.living1,
    desc: { mk: "Комоди, полици и медиа ѕидови во топли дрвени и мат тонови.",
            en: "Sideboards, shelving and media walls in warm wood and matte tones." } },
  { key: "bedroom", label: { mk: "Спална соба", en: "Bedroom" }, image: IMAGES.bedroom1,
    desc: { mk: "Комплетни спални гарнитури: узглавја, плакари и координирани елементи.",
            en: "Complete bedroom sets: headboards, wardrobes and coordinated cabinetry." } },
  { key: "office", label: { mk: "Канцелариски мебел", en: "Office Furniture" }, image: IMAGES.office1,
    desc: { mk: "Домашни и деловни работни простори изградени за фокус и издржливост.",
            en: "Home and commercial workspaces built for focus and durability." } },
  { key: "tv", label: { mk: "ТВ комоди", en: "TV Units" }, image: IMAGES.tv1,
    desc: { mk: "Лебдечки и врамени медиа единици со менаџмент на кабли и акцентно осветлување.",
            en: "Floating and framed media units with cable management and accent lighting." } },
];

export const PRODUCTS = [
  { id: "p1", cat: "kitchen", image: IMAGES.heroKitchen, material: "oak", color: "white",
    name: { mk: "Кујна „Хоризонт“", en: "Horizon Kitchen" },
    desc: { mk: "Рамни мат панели со остри рабови и природен даб.", en: "Flat matte panels with sharp edges and natural oak." } },
  { id: "p2", cat: "kitchen", image: IMAGES.kitchenMarble, material: "stone", color: "brass",
    name: { mk: "Кујна „Мермер“", en: "Marble Kitchen" },
    desc: { mk: "Мермерна плоча и месингани детали за луксузен изглед.", en: "Marble worktop and brass details for a luxe look." } },
  { id: "p3", cat: "kitchen", image: IMAGES.kitchenGrey, material: "matte", color: "anthracite",
    name: { mk: "Кујна „Урбан“", en: "Urban Kitchen" },
    desc: { mk: "Антрацит долни елементи со топло LED осветлување.", en: "Anthracite base units with warm LED lighting." } },
  { id: "p4", cat: "wardrobe", image: IMAGES.wardrobe1, material: "oak", color: "anthracite",
    name: { mk: "Walk-in плакар „Атриум“", en: "Atrium Walk-in Wardrobe" },
    desc: { mk: "Отворени полици во даб со антрацит структура.", en: "Open oak shelving with an anthracite structure." } },
  { id: "p5", cat: "wardrobe", image: IMAGES.wardrobe2, material: "matte", color: "white",
    name: { mk: "Плакар „Минимал“", en: "Minimal Wardrobe" },
    desc: { mk: "Мат бели врати со огледало и внатрешно осветлување.", en: "Matte white doors with mirror and interior lighting." } },
  { id: "p6", cat: "living", image: IMAGES.living1, material: "oak", color: "white",
    name: { mk: "Комода „Нордик“", en: "Nordic Sideboard" },
    desc: { mk: "Дабова комода на подигнати нозе, скандинавски стил.", en: "Oak sideboard on raised legs, Scandinavian style." } },
  { id: "p7", cat: "living", image: IMAGES.living2, material: "walnut", color: "brass",
    name: { mk: "Медиа ѕид „Лукс“", en: "Lux Media Wall" },
    desc: { mk: "Орев со месингани акценти и стаклени витрини.", en: "Walnut with brass accents and glass display units." } },
  { id: "p8", cat: "bedroom", image: IMAGES.bedroom1, material: "matte", color: "white",
    name: { mk: "Спална „Серена“", en: "Serena Bedroom" },
    desc: { mk: "Тапацирано узглавје со огледални плакари.", en: "Upholstered headboard with mirrored wardrobes." } },
  { id: "p9", cat: "office", image: IMAGES.office1, material: "stone", color: "white",
    name: { mk: "Работна соба „Фокус“", en: "Focus Home Office" },
    desc: { mk: "Бели елементи со мермерна работна површина.", en: "White cabinetry with a marble desktop." } },
  { id: "p10", cat: "tv", image: IMAGES.tv1, material: "matte", color: "white",
    name: { mk: "ТВ единица „Флот“", en: "Float TV Unit" },
    desc: { mk: "Лебдечка ТВ единица со ниши и осветлување.", en: "Floating TV unit with niches and lighting." } },
  { id: "p11", cat: "tv", image: IMAGES.tv2, material: "walnut", color: "anthracite",
    name: { mk: "ТВ ѕид „Ноктурн“", en: "Nocturne TV Wall" },
    desc: { mk: "Орев панелиран ѕид со интегриран екран.", en: "Walnut panelled wall with an integrated screen." } },
  { id: "p12", cat: "kitchen", image: IMAGES.kitchenWhite, material: "matte", color: "white",
    name: { mk: "Кујна „Пуре“", en: "Pure Kitchen" },
    desc: { mk: "Целосно мат бела кујна без рачки.", en: "All-white handleless matte kitchen." } },
];

export const FINISHES = [
  { key: "matte_white", label: { mk: "Мат бела", en: "Matte White" }, hex: "#F1EFEA" },
  { key: "beech", label: { mk: "Бука", en: "Beech" }, hex: "#D9BB94" },
  { key: "sonoma_oak", label: { mk: "Сонома даб", en: "Sonoma Oak" }, hex: "#C8A87C" },
  { key: "sahara_oak", label: { mk: "Сахара даб", en: "Sahara Oak" }, hex: "#B8946A" },
  { key: "ultra_white", label: { mk: "Ултра-бела класик", en: "Ultra-White Classic" }, hex: "#FBFBF9" },
  { key: "artisan_oak", label: { mk: "Артизан даб", en: "Artisan Oak" }, hex: "#9C7A50" },
  { key: "rich_walnut", label: { mk: "Богат орев", en: "Rich Walnut" }, hex: "#6B4A33" },
  { key: "smoked_walnut", label: { mk: "Чадест орев", en: "Smoked Walnut" }, hex: "#4A3527" },
  { key: "matte_anthracite", label: { mk: "Мат антрацит", en: "Matte Anthracite" }, hex: "#3A3D40" },
  { key: "jet_black", label: { mk: "Црн кадифен", en: "Jet Black Velvet" }, hex: "#1A1A1C" },
];

export const HARDWARE = [
  { key: "matte_black", label: { mk: "Мат црна", en: "Matte Black" }, hex: "#1A1A1A" },
  { key: "brass", label: { mk: "Месинг / злато", en: "Brass / Gold" }, hex: "#C5A059" },
  { key: "chrome", label: { mk: "Хром", en: "Chrome" }, hex: "#C9CDD2" },
];

export const CONFIG_TYPES = [
  { key: "kitchen", label: { mk: "Кујна", en: "Kitchen" }, image: IMAGES.heroKitchen },
  { key: "wardrobe", label: { mk: "Плакар", en: "Wardrobe" }, image: IMAGES.wardrobe1 },
  { key: "living", label: { mk: "Дневна соба", en: "Living Room Unit" }, image: IMAGES.living1 },
  { key: "bedroom", label: { mk: "Спална соба", en: "Bedroom Set" }, image: IMAGES.bedroom1 },
  { key: "office", label: { mk: "Канцелариски мебел", en: "Office Furniture" }, image: IMAGES.office1 },
];

export const CONFIG_STYLES = {
  kitchen: [
    { key: "linear", label: { mk: "Линиска", en: "Linear" }, image: IMAGES.kitchen2 },
    { key: "lshape", label: { mk: "Г-облик", en: "L-Shape" }, image: IMAGES.kitchenGrey },
    { key: "island", label: { mk: "Со остров", en: "With Island" }, image: IMAGES.heroKitchen },
  ],
  wardrobe: [
    { key: "sliding", label: { mk: "Лизгачки врати", en: "Sliding Doors" }, image: IMAGES.wardrobe2 },
    { key: "walkin", label: { mk: "Walk-in", en: "Walk-in" }, image: IMAGES.wardrobe1 },
  ],
  living: [
    { key: "sideboard", label: { mk: "Комода", en: "Sideboard" }, image: IMAGES.living1 },
    { key: "mediawall", label: { mk: "Медиа ѕид", en: "Media Wall" }, image: IMAGES.living2 },
  ],
  bedroom: [
    { key: "classic", label: { mk: "Класична", en: "Classic" }, image: IMAGES.bedroom1 },
    { key: "modern", label: { mk: "Модерна", en: "Modern" }, image: IMAGES.tv2 },
  ],
  office: [
    { key: "desk", label: { mk: "Работна маса", en: "Desk & Storage" }, image: IMAGES.office1 },
    { key: "wallunit", label: { mk: "Ѕидна единица", en: "Wall Unit" }, image: IMAGES.tv1 },
  ],
};

export const GALLERY = [
  { image: IMAGES.heroKitchen, cat: "kitchen" },
  { image: IMAGES.wardrobe1, cat: "wardrobe" },
  { image: IMAGES.living1, cat: "living" },
  { image: IMAGES.kitchenMarble, cat: "kitchen" },
  { image: IMAGES.bedroom1, cat: "bedroom" },
  { image: IMAGES.office1, cat: "office" },
  { image: IMAGES.tv2, cat: "tv" },
  { image: IMAGES.kitchenGrey, cat: "kitchen" },
  { image: IMAGES.wardrobe2, cat: "wardrobe" },
  { image: IMAGES.living2, cat: "living" },
  { image: IMAGES.kitchenWhite, cat: "kitchen" },
  { image: IMAGES.tv1, cat: "tv" },
  { image: IMAGES.kitchen2, cat: "kitchen" },
  { image: IMAGES.kitchenBright, cat: "kitchen" },
];

export const TESTIMONIALS = [
  { name: "Ана Стојановска", city: { mk: "Битола", en: "Bitola" },
    text: { mk: "Кујната ја надмина нашите очекувања. Прецизноста и квалитетот се неверојатни.",
            en: "Our kitchen exceeded every expectation. The precision and quality are incredible." } },
  { name: "Марко Петровски", city: { mk: "Скопје", en: "Skopje" },
    text: { mk: "Дизајнирав сè онлајн, а тимот го изработи точно како што замислив.",
            en: "I designed everything online and the team built it exactly as I imagined." } },
  { name: "Елена Ристеска", city: { mk: "Прилеп", en: "Prilep" },
    text: { mk: "Walk-in плакарот е совршен — секој сантиметар искористен со стил.",
            en: "The walk-in wardrobe is perfect — every centimetre used with style." } },
];
