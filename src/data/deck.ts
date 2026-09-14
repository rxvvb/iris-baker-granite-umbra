export type ArtistId = "adela" | "charli" | "ariana" | "ice" | "olivia";

export type Album = {
  id: string;
  artistId: ArtistId;
  title: string;
  year: string;
  cover: string;
  kind: string;
  tracks: string[];
  blurb: string;
  hue: string;
};

export type Artist = {
  id: ArtistId;
  name: string;
  tag: string;
  era: string;
  portrait: string;
  from: string;
  quote: string;
  bio: string;
  why: string;
  hits: { title: string; note: string }[];
};

export const ARTISTS: Artist[] = [
  {
    id: "adela",
    name: "ADÉLA",
    tag: "prima ballerina pop",
    era: "2024 — 2026",
    portrait: "/media/artists/adela.jpg",
    from: "Братислава → Лос-Анджелес",
    quote: "I'd rather be a nobody than to be like anyone.",
    bio: "Адэла Ергова. Балет, Dream Academy, вылет из будущего KATSEYE — и сразу сольный разгон. Первая словацкая артистка в Billboard Hot 100. Подписана на Capitol. Вайб: мокрый хром, розовый flash, шпионка в Louboutin.",
    why: "Она звучит как 2010-е, которые наконец дописали. Грязный поп, балетная осанка и наглость дебютантки, которая уже знает, что она — prima.",
    hits: [
      { title: "Ain't In LA", note: "прорыв · Hot 100" },
      { title: "Nicole Kidman", note: "клубный сингл PRIMA" },
      { title: "KGB", note: "K-G-Bitch" },
      { title: "Red Bottoms", note: "лакированные каблуки" },
      { title: "SUPERSCAR", note: "ранний гимн" },
      { title: "DeathByDevotion", note: "Dylan Brady" },
    ],
  },
  {
    id: "charli",
    name: "Charli xcx",
    tag: "brat / after brat",
    era: "2013 — 2026",
    portrait: "/media/artists/charli.jpg",
    from: "Эссекс → весь интернет",
    quote: "the dance floor is dead.",
    bio: "Чарли переписала поп дважды. Сначала PC Music и Crash, потом BRAT — кислотное лето 2024, слово года, три «Грэмми». В 2026 развернулась: саундтрек Wuthering Heights и рок-пластинка Music, Fashion, Film. Анти-brat. Шум, гранж, подиум в ад.",
    why: "Никто так не умеет менять форму и оставаться собой. Сначала она сделала вечеринку из всей культуры, потом сама её закрыла.",
    hits: [
      { title: "360", note: "brat summer" },
      { title: "Von Dutch", note: "Best Dance Pop" },
      { title: "Apple", note: "тикток-хорео" },
      { title: "Guess", note: "с Billie Eilish" },
      { title: "Rock Music", note: "MFF 2026" },
      { title: "SS26", note: "подиум в ад" },
    ],
  },
  {
    id: "ariana",
    name: "Ariana Grande",
    tag: "eternal / petal",
    era: "2013 — 2026",
    portrait: "/media/artists/ariana.jpg",
    from: "Флорида → Wicked",
    quote: "it's all bad news.",
    bio: "Семь студийников до petal. Голос, который узнают с первого вздоха. Eternal Sunshine (2024) — рассвет после thank u, next. Wicked сделала её экранной Glinda. petal (июль 2026) — чёрно-белый портрет без хвоста, lowercase, BabyDoll Records. Хрупко и очень громко.",
    why: "Она умеет быть и конфеткой, и бездной. Petal — тихий разворот звезды, которая больше не обязана быть милой.",
    hits: [
      { title: "we can't be friends", note: "№1 Hot 100" },
      { title: "yes, and?", note: "eternal sunshine" },
      { title: "Hate That I Made You Love Me", note: "lead petal" },
      { title: "7 rings", note: "thank u, next" },
      { title: "positions", note: "sage era" },
      { title: "Into You", note: "Dangerous Woman" },
    ],
  },
  {
    id: "ice",
    name: "Ice Spice",
    tag: "princess of the Bronx",
    era: "2021 — 2026",
    portrait: "/media/artists/icespice.jpg",
    from: "Бронкс, Нью-Йорк",
    quote: "you think you the shit, bitch?",
    bio: "Isis Gaston. Munch взорвал 2022-й, Like..? закрепил, Y2K! (2024) — дебютный альбом в розовом гепарде. MTV Best New Artist. Дрилл, который звучит как жевательная резинка. 2025–26: Baddie Baddie, Big Guy, Out My Face. Эстетика: розовый мех, низкая посадка, Bronx cool.",
    why: "Она сделала дрилл гламурным, не потеряв район. Голос — ленивый клик. Образ — весь Y2K сразу.",
    hits: [
      { title: "Munch (Feelin' U)", note: "прорыв" },
      { title: "In Ha Mood", note: "Like..?" },
      { title: "Princess Diana", note: "с Nicki Minaj" },
      { title: "Barbie World", note: "с Nicki + Aqua" },
      { title: "Think U The Shit (Fart)", note: "Y2K!" },
      { title: "Did It First", note: "с Central Cee" },
    ],
  },
  {
    id: "olivia",
    name: "Olivia Rodrigo",
    tag: "sad girl stadium",
    era: "2021 — 2026",
    portrait: "/media/artists/olivia.jpg",
    from: "Темекула → арены мира",
    quote: "you seem pretty sad for a girl so in love",
    bio: "Дневник, который стал стадионом. SOUR — drivers license и поколение в наушниках. GUTS — vampire, злость, кожа. Третий альбом you seem pretty sad for a girl so in love (июнь 2026) — любовь, которая уже трещит. drop dead, the cure, stupid song. Беж, плёнка, почерк на полях.",
    why: "Она пишет так, будто подслушала твой черновик. И при этом заполняет арены. Третий альбом — взросление без потери яда.",
    hits: [
      { title: "drivers license", note: "SOUR · история" },
      { title: "good 4 u", note: "поп-панк крик" },
      { title: "vampire", note: "GUTS · №1" },
      { title: "drop dead", note: "2026" },
      { title: "the cure", note: "второй сингл" },
      { title: "stupid song", note: "Spotify Global №1" },
    ],
  },
];

