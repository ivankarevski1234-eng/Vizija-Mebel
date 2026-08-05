// Bilingual data for Vizija Mebel. Each label object: { mk, en }

export const IMAGES = {
  heroKitchen: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?crop=entropy&cs=srgb&fm=png&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc4MzQzMzIwMnww&ixlib=rb-4.1.0&q=85",
  kitchen2: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?crop=entropy&cs=srgb&fm=png&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwbHV4dXJ5JTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc4MzQzMzIwMnww&ixlib=rb-4.1.0&q=85",
  kitchenMarble: "https://images.pexels.com/photos/20348123/pexels-photo-20348123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenWhite: "https://images.pexels.com/photos/37408949/pexels-photo-37408949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenGrey: "https://images.pexels.com/photos/37803522/pexels-photo-37803522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  kitchenBright: "https://images.pexels.com/photos/29252361/pexels-photo-29252361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  wardrobe1: "https://images.pexels.com/photos/6580395/pexels-photo-6580395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  wardrobe2: "https://images.pexels.com/photos/8135001/pexels-photo-8135001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  living1: "https://images.pexels.com/photos/12277129/pexels-photo-12277129.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  living2: "https://images.pexels.com/photos/5870/purple-white-design-decoration.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

// src/data/products.js

export const PRODUCTS = [
  {
    id: 1,
    name: {
      en: "Rectangular Dining Table",
      mk: "Правоаголна трпезариска маса"
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 18500,
    currency: "MKD",
    image: "/images/1.png",
    description: {
      en: "Precision CNC-routed vacuumed MDF panel designed for TV units and modern living spaces.",
      mk: "Прецизно ЦНЦ фрезиран и вакуумиран МДФ панел дизајниран за ТВ елементи и модерни простории."
    }
  },
  {
    id: 2,
    name: {
      en: "Minimalist Floating Shelf Unit",
      mk: "Минималистичка пливачка полица"
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 6400,
    currency: "MKD",
    image: "/images/2.png",
    description: {
      en: "Sleek vacuum-formed wooden wall accent with hidden mounting brackets.",
      mk: "Елегантен вакуумски обликуван дрвен ѕиден акцент со скриени носачи за монтажа."
    }
  },
  {
    id: 3,
    name: {
      en: " Round Two-Tier Coffee Table",
      mk: "Тркалезна двослојна масичка за кафе"
    },
    category: {
      en: "Office",
      mk: "Канцеларија"
    },
    price: 24900,
    currency: "MKD",
    image: "/images/3.png",
    description: {
      en: "Custom contoured desk surface with seamless edge bonding and cable management routing.",
      mk: "Контурирана работна површина со беспрекорна обработка на рабовите и отвори за кабли."
    }
  },
  {
    id: 4,
    name: {
      en: "Nesting Side Tables",
      mk: "Вгнездени странични маси"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 12800,
    currency: "MKD",
    image: "/images/4.png",
    description: {
      en: "Decorative noise-reducing CNC paneling set in natural oak finish.",
      mk: "Декоративна ЦНЦ панела за апсорпција на звук во финиш од природен даб."
    }
  },
  {
    id: 5,
    name: {
      en: "Modular Sideboard Cabinet",
      mk: "Модуларен комода шкаф",
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 31000,
    currency: "MKD",
    image: "/images/5.png",
    description: {
      en: "3D textured vacuum-molded doors with soft-close push mechanisms.",
      mk: "Врати со 3Д текстура вакуумски обликувани со мека push-to-open механика."
    }
  },
  {
    id: 6,
    name: {
      en: "Four-Door Sideboard",
      mk: " Комода/Креденца со четири врати"
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 14200,
    currency: "MKD",
    image: "/images/6.png",
    description: {
      en: "Sculpted CNC base with smooth laminate finish and tempered top.",
      mk: "Скулптурирана ЦНЦ основа со гладок ламинатен финиш и калено стакло."
    }
  },
  {
    id: 7,
    name: {
      en: "Geometrical Wall Art Panel",
      mk: "Геометриски ѕиден уметнички панел"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 8900,
    currency: "MKD",
    image: "/images/7.png",
    description: {
      en: "Laser-cut 3D geometric wall decor with customizable lacquer finishing.",
      mk: "Ласерски сечен 3Д геометриски декор за ѕид со прилагоден лакиран завршен слој."
    }
  },
  {
    id: 8,
    name: {
      en: "Tall Storage Cabinet with Glass-Front Doors",
      mk: "Висок кабинет за складирање со стаклени предни врати"
    },
    category: {
      en: "Dining",
      mk: "Трпезарија"
    },
    price: 5200,
    currency: "MKD",
    image: "/images/8.png",
    description: {
      en: "Vacuum-molded plywood seat shell supported by solid hardwood legs.",
      mk: "Вакуумски пресирана иверица/шперплоча со ногарки од цврсто дрво."
    }
  },
  {
    id: 9,
    name: {
      en: "TV Media Console with Wood Slat Front",
      mk: "ТВ медиумска конзола со предна дрвена летва"
    },
    category: {
      en: "Dining",
      mk: "Трпезарија"
    },
    price: 28500,
    currency: "MKD",
    image: "/images/9.png",
    description: {
      en: "Multi-axis CNC machined wooden base designed for glass or marble tops.",
      mk: "Дрвена основа изработена на повеќеосен ЦНЦ, наменета за стаклена или мермерна плоча."
    }
  },
  {
    id: 10,
    name: {
      en: "Integrated TV Wall Console",
      mk: "Интегрирана ТВ ѕидна конзола"
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 36000,
    currency: "MKD",
    image: "/images/10.png",
    description: {
      en: "Seamless entertainment unit with CNC-milled wire channels and vacuumed doors.",
      mk: "Комплетна медиумска единица со ЦНЦ канали за кабли и вакуумирани предни врати."
    }
  },
  {
    id: 11,
    name: {
      en: "Fluted Bed Headboard",
      mk: "Заглавје за кревет со канелури"
    },
    category: {
      en: "Bedroom",
      mk: "Спална соба"
    },
    price: 19800,
    currency: "MKD",
    image: "/images/11.png",
    description: {
      en: "Elegantly routed vertically slatted headboard panel with matte vacuum finish.",
      mk: "Елегантно фрезирано заглавје со вертикални релјефни линии и мат вакуум финиш."
    }
  },
  {
    id: 12,
    name: {
      en: "Floating Bedside Nightstand",
      mk: "Ѕидно наткасна за спална"
    },
    category: {
      en: "Bedroom",
      mk: "Спална соба"
    },
    price: 4900,
    currency: "MKD",
    image: "/images/12.png",
    description: {
      en: "Compact wall-mounted nightstand featuring a smooth curved CNC edge profile.",
      mk: "Компактна ѕидна наткасна со мазно заоблен ЦНЦ профил на рабовите."
    }
  },
  {
    id: 13,
    name: {
      en: "Round Outdoor Bistro Table",
      mk: "Тркалезна надворешна бистро маса"
    },
    category: {
      en: "Bedroom",
      mk: "Спална соба"
    },
    price: 42000,
    currency: "MKD",
    image: "/images/13.png",
    description: {
      en: "Custom-sized CNC routed door fronts with seamless PVC vacuum wrap.",
      mk: "ЦНЦ фрезирани предни врати по мерка обложени со беспрекорна ПВЦ вакуум фолија."
    }
  },
  {
    id: 14,
    name: {
      en: "Folding Balcony Table",
      mk: "Преклопна балконска маса"
    },
    category: {
      en: "Office",
      mk: "Канцеларија"
    },
    price: 58000,
    currency: "MKD",
    image: "/images/14.png",
    description: {
      en: "Commercial grade curved front counter with recessed LED channel and CNC routing.",
      mk: "Закривен преден пулт за деловни простории со ЦНЦ релјеф и вграден LED канал."
    }
  },
  {
    id: 15,
    name: {
      en: "Acoustic Ceiling Baffle Set",
      mk: "Акустични плафонски панели"
    },
    category: {
      en: "Office",
      mk: "Канцеларија"
    },
    price: 16500,
    currency: "MKD",
    image: "/images/15.png",
    description: {
      en: "Suspended sound-absorbing panels precision routed from sustainable materials.",
      mk: "Висечки панели за апсорпција на звук, прецизно исечени од еколошки материјали."
    }
  },
  {
    id: 16,
    name: {
      en: "Wall-Mounted Floating Desk",
      mk: "Ѕидно лебдечко биро"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 22400,
    currency: "MKD",
    image: "/images/16.png",
    description: {
      en: "Fluid organic seating structure composed of interlocking CNC-sliced plywood fins.",
      mk: "Органска конструкција за седење составена од поврзани ЦНЦ сечени дрвени слоеви."
    }
  },
  {
    id: 17,
    name: {
      en: "Desk with Drawers and Cable Cutout",
      mk: "Биро со фиоки и исечок за кабли"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 17800,
    currency: "MKD",
    image: "/images/17.png",
    description: {
      en: "3D flowing wave relief panel engineered for bar fronts and hospitality spaces.",
      mk: "3Д релјефен панел со бран за преден дел на шанкови и угостителски објекти."
    }
  },
  {
    id: 18,
    name: {
      en: "Desk with Drawers and Cable Cutout",
      mk: "Биро со фиоки и исечок за кабли"
    },
    category: {
      en: "Living Room",
      mk: "Дневна соба"
    },
    price: 9300,
    currency: "MKD",
    image: "/images/18.png",
    description: {
      en: "Interlocking wall cubes crafted with high-precision CNC joinery.",
      mk: "Ѕидни коцки кои се спојуваат, изработени со висока ЦНЦ прецизност."
    }
  },
  {
    id: 19,
    name: {
      en: "L-Shaped Corner Desk",
      mk: "Аголна маса во облик на буквата L"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 11500,
    currency: "MKD",
    image: "/images/19.png",
    description: {
      en: "Entryway seating unit featuring a shoe storage rack beneath a contoured wooden top.",
      mk: "Елемент за предсобје со простор за чевли под контурираното дрвено седиште."
    }
  },
  {
    id: 20,
    name: {
      en: "4-Door Sideboard with Open Display Shelf",
      mk: "Комода со 4 вратички и отворена средишна полица"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 28000,
    currency: "MKD",
    image: "/images/20.png",
    description: {
      en: "Free-standing or floor-to-ceiling wooden partition screen for modern open plans.",
      mk: "Самостоечка или под-плафон преграда за модерно одвојување на просторот."
    }
  },
  {
    id: 21,
    name: {
      en: "Asymmetric Floating Wall Shelves",
      mk: "Асиметрични лебдечки полици за ѕид"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 7600,
    currency: "MKD",
    image: "/images/21.png",
    description: {
      en: "Organic asymmetrical frame with a vacuum-sealed satin finish.",
      mk: "Органска асиметрична рамка со сатенски вакуумски завршен слој."
    }
  },
  {
    id: 22,
    name: {
      en: "Ergonomic Conference Table",
      mk: "Ергономска конференциска маса"
    },
    category: {
      en: "Office",
      mk: "Канцеларија"
    },
    price: 64000,
    currency: "MKD",
    image: "/images/22.png",
    description: {
      en: "Large-format meeting table with integrated pop-up power modules and contoured edges.",
      mk: "Голема маса за состаноци со вградени приклучоци за струја и обработени рабови."
    }
  },
  {
    id: 23,
    name: {
      en: "Minimalist Coat Rack",
      mk: "Минималистичка полица за палта"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 18900,
    currency: "MKD",
    image: "/images/23.png",
    description: {
      en: "Moisture-resistant vacuum-wrapped vanity featuring precision CNC-routed drawer fronts.",
      mk: "Водоотпорен вакуумиран елемент со прецизно ЦНЦ фрезирани предни фиоки."
    }
  },
  {
    id: 24,
    name: {
      en: "Leaning Ladder Shelf",
      mk: "Наклонета полица за скали"
    },
    category: {
      en: "Interior",
      mk: "Ентериер"
    },
    price: 6800,
    currency: "MKD",
    image: "/images/24.png",
    description: {
      en: "Pack of 12 modular 3D wooden tiles designed for feature wall accents.",
      mk: "Пакет од 12 модуларни 3Д дрвени плочки дизајнирани за декорација на ѕидови."
    }
  },
  {
    id: 25,
    name: {
      en: "Round Wood-Framed Wall Mirror",
      mk: "Огледало за ѕид со тркалезна дрвена рамка"
    },
    category: {
      en: "Dining",
      mk: "Трпезарија"
    },
    price: 49500,
    currency: "MKD",
    image: "/images/25.png",
    description: {
      en: "Full set of precision-milled cabinet door facades wrapped in durable vacuum foil.",
      mk: "Комплетен сет фрезирани кујнски вратички обложени со издржлива вакуум фолија."
    }
  }
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
