import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ChevronLeft, r as ChevronRight, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-qfVGMpcd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ARTISTS = [
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
			{
				title: "Ain't In LA",
				note: "прорыв · Hot 100"
			},
			{
				title: "Nicole Kidman",
				note: "клубный сингл PRIMA"
			},
			{
				title: "KGB",
				note: "K-G-Bitch"
			},
			{
				title: "Red Bottoms",
				note: "лакированные каблуки"
			},
			{
				title: "SUPERSCAR",
				note: "ранний гимн"
			},
			{
				title: "DeathByDevotion",
				note: "Dylan Brady"
			}
		]
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
			{
				title: "360",
				note: "brat summer"
			},
			{
				title: "Von Dutch",
				note: "Best Dance Pop"
			},
			{
				title: "Apple",
				note: "тикток-хорео"
			},
			{
				title: "Guess",
				note: "с Billie Eilish"
			},
			{
				title: "Rock Music",
				note: "MFF 2026"
			},
			{
				title: "SS26",
				note: "подиум в ад"
			}
		]
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
			{
				title: "we can't be friends",
				note: "№1 Hot 100"
			},
			{
				title: "yes, and?",
				note: "eternal sunshine"
			},
			{
				title: "Hate That I Made You Love Me",
				note: "lead petal"
			},
			{
				title: "7 rings",
				note: "thank u, next"
			},
			{
				title: "positions",
				note: "sage era"
			},
			{
				title: "Into You",
				note: "Dangerous Woman"
			}
		]
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
			{
				title: "Munch (Feelin' U)",
				note: "прорыв"
			},
			{
				title: "In Ha Mood",
				note: "Like..?"
			},
			{
				title: "Princess Diana",
				note: "с Nicki Minaj"
			},
			{
				title: "Barbie World",
				note: "с Nicki + Aqua"
			},
			{
				title: "Think U The Shit (Fart)",
				note: "Y2K!"
			},
			{
				title: "Did It First",
				note: "с Central Cee"
			}
		]
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
			{
				title: "drivers license",
				note: "SOUR · история"
			},
			{
				title: "good 4 u",
				note: "поп-панк крик"
			},
			{
				title: "vampire",
				note: "GUTS · №1"
			},
			{
				title: "drop dead",
				note: "2026"
			},
			{
				title: "the cure",
				note: "второй сингл"
			},
			{
				title: "stupid song",
				note: "Spotify Global №1"
			}
		]
	}
];
var ALBUMS = [
	{
		id: "prima",
		artistId: "adela",
		title: "PRIMA",
		year: "2026",
		cover: "/media/albums/adela-prima.jpg",
		kind: "дебютный альбом",
		hue: "chrome",
		tracks: [
			"KGB",
			"Nicole Kidman",
			"Red Bottoms",
			"Therapy",
			"Marijuana",
			"Ain't In LA"
		],
		blurb: "4 сентября 2026, Capitol. 11 треков, 31 минута. Название — от prima ballerina: первая, главная, незаменимая. Хром, мокрая кожа, поп, который смотрит в камеру."
	},
	{
		id: "provocateur",
		artistId: "adela",
		title: "The Provocateur",
		year: "2025",
		cover: "/media/albums/adela-provocateur.jpg",
		kind: "дебютный EP",
		hue: "magenta",
		tracks: [
			"DeathByDevotion",
			"MachineGirl",
			"SexOnTheBeat"
		],
		blurb: "Август 2025. Гиперпоп, вспышка камеры, розовая ярость. Ещё не prima — уже провокация. Dylan Brady на продюсировании."
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
		blurb: "Ранний гимн. Шрам как украшение. Трек, на котором фанаты узнали, что ADÉLA — это всерьёз."
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
		blurb: "Just a little European girl, was plotting on my rise. Шпионка поп-музыки. The Dare на продюсировании."
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
		blurb: "Лакированная подошва, яд и подиум. Второй сингл с PRIMA — про статус, который носят на каблуках."
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
		blurb: "Первая словацкая песня в Billboard Hot 100. Отказ от мифа, что успех бывает только в Лос-Анджелесе. Хиты лета 2026."
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
		blurb: "Первый релиз на Capitol. Продюсеры Dylan Brady и Zhone. Преданность как оружие."
	},
	{
		id: "brat",
		artistId: "charli",
		title: "BRAT",
		year: "2024",
		cover: "/media/albums/charli-brat.jpg",
		kind: "студийный альбом",
		hue: "brat",
		tracks: [
			"360",
			"Von Dutch",
			"Club classics",
			"Sympathy is a knife",
			"Apple",
			"Guess"
		],
		blurb: "Кислотный зелёный. Строчные буквы. Лето, которое назвали словом года. Три «Грэмми». Обложка без лица — самое brat, что можно сделать."
	},
	{
		id: "brat-remix",
		artistId: "charli",
		title: "Brat and it's completely different but also still brat",
		year: "2024",
		cover: "/media/albums/charli-brat-remix.jpg",
		kind: "remix album",
		hue: "brat",
		tracks: [
			"360 feat. Robyn & Yung Lean",
			"Girl, so confusing feat. Lorde",
			"Guess feat. Billie Eilish"
		],
		blurb: "Белая обложка, чёрный текст. Тот же brat, но с подругами: Lorde, Billie, Ariana, The Weeknd, Shygirl."
	},
	{
		id: "mff",
		artistId: "charli",
		title: "Music, Fashion, Film",
		year: "2026",
		cover: "/media/albums/charli-mff.jpg",
		kind: "8-й студийный",
		hue: "smoke",
		tracks: [
			"Rock Music",
			"SS26",
			"Wink Wink"
		],
		blurb: "24 июля 2026. Анти-brat. Гранж, бритпоп, шум. Дебют №3 Billboard 200 — лучшая неделя в карьере. Подиум, который ведёт в ад."
	},
	{
		id: "crash",
		artistId: "charli",
		title: "CRASH",
		year: "2022",
		cover: "/media/albums/charli-crash.jpg",
		kind: "студийный альбом",
		hue: "crash",
		tracks: [
			"Crash",
			"Good Ones",
			"New Shapes",
			"Beg For You",
			"Used To Know Me"
		],
		blurb: "Прощание с лейблом в образе гламурной катастрофы. Красный лак, Y2K-суперзвезда, поп без извинений."
	},
	{
		id: "charli-lp",
		artistId: "charli",
		title: "Charli",
		year: "2019",
		cover: "/media/albums/charli-charli.jpg",
		kind: "студийный альбом",
		hue: "iceblue",
		tracks: [
			"Next Level Charli",
			"Gone",
			"2099",
			"Official",
			"Silver Cross"
		],
		blurb: "Голубой хром. Будущее, которое она обещала на микстейпах, наконец вышло как альбом."
	},
	{
		id: "pop2",
		artistId: "charli",
		title: "Pop 2",
		year: "2017",
		cover: "/media/albums/charli-pop2.jpg",
		kind: "микстейп",
		hue: "pop2",
		tracks: [
			"Backseat",
			"Out of My Head",
			"Unlock It",
			"I Got It",
			"Track 10"
		],
		blurb: "Священный текст гиперпопа. Розовый, гостевые куплеты, A. G. Cook. Без этого не было бы BRAT."
	},
	{
		id: "hifn",
		artistId: "charli",
		title: "how i'm feeling now",
		year: "2020",
		cover: "/media/albums/charli-hifn.jpg",
		kind: "локдаун-альбом",
		hue: "pixel",
		tracks: [
			"pink diamond",
			"forever",
			"claws",
			"enemy"
		],
		blurb: "Записан в карантине за шесть недель. Пиксели, тревога, нежность. Самый честный Charli."
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
		blurb: "Саундтрек к фильму Emerald Fennell. Февраль 2026, №1 UK. Вереск, тьма, не brat."
	},
	{
		id: "petal",
		artistId: "ariana",
		title: "petal",
		year: "2026",
		cover: "/media/albums/ariana-petal.jpg",
		kind: "8-й студийный",
		hue: "petal",
		tracks: [
			"kiss me",
			"Hate That I Made You Love Me",
			"petal",
			"stay"
		],
		blurb: "31 июля 2026, BabyDoll / Republic. Чёрно-белый крупный план, брюнетка, без хвоста. Lowercase. UK №1. Тихий альбом большой звезды."
	},
	{
		id: "eternal",
		artistId: "ariana",
		title: "eternal sunshine",
		year: "2024",
		cover: "/media/albums/ariana-eternal.jpg",
		kind: "7-й студийный",
		hue: "sun",
		tracks: [
			"yes, and?",
			"we can't be friends",
			"supernatural",
			"the boy is mine",
			"eternal sunshine"
		],
		blurb: "Светлая комната после развода. №1 Billboard 200. we can't be friends — рана, которую поставили на репит весь мир."
	},
	{
		id: "positions",
		artistId: "ariana",
		title: "Positions",
		year: "2020",
		cover: "/media/albums/ariana-positions.jpg",
		kind: "студийный альбом",
		hue: "sage",
		tracks: [
			"positions",
			"34+35",
			"pov",
			"safety net"
		],
		blurb: "Шалфей, косички, домашняя нежность. Карантинный поп, который пахнет кухней и лавандой."
	},
	{
		id: "tun",
		artistId: "ariana",
		title: "thank u, next",
		year: "2019",
		cover: "/media/albums/ariana-tun.jpg",
		kind: "студийный альбом",
		hue: "nude",
		tracks: [
			"thank u, next",
			"7 rings",
			"break up with your girlfriend",
			"NASA",
			"needy"
		],
		blurb: "Бежевый бант. Самый честный дневник 2010-х. Хиты, которые стали мемами и всё равно ранят."
	},
	{
		id: "sweetener",
		artistId: "ariana",
		title: "Sweetener",
		year: "2018",
		cover: "/media/albums/ariana-sweetener.jpg",
		kind: "студийный альбом",
		hue: "sweet",
		tracks: [
			"God is a woman",
			"no tears left to cry",
			"breathin",
			"everytime"
		],
		blurb: "Жёлто-зелёный рассвет после Манчестера. Pharrell, Max Martin и голос, который выбирает свет."
	},
	{
		id: "dw",
		artistId: "ariana",
		title: "Dangerous Woman",
		year: "2016",
		cover: "/media/albums/ariana-dw.jpg",
		kind: "студийный альбом",
		hue: "wine",
		tracks: [
			"Dangerous Woman",
			"Into You",
			"Side to Side",
			"Greedy"
		],
		blurb: "Красный бархат. Взрослая Ariana. Into You до сих пор лучший клубный трек её каталога."
	},
	{
		id: "y2k",
		artistId: "ice",
		title: "Y2K!",
		year: "2024",
		cover: "/media/albums/ice-y2k.jpg",
		kind: "дебютный альбом",
		hue: "y2k",
		tracks: [
			"Phat Butt",
			"Oh Shhh…",
			"Did It First",
			"Think U The Shit (Fart)",
			"Gimmie A Light",
			"TTYL"
		],
		blurb: "26 июля 2024. Розовый гепард, вспышка, Bronx Y2K. Десять треков — как набор наклеек на Nokia."
	},
	{
		id: "like",
		artistId: "ice",
		title: "Like..?",
		year: "2023",
		cover: "/media/albums/ice-like.jpg",
		kind: "дебютный EP",
		hue: "like",
		tracks: [
			"In Ha Mood",
			"Princess Diana",
			"Deli",
			"Gangsta Boo",
			"Actin a Smoochie"
		],
		blurb: "Январь 2023. Розовый фон, она в центре. EP, который сделал Ice Spice именем, а не вайном."
	},
	{
		id: "like-deluxe",
		artistId: "ice",
		title: "Like..? (Deluxe)",
		year: "2023",
		cover: "/media/albums/ice-like-deluxe.jpg",
		kind: "deluxe EP",
		hue: "like",
		tracks: [
			"Barbie World",
			"Deli",
			"In Ha Mood",
			"Princess Diana"
		],
		blurb: "Тот же розовый, больше хитов. Barbie World с Nicki Minaj — пластиковый трон."
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
		blurb: "Две принцессы. Розовый мех, корона, Bronx. Совместка, которую ждали с первого Munch."
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
		blurb: "Ленивый дрилл, розовый свет. Главный трек Like..? — настроение как бренд."
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
		blurb: "2025. Она всё ещё та самая baddie. Розовый не выцвел."
	},
	{
		id: "sour",
		artistId: "olivia",
		title: "SOUR",
		year: "2021",
		cover: "/media/albums/olivia-sour.jpg",
		kind: "дебютный альбом",
		hue: "sour",
		tracks: [
			"drivers license",
			"deja vu",
			"good 4 u",
			"traitor",
			"happier"
		],
		blurb: "Фиолетовый язык. Дебют, который сломал стриминг. Дневник 17 лет, прочитанный всем миром."
	},
	{
		id: "guts",
		artistId: "olivia",
		title: "GUTS",
		year: "2023",
		cover: "/media/albums/olivia-guts.jpg",
		kind: "2-й студийный",
		hue: "guts",
		tracks: [
			"all-american bitch",
			"vampire",
			"bad idea right?",
			"get him back!",
			"lacy"
		],
		blurb: "Чёрный фон, гримаса, кишки наружу. Злость после SOUR. vampire — №1, тур — арены."
	},
	{
		id: "guts-spilled",
		artistId: "olivia",
		title: "GUTS (spilled)",
		year: "2024",
		cover: "/media/albums/olivia-guts-spilled.jpg",
		kind: "deluxe",
		hue: "guts",
		tracks: [
			"obsessed",
			"so american",
			"stranger",
			"scared of my guitar"
		],
		blurb: "Пролитые кишки. Дополнительные треки, та же ярость, чуть больше крови."
	},
	{
		id: "ysps",
		artistId: "olivia",
		title: "you seem pretty sad for a girl so in love",
		year: "2026",
		cover: "/media/albums/olivia-ysps.jpg",
		kind: "3-й студийный",
		hue: "cream",
		tracks: [
			"drop dead",
			"the cure",
			"stupid song"
		],
		blurb: "Июнь 2026. Беж, плёнка, почерк. Любовь, в которой уже растёт тревога. Крупнейший дебют карьеры — и самый тихий визуально."
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
		blurb: "Песня, с которой началось всё. Права, слёзы, весь мир в одной машине."
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
		blurb: "Открытие третьей эры. Не крик GUTS — холодная нежность, которая бьёт сильнее."
	}
];
var SLIDES = [
	{
		id: "title",
		type: "title",
		theme: "hub",
		kicker: "25 слайдов · 5 вселенных",
		title: "мои любимые артисты"
	},
	{
		id: "picker",
		type: "picker",
		theme: "hub",
		kicker: "выбери, с кого начать",
		title: "нажми на лицо"
	},
	{
		id: "adela-hero",
		type: "hero",
		artistId: "adela",
		theme: "adela",
		kicker: "01  ADÉLA",
		title: "prima"
	},
	{
		id: "adela-prov",
		type: "album",
		artistId: "adela",
		albumId: "provocateur",
		theme: "adela-prov",
		kicker: "EP · 2025"
	},
	{
		id: "adela-prima",
		type: "album",
		artistId: "adela",
		albumId: "prima",
		theme: "adela-prima",
		kicker: "альбом · 2026"
	},
	{
		id: "adela-hits",
		type: "hits",
		artistId: "adela",
		theme: "adela",
		kicker: "синглы и шрамы",
		title: "нажми обложку"
	},
	{
		id: "charli-hero",
		type: "hero",
		artistId: "charli",
		theme: "charli",
		kicker: "02  CHARLI XCX",
		title: "brat, then not"
	},
	{
		id: "charli-brat",
		type: "album",
		artistId: "charli",
		albumId: "brat",
		theme: "charli-brat",
		kicker: "лето 2024"
	},
	{
		id: "charli-mff",
		type: "album",
		artistId: "charli",
		albumId: "mff",
		theme: "charli-mff",
		kicker: "лето 2026"
	},
	{
		id: "charli-discog",
		type: "discog",
		artistId: "charli",
		theme: "charli",
		kicker: "каталог",
		title: "все эпохи"
	},
	{
		id: "ariana-hero",
		type: "hero",
		artistId: "ariana",
		theme: "ariana",
		kicker: "03  ARIANA GRANDE",
		title: "petal"
	},
	{
		id: "ariana-eternal",
		type: "album",
		artistId: "ariana",
		albumId: "eternal",
		theme: "ariana-sun",
		kicker: "2024"
	},
	{
		id: "ariana-petal",
		type: "album",
		artistId: "ariana",
		albumId: "petal",
		theme: "ariana-petal",
		kicker: "2026"
	},
	{
		id: "ariana-discog",
		type: "discog",
		artistId: "ariana",
		theme: "ariana",
		kicker: "классика",
		title: "эры"
	},
	{
		id: "ice-hero",
		type: "hero",
		artistId: "ice",
		theme: "ice",
		kicker: "04  ICE SPICE",
		title: "Y2K princess"
	},
	{
		id: "ice-like",
		type: "album",
		artistId: "ice",
		albumId: "like",
		theme: "ice-like",
		kicker: "EP · 2023"
	},
	{
		id: "ice-y2k",
		type: "album",
		artistId: "ice",
		albumId: "y2k",
		theme: "ice-y2k",
		kicker: "альбом · 2024"
	},
	{
		id: "ice-hits",
		type: "hits",
		artistId: "ice",
		theme: "ice",
		kicker: "хиты Bronx",
		title: "нажми обложку"
	},
	{
		id: "olivia-hero",
		type: "hero",
		artistId: "olivia",
		theme: "olivia",
		kicker: "05  OLIVIA RODRIGO",
		title: "so in love"
	},
	{
		id: "olivia-sour",
		type: "album",
		artistId: "olivia",
		albumId: "sour",
		theme: "olivia-sour",
		kicker: "2021"
	},
	{
		id: "olivia-guts",
		type: "album",
		artistId: "olivia",
		albumId: "guts",
		theme: "olivia-guts",
		kicker: "2023"
	},
	{
		id: "olivia-ysps",
		type: "album",
		artistId: "olivia",
		albumId: "ysps",
		theme: "olivia-cream",
		kicker: "2026"
	},
	{
		id: "gallery",
		type: "gallery",
		theme: "hub",
		kicker: "все обложки",
		title: "зал славы"
	},
	{
		id: "why",
		type: "why",
		theme: "hub",
		kicker: "почему эти пять",
		title: "мой плейлист"
	},
	{
		id: "finale",
		type: "finale",
		theme: "hub",
		kicker: "конец · или сначала",
		title: "на бис"
	}
];
var ARTIST_START = {
	adela: 2,
	charli: 6,
	ariana: 10,
	ice: 14,
	olivia: 18
};
function artistById(id) {
	return ARTISTS.find((a) => a.id === id);
}
function albumById(id) {
	return ALBUMS.find((a) => a.id === id);
}
function albumsByArtist(id) {
	return ALBUMS.filter((a) => a.artistId === id);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SlideView({ slide, slideKey, onArtist, onAlbum, onStart }) {
	const k = String(slideKey);
	if (slide.type === "title") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleSlide, {
		k,
		onStart
	});
	if (slide.type === "picker") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PickerSlide, {
		k,
		onArtist
	});
	if (slide.type === "hero" && slide.artistId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlide, {
		k,
		artistId: slide.artistId,
		onAlbum
	});
	if (slide.type === "album" && slide.albumId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumSlide, {
		k,
		albumId: slide.albumId,
		onAlbum
	});
	if (slide.type === "discog" && slide.artistId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiscogSlide, {
		k,
		artistId: slide.artistId,
		title: slide.title,
		kicker: slide.kicker,
		onAlbum
	});
	if (slide.type === "hits" && slide.artistId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HitsSlide, {
		k,
		artistId: slide.artistId,
		onAlbum
	});
	if (slide.type === "gallery") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySlide, {
		k,
		onAlbum,
		onArtist
	});
	if (slide.type === "why") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySlide, {
		k,
		onArtist
	});
	if (slide.type === "finale") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinaleSlide, {
		k,
		onStart,
		onArtist
	});
	return null;
}
function TitleSlide({ k, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-end px-5 pb-24 pt-16 sm:px-10 lg:px-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: "25 слайдов · 5 вселенных"
			}, k + "k"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "enter d1 mt-4 font-display text-[12vw] leading-[0.88] font-extrabold tracking-tight sm:text-7xl lg:text-8xl",
				children: [
					"мои",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"любимые",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[var(--slide-accent)]",
						children: "артисты"
					})
				]
			}, k + "t"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter d2 mt-8 flex -space-x-3 sm:-space-x-8",
				children: ARTISTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onStart(),
					className: "relative size-14 overflow-hidden rounded-full ring-2 ring-[var(--slide-bg)] transition-transform duration-150 ease-out hover:z-10 hover:scale-110 active:scale-[0.96] sm:size-24",
					style: { zIndex: ARTISTS.length - i },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.portrait,
						alt: a.name,
						className: "size-full object-cover"
					})
				}, a.id))
			}, k + "p"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter d3 mt-6 max-w-md text-sm leading-relaxed text-[var(--slide-muted)] sm:text-base",
				children: "ADÉLA · Charli xcx · Ariana Grande · Ice Spice · Olivia Rodrigo"
			}, k + "s"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onStart,
				className: "enter d4 mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slide-fg)] px-6 py-3 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]",
				children: ["выбрать артиста", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
			})
		]
	});
}
function PickerSlide({ k, onArtist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pb-24 pt-20 sm:px-8 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: "с кого начнём"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl",
				children: "нажми на лицо"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4",
				children: ARTISTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onArtist(a.id),
					className: cn("enter group relative overflow-hidden rounded-3xl text-left transition-transform duration-150 ease-out active:scale-[0.96]", `d${i + 1}`),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a.portrait,
							alt: a.name,
							className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-linear-to-t from-[var(--color-void)] via-transparent to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "absolute inset-x-0 bottom-0 p-3 sm:p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-sm font-bold tracking-tight sm:text-lg",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[10px] tracking-wide text-[var(--slide-fg)]/70 uppercase",
								children: a.tag
							})]
						})
					]
				}, a.id))
			})
		]
	});
}
function HeroSlide({ k, artistId, onAlbum }) {
	const a = artistById(artistId);
	const featured = albumsByArtist(artistId).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 grid-cols-1 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-[42vh] overflow-hidden lg:min-h-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: a.portrait,
				alt: a.name,
				className: "enter-bloom absolute inset-0 size-full object-cover"
			}, k + "img"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-[var(--slide-bg)] via-transparent to-transparent lg:bg-linear-to-r" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col justify-end px-5 pb-24 pt-6 sm:px-10 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
					children: a.from
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "enter d1 mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-6xl",
					children: a.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "enter d2 mt-1 text-sm text-[var(--slide-accent)]",
					children: [
						a.tag,
						" · ",
						a.era
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "enter d3 mt-5 max-w-lg text-sm leading-relaxed text-[var(--slide-muted)] sm:text-base",
					children: a.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "enter d4 mt-5 font-display text-lg leading-snug font-semibold sm:text-2xl",
					children: [
						"«",
						a.quote,
						"»"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "enter d5 mt-6 flex gap-3 overflow-x-auto pb-2",
					children: featured.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumThumb, {
						album: al,
						onAlbum
					}, al.id))
				})
			]
		})]
	});
}
function AlbumSlide({ k, albumId, onAlbum }) {
	const al = albumById(albumId);
	const a = artistById(al.artistId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid h-full min-h-0 grid-cols-1 items-center gap-6 px-5 pb-24 pt-20 sm:px-10 sm:pt-24 lg:grid-cols-2 lg:gap-12 lg:px-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: (e) => onAlbum(al, e.currentTarget),
			className: "enter-cover mx-auto w-full max-w-sm transition-transform duration-150 ease-out active:scale-[0.96] lg:max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: al.cover,
				alt: al.title,
				className: "cover-glow aspect-square w-full rounded-2xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-3 block text-center text-xs tracking-wide text-[var(--slide-muted)] uppercase",
				children: "нажми обложку"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: [
					a.name,
					" · ",
					al.kind
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-4xl font-extrabold tracking-tight sm:text-6xl",
				children: al.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter d2 mt-2 text-sm text-[var(--slide-accent)]",
				children: al.year
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter d3 mt-5 max-w-xl text-sm leading-relaxed sm:text-base",
				children: al.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "enter d4 mt-6 flex flex-wrap gap-2",
				children: al.tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-full border border-[var(--slide-line)] bg-[var(--slide-card)] px-3 py-1.5 text-xs sm:text-sm",
					children: t
				}, t))
			})
		] })]
	});
}
function DiscogSlide({ k, artistId, title, kicker, onAlbum }) {
	const a = artistById(artistId);
	const list = albumsByArtist(artistId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: [
					kicker,
					" · ",
					a.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-3 lg:grid-cols-4",
				children: list.map((al, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: (e) => onAlbum(al, e.currentTarget),
					className: cn("enter group text-left transition-transform duration-150 ease-out active:scale-[0.96]", `d${Math.min(i + 1, 6)}`),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: al.cover,
							alt: al.title,
							className: "cover-glow aspect-square w-full rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-display text-sm font-semibold leading-tight",
							children: al.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[11px] text-[var(--slide-muted)]",
							children: [
								al.year,
								" · ",
								al.kind
							]
						})
					]
				}, al.id))
			})
		]
	});
}
function HitsSlide({ k, artistId, onAlbum }) {
	const a = artistById(artistId);
	const list = albumsByArtist(artistId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: a.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl",
				children: "хиты и обложки"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: a.hits.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: cn("enter rounded-full bg-[var(--slide-card)] px-3 py-2 text-xs sm:text-sm", `d${Math.min(i + 1, 6)}`),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: h.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-[var(--slide-muted)]",
						children: h.note
					})]
				}, h.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto sm:grid-cols-4",
				children: list.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumThumb, {
					album: al,
					onAlbum,
					large: true
				}, al.id))
			})
		]
	});
}
function GallerySlide({ k, onAlbum, onArtist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pb-24 pt-20 sm:px-8 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: "оригинальные обложки"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl",
				children: "зал славы"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: ARTISTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onArtist(a.id),
					className: "shrink-0 rounded-full border border-[var(--slide-line)] px-3 py-1.5 text-xs transition-transform duration-150 ease-out active:scale-[0.96]",
					children: a.name
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid min-h-0 flex-1 grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-5 lg:grid-cols-7",
				children: ALBUMS.map((al) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: (e) => onAlbum(al, e.currentTarget),
					className: "enter-bloom group overflow-hidden rounded-lg transition-transform duration-150 ease-out active:scale-[0.96]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: al.cover,
						alt: al.title,
						className: "aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
					})
				}, al.id))
			})
		]
	});
}
function WhySlide({ k, onArtist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col px-4 pb-24 pt-20 sm:px-10 sm:pt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: "почему эти пять"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-2 font-display text-3xl font-extrabold sm:text-5xl",
				children: "мой плейлист"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid min-h-0 flex-1 gap-3 overflow-y-auto sm:grid-cols-2 lg:grid-cols-5",
				children: ARTISTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onArtist(a.id),
					className: cn("enter flex flex-col overflow-hidden rounded-3xl bg-[var(--slide-card)] text-left transition-transform duration-150 ease-out active:scale-[0.96]", `d${i + 1}`),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.portrait,
						alt: "",
						className: "h-36 w-full object-cover sm:h-44"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex flex-1 flex-col p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: a.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 text-sm leading-relaxed text-[var(--slide-muted)]",
							children: a.why
						})]
					})]
				}, a.id))
			})
		]
	});
}
function FinaleSlide({ k, onStart, onArtist }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter font-display text-[11px] tracking-[0.28em] uppercase text-[var(--slide-muted)]",
				children: "конец презентации"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "enter d1 mt-4 font-display text-4xl font-extrabold sm:text-6xl",
				children: "на бис"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "enter d2 mt-4 max-w-md text-sm text-[var(--slide-muted)]",
				children: "Пять артисток. Пять палитр. Можно начать сначала — или прыгнуть к кому угодно."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "enter d3 mt-8 flex flex-wrap justify-center gap-3",
				children: ARTISTS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onArtist(a.id),
					className: "size-16 overflow-hidden rounded-full ring-2 ring-[var(--slide-line)] transition-transform duration-150 ease-out hover:scale-110 active:scale-[0.96] sm:size-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: a.portrait,
						alt: a.name,
						className: "size-full object-cover"
					})
				}, a.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onStart,
				className: "enter d4 mt-8 rounded-full bg-[var(--slide-fg)] px-6 py-3 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]",
				children: "сначала"
			})
		]
	});
}
function AlbumThumb({ album, onAlbum, large }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: (e) => onAlbum(album, e.currentTarget),
		className: cn("shrink-0 text-left transition-transform duration-150 ease-out active:scale-[0.96]", large ? "w-full" : "w-24 sm:w-28"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: album.cover,
			alt: album.title,
			className: "cover-glow aspect-square w-full rounded-lg object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1.5 block truncate text-[11px] font-medium",
			children: album.title
		})]
	});
}
function Presentation() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [album, setAlbum] = (0, import_react.useState)(null);
	const [tick, setTick] = (0, import_react.useState)(0);
	const touch = (0, import_react.useRef)(null);
	const slide = SLIDES[index];
	const total = SLIDES.length;
	const go = (0, import_react.useCallback)((next) => {
		setAlbum(null);
		setIndex((next % total + total) % total);
		setTick((t) => t + 1);
	}, [total]);
	const next = (0, import_react.useCallback)(() => go(index + 1), [go, index]);
	const prev = (0, import_react.useCallback)(() => go(index - 1), [go, index]);
	const jumpArtist = (0, import_react.useCallback)((id) => go(ARTIST_START[id]), [go]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "Escape") {
				setAlbum(null);
				return;
			}
			if (album) return;
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				next();
			}
			if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				prev();
			}
			if (e.key === "Home") go(0);
			if (e.key === "End") go(total - 1);
			const n = Number(e.key);
			if (n >= 1 && n <= 5) jumpArtist(ARTISTS[n - 1].id);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		album,
		go,
		jumpArtist,
		next,
		prev,
		total
	]);
	function onPointerDown(e) {
		if (e.target.closest("button, a")) return;
		touch.current = {
			x: e.clientX,
			y: e.clientY
		};
	}
	function onPointerUp(e) {
		if (!touch.current) return;
		const dx = e.clientX - touch.current.x;
		const dy = e.clientY - touch.current.y;
		touch.current = null;
		if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
		if (dx < 0) next();
		else prev();
	}
	const theme = slide.theme;
	const progress = (index + 1) / total;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("deck relative h-dvh overflow-hidden", `theme-${theme}`),
		onPointerDown,
		onPointerUp,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grain",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-3 p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-auto flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",
					children: ARTISTS.map((a) => {
						const active = slide.artistId === a.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => jumpArtist(a.id),
							className: cn("flex shrink-0 items-center gap-2 rounded-full py-1 pr-3 pl-1 text-[11px] font-semibold tracking-wide uppercase transition-transform duration-150 ease-out active:scale-[0.96]", active ? "bg-[var(--slide-fg)] text-[var(--slide-bg)]" : "bg-[var(--slide-card)] text-[var(--slide-fg)]"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: a.portrait,
								alt: "",
								className: "size-7 rounded-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: a.name
							})]
						}, a.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none font-display text-[11px] tracking-[0.2em] text-[var(--slide-muted)] tabular-nums",
					children: [
						String(index + 1).padStart(2, "0"),
						" / ",
						String(total).padStart(2, "0")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 z-30 h-0.5 bg-[var(--slide-line)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "progress h-full bg-[var(--slide-accent)]",
					style: { transform: `scaleX(${progress})` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideView, {
					slide,
					slideKey: tick,
					onArtist: jumpArtist,
					onAlbum: (al) => setAlbum(al),
					onStart: () => go(1)
				}, slide.id)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-3 sm:p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: prev,
						className: "pointer-events-auto flex size-11 items-center justify-center rounded-full bg-[var(--slide-card)] transition-transform duration-150 ease-out active:scale-[0.96]",
						"aria-label": "Предыдущий слайд",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-auto hidden max-w-[60%] items-center gap-1 overflow-x-auto sm:flex",
						children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(i),
							className: cn("nav-dot h-1.5 rounded-full", i === index ? "w-6 bg-[var(--slide-accent)]" : "w-1.5 bg-[var(--slide-muted)] opacity-50"),
							"aria-label": `Слайд ${i + 1}`
						}, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: next,
						className: "pointer-events-auto flex size-11 items-center justify-center rounded-full bg-[var(--slide-fg)] text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]",
						"aria-label": "Следующий слайд",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})
				]
			}),
			album ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlbumLightbox, {
				album,
				onClose: () => setAlbum(null)
			}) : null
		]
	});
}
function AlbumLightbox({ album, onClose }) {
	const artist = artistById(album.artistId);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "Escape") onClose();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center bg-[var(--color-void)]/70 p-4 backdrop-blur-md sm:items-center",
		onClick: onClose,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": album.title,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lightbox-in relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-[var(--slide-bg)] text-[var(--slide-fg)] shadow-2xl sm:grid-cols-2",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: album.cover,
				alt: album.title,
				className: "aspect-square w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-[11px] tracking-[0.24em] uppercase text-[var(--slide-muted)]",
						children: [
							artist.name,
							" · ",
							album.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-2xl font-extrabold sm:text-3xl",
						children: album.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-[var(--slide-accent)]",
						children: album.kind
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed",
						children: album.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: album.tracks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-full border border-[var(--slide-line)] px-3 py-1 text-xs",
							children: t
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onClose,
						className: "mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--slide-fg)] px-4 py-2 text-sm font-semibold text-[var(--slide-bg)] transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), "закрыть"]
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presentation, {});
}
//#endregion
export { Home as component };