export const ALBUMS: Album[] = [
  {
    id: "prima",
    artistId: "adela",
    title: "PRIMA",
    year: "2026",
    cover: "/media/albums/adela-prima.jpg",
    kind: "дебютный альбом",
    hue: "chrome",
    tracks: ["KGB", "Nicole Kidman", "Red Bottoms", "Therapy", "Marijuana", "Ain't In LA"],
    blurb:
      "4 сентября 2026, Capitol. 11 треков, 31 минута. Название — от prima ballerina: первая, главная, незаменимая. Хром, мокрая кожа, поп, который смотрит в камеру.",
  },
  {
    id: "provocateur",
    artistId: "adela",
    title: "The Provocateur",
    year: "2025",
    cover: "/media/albums/adela-provocateur.jpg",
    kind: "дебютный EP",
    hue: "magenta",
    tracks: ["DeathByDevotion", "MachineGirl", "SexOnTheBeat"],
    blurb:
      "Август 2025. Гиперпоп, вспышка камеры, розовая ярость. Ещё не prima — уже провокация. Dylan Brady на продюсировании.",
  },
  {
    id: "superscar",
    artistId: "adela",
    title: "SUPERSCAR",
    year: "2024",
    cover: "/media/albums/adela-superscar.jpg",
    kind: "сингл",
    hue: "magenta",
    tracks: ["SUPERSCAR"],
    blurb: "Ранний гимн. Шрам как украшение. Трек, на котором фанаты узнали, что ADÉLA — это всерьёз.",
  },
  {
    id: "kgb",
    artistId: "adela",
    title: "KGB",
    year: "2026",
    cover: "/media/albums/adela-kgb.jpg",
    kind: "лид-сингл PRIMA",
    hue: "chrome",
    tracks: ["KGB"],
    blurb: "Just a little European girl, was plotting on my rise. Шпионка поп-музыки. The Dare на продюсировании.",
  },
  {
    id: "redbottoms",
    artistId: "adela",
    title: "Red Bottoms",
    year: "2026",
    cover: "/media/albums/adela-redbottoms.jpg",
    kind: "сингл PRIMA",
    hue: "crimson",
    tracks: ["Red Bottoms"],
    blurb: "Лакированная подошва, яд и подиум. Второй сингл с PRIMA — про статус, который носят на каблуках.",
  },
  {
    id: "aintinla",
    artistId: "adela",
    title: "Ain't In LA",
    year: "2026",
    cover: "/media/albums/adela-aintinla.jpg",
    kind: "прорывной сингл",
    hue: "chrome",
    tracks: ["Ain't In LA"],
    blurb:
      "Первая словацкая песня в Billboard Hot 100. Отказ от мифа, что успех бывает только в Лос-Анджелесе. Хиты лета 2026.",
  },
  {
    id: "death",
    artistId: "adela",
    title: "DeathByDevotion",
    year: "2025",
    cover: "/media/albums/adela-death.jpg",
    kind: "сингл",
    hue: "magenta",
    tracks: ["DeathByDevotion"],
    blurb: "Первый релиз на Capitol. Продюсеры Dylan Brady и Zhone. Преданность как оружие.",
  },
  {
    id: "brat",
    artistId: "charli",
    title: "BRAT",
    year: "2024",
    cover: "/media/albums/charli-brat.jpg",
    kind: "студийный альбом",
    hue: "brat",
    tracks: ["360", "Von Dutch", "Club classics", "Sympathy is a knife", "Apple", "Guess"],
    blurb:
      "Кислотный зелёный. Строчные буквы. Лето, которое назвали словом года. Три «Грэмми». Обложка без лица — самое brat, что можно сделать.",
  },
  {
    id: "brat-remix",
    artistId: "charli",
    title: "Brat and it's completely different but also still brat",
    year: "2024",
    cover: "/media/albums/charli-brat-remix.jpg",
    kind: "remix album",
    hue: "brat",
    tracks: ["360 feat. Robyn & Yung Lean", "Girl, so confusing feat. Lorde", "Guess feat. Billie Eilish"],
    blurb: "Белая обложка, чёрный текст. Тот же brat, но с подругами: Lorde, Billie, Ariana, The Weeknd, Shygirl.",
  },
  {
    id: "mff",
    artistId: "charli",
    title: "Music, Fashion, Film",
    year: "2026",
    cover: "/media/albums/charli-mff.jpg",
    kind: "8-й студийный",
    hue: "smoke",
    tracks: ["Rock Music", "SS26", "Wink Wink"],
    blurb:
      "24 июля 2026. Анти-brat. Гранж, бритпоп, шум. Дебют №3 Billboard 200 — лучшая неделя в карьере. Подиум, который ведёт в ад.",
  },
  {
    id: "crash",
    artistId: "charli",
    title: "CRASH",
    year: "2022",
    cover: "/media/albums/charli-crash.jpg",
    kind: "студийный альбом",
    hue: "crash",
    tracks: ["Crash", "Good Ones", "New Shapes", "Beg For You", "Used To Know Me"],
    blurb: "Прощание с лейблом в образе гламурной катастрофы. Красный лак, Y2K-суперзвезда, поп без извинений.",
  },
  {
    id: "charli-lp",
    artistId: "charli",
    title: "Charli",
    year: "2019",
    cover: "/media/albums/charli-charli.jpg",
    kind: "студийный альбом",
    hue: "iceblue",
    tracks: ["Next Level Charli", "Gone", "2099", "Official", "Silver Cross"],
    blurb: "Голубой хром. Будущее, которое она обещала на микстейпах, наконец вышло как альбом.",
  },
  {
    id: "pop2",
    artistId: "charli",
    title: "Pop 2",
    year: "2017",
    cover: "/media/albums/charli-pop2.jpg",
    kind: "микстейп",
    hue: "pop2",
    tracks: ["Backseat", "Out of My Head", "Unlock It", "I Got It", "Track 10"],
    blurb: "Священный текст гиперпопа. Розовый, гостевые куплеты, A. G. Cook. Без этого не было бы BRAT.",
  },
  {
    id: "hifn",
    artistId: "charli",
    title: "how i'm feeling now",
    year: "2020",
    cover: "/media/albums/charli-hifn.jpg",
    kind: "локдаун-альбом",
    hue: "pixel",
    tracks: ["pink diamond", "forever", "claws", "enemy"],
    blurb: "Записан в карантине за шесть недель. Пиксели, тревога, нежность. Самый честный Charli.",
  },
  {
    id: "wuthering",
    artistId: "charli",
    title: "Wuthering Heights",
    year: "2026",
    cover: "/media/albums/charli-wuthering.jpg",
    kind: "саундтрек",
    hue: "moor",
    tracks: ["Wuthering Heights"],
    blurb: "Саундтрек к фильму Emerald Fennell. Февраль 2026, №1 UK. Вереск, тьма, не brat.",
  },
  {
    id: "petal",
    artistId: "ariana",
    title: "petal",
    year: "2026",
    cover: "/media/albums/ariana-petal.jpg",
    kind: "8-й студийный",
    hue: "petal",
    tracks: ["kiss me", "Hate That I Made You Love Me", "petal", "stay"],
    blurb:
      "31 июля 2026, BabyDoll / Republic. Чёрно-белый крупный план, брюнетка, без хвоста. Lowercase. UK №1. Тихий альбом большой звезды.",
  },
  {
    id: "eternal",
    artistId: "ariana",
    title: "eternal sunshine",
    year: "2024",
    cover: "/media/albums/ariana-eternal.jpg",
    kind: "7-й студийный",
    hue: "sun",
    tracks: ["yes, and?", "we can't be friends", "supernatural", "the boy is mine", "eternal sunshine"],
    blurb: "Светлая комната после развода. №1 Billboard 200. we can't be friends — рана, которую поставили на репит весь мир.",
  },
  {
    id: "positions",
    artistId: "ariana",
    title: "Positions",
    year: "2020",
    cover: "/media/albums/ariana-positions.jpg",
    kind: "студийный альбом",
    hue: "sage",
    tracks: ["positions", "34+35", "pov", "safety net"],
    blurb: "Шалфей, косички, домашняя нежность. Карантинный поп, который пахнет кухней и лавандой.",
  },
  {
    id: "tun",
    artistId: "ariana",
    title: "thank u, next",
    year: "2019",
    cover: "/media/albums/ariana-tun.jpg",
    kind: "студийный альбом",
    hue: "nude",
    tracks: ["thank u, next", "7 rings", "break up with your girlfriend", "NASA", "needy"],
    blurb: "Бежевый бант. Самый честный дневник 2010-х. Хиты, которые стали мемами и всё равно ранят.",
  },
  {
    id: "sweetener",
    artistId: "ariana",
    title: "Sweetener",
    year: "2018",
    cover: "/media/albums/ariana-sweetener.jpg",
    kind: "студийный альбом",
    hue: "sweet",
    tracks: ["God is a woman", "no tears left to cry", "breathin", "everytime"],
    blurb: "Жёлто-зелёный рассвет после Манчестера. Pharrell, Max Martin и голос, который выбирает свет.",
  },
  {
    id: "dw",
    artistId: "ariana",
    title: "Dangerous Woman",
    year: "2016",
    cover: "/media/albums/ariana-dw.jpg",
    kind: "студийный альбом",
    hue: "wine",
    tracks: ["Dangerous Woman", "Into You", "Side to Side", "Greedy"],
    blurb: "Красный бархат. Взрослая Ariana. Into You до сих пор лучший клубный трек её каталога.",
  },
  {
    id: "y2k",
    artistId: "ice",
    title: "Y2K!",
    year: "2024",
    cover: "/media/albums/ice-y2k.jpg",
    kind: "дебютный альбом",
    hue: "y2k",
    tracks: ["Phat Butt", "Oh Shhh…", "Did It First", "Think U The Shit (Fart)", "Gimmie A Light", "TTYL"],
    blurb: "26 июля 2024. Розовый гепард, вспышка, Bronx Y2K. Десять треков — как набор наклеек на Nokia.",
  },
  {
    id: "like",
    artistId: "ice",
    title: "Like..?",
    year: "2023",
    cover: "/media/albums/ice-like.jpg",
    kind: "дебютный EP",
    hue: "like",
    tracks: ["In Ha Mood", "Princess Diana", "Deli", "Gangsta Boo", "Actin a Smoochie"],
    blurb: "Январь 2023. Розовый фон, она в центре. EP, который сделал Ice Spice именем, а не вайном.",
  },
  {
    id: "like-deluxe",
    artistId: "ice",
    title: "Like..? (Deluxe)",
    year: "2023",
    cover: "/media/albums/ice-like-deluxe.jpg",
    kind: "deluxe EP",
    hue: "like",
    tracks: ["Barbie World", "Deli", "In Ha Mood", "Princess Diana"],
    blurb: "Тот же розовый, больше хитов. Barbie World с Nicki Minaj — пластиковый трон.",
  },
  {
    id: "princess",
    artistId: "ice",
    title: "Princess Diana",
    year: "2023",
    cover: "/media/albums/ice-princess.jpg",
    kind: "сингл",
    hue: "y2k",
    tracks: ["Princess Diana (feat. Nicki Minaj)"],
    blurb: "Две принцессы. Розовый мех, корона, Bronx. Совместка, которую ждали с первого Munch.",
  },
  {
    id: "inhamood",
    artistId: "ice",
    title: "In Ha Mood",
    year: "2023",
    cover: "/media/albums/ice-inhamood.jpg",
    kind: "сингл",
    hue: "like",
    tracks: ["In Ha Mood"],
    blurb: "Ленивый дрилл, розовый свет. Главный трек Like..? — настроение как бренд.",
  },
  {
    id: "baddie",
    artistId: "ice",
    title: "Baddie Baddie",
    year: "2025",
    cover: "/media/albums/ice-baddie.jpg",
    kind: "сингл",
    hue: "y2k",
    tracks: ["Baddie Baddie"],
    blurb: "2025. Она всё ещё та самая baddie. Розовый не выцвел.",
  },
  {
    id: "sour",
    artistId: "olivia",
    title: "SOUR",
    year: "2021",
    cover: "/media/albums/olivia-sour.jpg",
    kind: "дебютный альбом",
    hue: "sour",
    tracks: ["drivers license", "deja vu", "good 4 u", "traitor", "happier"],
    blurb: "Фиолетовый язык. Дебют, который сломал стриминг. Дневник 17 лет, прочитанный всем миром.",
  },
  {
    id: "guts",
    artistId: "olivia",
    title: "GUTS",
    year: "2023",
    cover: "/media/albums/olivia-guts.jpg",
    kind: "2-й студийный",
    hue: "guts",
    tracks: ["all-american bitch", "vampire", "bad idea right?", "get him back!", "lacy"],
    blurb: "Чёрный фон, гримаса, кишки наружу. Злость после SOUR. vampire — №1, тур — арены.",
  },
  {
    id: "guts-spilled",
    artistId: "olivia",
    title: "GUTS (spilled)",
    year: "2024",
    cover: "/media/albums/olivia-guts-spilled.jpg",
    kind: "deluxe",
    hue: "guts",
    tracks: ["obsessed", "so american", "stranger", "scared of my guitar"],
    blurb: "Пролитые кишки. Дополнительные треки, та же ярость, чуть больше крови.",
  },
  {
    id: "ysps",
    artistId: "olivia",
    title: "you seem pretty sad for a girl so in love",
    year: "2026",
    cover: "/media/albums/olivia-ysps.jpg",
    kind: "3-й студийный",
    hue: "cream",
    tracks: ["drop dead", "the cure", "stupid song"],
    blurb:
      "Июнь 2026. Беж, плёнка, почерк. Любовь, в которой уже растёт тревога. Крупнейший дебют карьеры — и самый тихий визуально.",
  },
  {
    id: "drivers",
    artistId: "olivia",
    title: "drivers license",
    year: "2021",
    cover: "/media/albums/olivia-drivers.jpg",
    kind: "сингл",
    hue: "sour",
    tracks: ["drivers license"],
    blurb: "Песня, с которой началось всё. Права, слёзы, весь мир в одной машине.",
  },
  {
    id: "dropdead",
    artistId: "olivia",
    title: "drop dead",
    year: "2026",
    cover: "/media/albums/olivia-dropdead.jpg",
    kind: "лид-сингл",
    hue: "cream",
    tracks: ["drop dead"],
    blurb: "Открытие третьей эры. Не крик GUTS — холодная нежность, которая бьёт сильнее.",
  },
];

