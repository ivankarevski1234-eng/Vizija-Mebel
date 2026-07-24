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
  { key: "kitchen", label: { mk: "Кујнски Елементи", en: "Kitchen Elements" }, image: IMAGES.heroKitchen,
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

export const MKD_TO_EUR = 61.5;

export const PRODUCTS = [
  { id: "p13", cat: "living", image: "/images/image- 06.jpg", material: "matte", color: "anthracite", price: 42000,
    name: { mk: "Комода „Антрацит“", en: "Anthracite Sideboard" },
    desc: { mk: "Мат антрацит комода со фиоки и хром рачки.", en: "Matte anthracite sideboard with drawers and chrome handles." } },
  { id: "p14", cat: "office", image: "/images/image- 03.jpg", material: "oak", color: "white", price: 38000,
    name: { mk: "Аголна работна маса „Студио“", en: "Studio Corner Desk" },
    desc: { mk: "Аголна работна маса во даб со ѕидна полица и ниша за монитор.", en: "Oak corner desk with a wall shelf and monitor niche." } },
  { id: "p15", cat: "bedroom", image: "/images/image- 10.jpg", material: "matte", color: "white", price: 46000,
    name: { mk: "Тоалетна маса „Холивуд“", en: "Hollywood Vanity Table" },
    desc: { mk: "Тоалетна маса со огледало и Холивуд осветлување, четири фиоки.", en: "Vanity table with mirror and Hollywood lighting, four drawers." } },
  { id: "p16", cat: "bedroom", image: "/images/image- 04.jpg", material: "oak", color: "white", price: 12500,
    name: { mk: "Ноќно ормарче „Агол“", en: "Corner Nightstand" },
    desc: { mk: "Компактно ноќно ормарче во даб со три фиоки.", en: "Compact oak nightstand with three drawers." } },
  { id: "p17", cat: "living", image: "/images/image- 02.jpg", material: "matte", color: "white", price: 34000,
    name: { mk: "Конзолна маса со огледало", en: "Console Table with Mirror" },
    desc: { mk: "Ѕидна конзолна маса со тросекциски врати и придружно огледало.", en: "Wall console table with three-section doors and matching mirror." } },
  { id: "p18", cat: "living", image: "/images/image- 05.jpg", material: "matte", color: "white", price: 68000,
    name: { mk: "Трпезариска маса „Пиедестал“", en: "Pedestal Dining Table" },
    desc: { mk: "Мат бела трпезариска маса со централна пиедестал база.", en: "Matte white dining table with a central pedestal base." } },
  { id: "p19", cat: "tv", image: "/images/image- 09.jpg", material: "matte", color: "white", price: 39000,
    name: { mk: "ТВ комода со масичка „Дуо“", en: "TV Unit & Coffee Table Duo" },
    desc: { mk: "Комплет мат бела ТВ комода со отворени полици и придружна масичка.", en: "Matching matte white TV unit with open shelving and coffee table." } },
  { id: "p20", cat: "living", image: "/images/image- 07.jpg", material: "oak", color: "white", price: 45000,
    name: { mk: "Комода „Скандинавиа“", en: "Scandinavia Sideboard" },
    desc: { mk: "Светла дабова комода со три централни фиоки и странични врати.", en: "Light oak sideboard with three central drawers and side doors." } },
  { id: "p21", cat: "office", image: "/images/image- 08.jpg", material: "matte", color: "green", price: 56000,
    name: { mk: "Работен ѕид „Плеј“", en: "Play Study Wall" },
    desc: { mk: "Игрив работен агол со жолти преградни полици и виси решетка.", en: "Playful study corner with yellow cubby shelving and a hanging grid rack." } },
  { id: "p22", cat: "bedroom", image: "/images/image- 01.jpg", material: "oak", color: "white", price: 41000,
    name: { mk: "Работен агол „Резиденс“", en: "Residence Study Corner" },
    desc: { mk: "Дабов работен агол со полица и вградени фиоки.", en: "Oak study corner with shelving and built-in drawers." } },
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
  { key: "kitchen", label: { mk: "Елементи за Кујна", en: "Kitchen Elements" }, image: IMAGES.heroKitchen },
  { key: "wardrobe", label: { mk: "Плакари", en: "Wardrobes" }, image: IMAGES.wardrobe1 },
  { key: "living", label: { mk: "Елементи за Дневна соба", en: "Living Room Elements" }, image: IMAGES.living1 },
  { key: "bedroom", label: { mk: "Елементи за Спална соба", en: "Bedroom Elements" }, image: IMAGES.bedroom1 },
  { key: "office", label: { mk: "Елементи за Канцелариски Мебел", en: "Office Furniture Elements" }, image: IMAGES.office1 },
];

export const CONFIG_ELEMENTS = {
  kitchen: [
    { key: "upper", label: { mk: "Горни елементи", en: "Wall Cabinets" } },
    { key: "lower", label: { mk: "Долни елементи", en: "Base Cabinets" } },
    { key: "island", label: { mk: "Кујнски остров", en: "Kitchen Island" } },
    { key: "worktop", label: { mk: "Работна плоча", en: "Worktop" } },
    { key: "appliances", label: { mk: "Ниша за апарати", en: "Appliance Niche" } },
    { key: "shelving", label: { mk: "Отворени полици", en: "Open Shelving" } },
  ],
  wardrobe: [
    { key: "sliding", label: { mk: "Лизгачки врати", en: "Sliding Doors" } },
    { key: "shelving", label: { mk: "Внатрешни полици", en: "Interior Shelving" } },
    { key: "drawers", label: { mk: "Фиоки", en: "Drawers" } },
    { key: "mirror", label: { mk: "Огледало", en: "Mirror Panel" } },
    { key: "lighting", label: { mk: "Внатрешно осветлување", en: "Interior Lighting" } },
  ],
  living: [
    { key: "sideboard", label: { mk: "Комода", en: "Sideboard" } },
    { key: "mediawall", label: { mk: "Медиа ѕид", en: "Media Wall" } },
    { key: "shelving", label: { mk: "Полици", en: "Shelving" } },
    { key: "display", label: { mk: "Витрина", en: "Display Cabinet" } },
    { key: "tvniche", label: { mk: "Ниша за ТВ", en: "TV Niche" } },
  ],
  bedroom: [
    { key: "headboard", label: { mk: "Узглавје", en: "Headboard" } },
    { key: "wardrobe", label: { mk: "Плакар", en: "Wardrobe" } },
    { key: "nightstand", label: { mk: "Ноќно ормарче", en: "Nightstand" } },
    { key: "vanity", label: { mk: "Тоалетна маса", en: "Vanity" } },
    { key: "shelving", label: { mk: "Полици", en: "Shelving" } },
  ],
  office: [
    { key: "desk", label: { mk: "Работна маса", en: "Desk" } },
    { key: "shelving", label: { mk: "Полици", en: "Shelving" } },
    { key: "filing", label: { mk: "Картотека", en: "Filing Cabinet" } },
    { key: "wallunit", label: { mk: "Ѕидна единица", en: "Wall Unit" } },
    { key: "lighting", label: { mk: "Осветлување", en: "Lighting" } },
  ],
};

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