export type SlideType =
  | "title"
  | "picker"
  | "hero"
  | "album"
  | "discog"
  | "hits"
  | "gallery"
  | "why"
  | "finale";

export type Slide = {
  id: string;
  type: SlideType;
  artistId?: ArtistId;
  albumId?: string;
  theme: string;
  kicker?: string;
  title?: string;
  body?: string;
};

export const SLIDES: Slide[] = [
  { id: "title", type: "title", theme: "hub", kicker: "25 слайдов · 5 вселенных", title: "мои любимые артисты" },
  { id: "picker", type: "picker", theme: "hub", kicker: "выбери, с кого начать", title: "нажми на лицо" },
  {
    id: "adela-hero",
    type: "hero",
    artistId: "adela",
    theme: "adela",
    kicker: "01  ADÉLA",
    title: "prima",
  },
  {
    id: "adela-prov",
    type: "album",
    artistId: "adela",
    albumId: "provocateur",
    theme: "adela-prov",
    kicker: "EP · 2025",
  },
  {
    id: "adela-prima",
    type: "album",
    artistId: "adela",
    albumId: "prima",
    theme: "adela-prima",
    kicker: "альбом · 2026",
  },
  {
    id: "adela-hits",
    type: "hits",
    artistId: "adela",
    theme: "adela",
    kicker: "синглы и шрамы",
    title: "нажми обложку",
  },
  {
    id: "charli-hero",
    type: "hero",
    artistId: "charli",
    theme: "charli",
    kicker: "02  CHARLI XCX",
    title: "brat, then not",
  },
  {
    id: "charli-brat",
    type: "album",
    artistId: "charli",
    albumId: "brat",
    theme: "charli-brat",
    kicker: "лето 2024",
  },
  {
    id: "charli-mff",
    type: "album",
    artistId: "charli",
    albumId: "mff",
    theme: "charli-mff",
    kicker: "лето 2026",
  },
  {
    id: "charli-discog",
    type: "discog",
    artistId: "charli",
    theme: "charli",
    kicker: "каталог",
    title: "все эпохи",
  },
  {
    id: "ariana-hero",
    type: "hero",
    artistId: "ariana",
    theme: "ariana",
    kicker: "03  ARIANA GRANDE",
    title: "petal",
  },
  {
    id: "ariana-eternal",
    type: "album",
    artistId: "ariana",
    albumId: "eternal",
    theme: "ariana-sun",
    kicker: "2024",
  },
  {
    id: "ariana-petal",
    type: "album",
    artistId: "ariana",
    albumId: "petal",
    theme: "ariana-petal",
    kicker: "2026",
  },
  {
    id: "ariana-discog",
    type: "discog",
    artistId: "ariana",
    theme: "ariana",
    kicker: "классика",
    title: "эры",
  },
  {
    id: "ice-hero",
    type: "hero",
    artistId: "ice",
    theme: "ice",
    kicker: "04  ICE SPICE",
    title: "Y2K princess",
  },
  {
    id: "ice-like",
    type: "album",
    artistId: "ice",
    albumId: "like",
    theme: "ice-like",
    kicker: "EP · 2023",
  },
  {
    id: "ice-y2k",
    type: "album",
    artistId: "ice",
    albumId: "y2k",
    theme: "ice-y2k",
    kicker: "альбом · 2024",
  },
  {
    id: "ice-hits",
    type: "hits",
    artistId: "ice",
    theme: "ice",
    kicker: "хиты Bronx",
    title: "нажми обложку",
  },
  {
    id: "olivia-hero",
    type: "hero",
    artistId: "olivia",
    theme: "olivia",
    kicker: "05  OLIVIA RODRIGO",
    title: "so in love",
  },
  {
    id: "olivia-sour",
    type: "album",
    artistId: "olivia",
    albumId: "sour",
    theme: "olivia-sour",
    kicker: "2021",
  },
  {
    id: "olivia-guts",
    type: "album",
    artistId: "olivia",
    albumId: "guts",
    theme: "olivia-guts",
    kicker: "2023",
  },
  {
    id: "olivia-ysps",
    type: "album",
    artistId: "olivia",
    albumId: "ysps",
    theme: "olivia-cream",
    kicker: "2026",
  },
  { id: "gallery", type: "gallery", theme: "hub", kicker: "все обложки", title: "зал славы" },
  { id: "why", type: "why", theme: "hub", kicker: "почему эти пять", title: "мой плейлист" },
  { id: "finale", type: "finale", theme: "hub", kicker: "конец · или сначала", title: "на бис" },
];

export const ARTIST_START: Record<ArtistId, number> = {
  adela: 2,
  charli: 6,
  ariana: 10,
  ice: 14,
  olivia: 18,
};

export function artistById(id: ArtistId) {
  return ARTISTS.find((a) => a.id === id)!;
}

export function albumById(id: string) {
  return ALBUMS.find((a) => a.id === id)!;
}

export function albumsByArtist(id: ArtistId) {
  return ALBUMS.filter((a) => a.artistId === id);
}
