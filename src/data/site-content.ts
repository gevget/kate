export const doctor = {
  fullName: "Романова Екатерина Александровна",
  publicName: "Екатерина Романова",
  experienceYears: 12,
  roles: ["Врач-стоматолог", "Стоматолог-терапевт", "Детская стоматология"],
  tagline: "Качественное лечение начинается с доверия.",
  closingQuote: "Со мной всё было хорошо и понятно.",
  personalTelegram: "https://t.me/doc_katerom",
  phoneDisplay: "+7 (926) 429-93-54",
  phoneHref: "tel:+79264299354",
} as const;

export const heroPortrait = {
  src: "/images/portrait-main-desktop-b-v1.webp",
  alt: "Екатерина Романова, стоматолог, на прозрачном фоне",
  width: 1024,
  height: 1536,
} as const;

export const heroFloatingObjects = {
  adult: {
    src: "/images/hero-adult-dental-float-v1.webp",
    width: 200,
    height: 200,
  },
  child: {
    src: "/images/hero-pediatric-dental-float-v1.webp",
    width: 200,
    height: 200,
  },
} as const;

export const aboutPortrait = {
  src: "/images/portrait-about-desktop-b-v1.webp",
  alt: "Екатерина Романова в стоматологическом кабинете",
  width: 1024,
  height: 1536,
} as const;

export const serviceImages = {
  adults: {
    src: "/images/service-adults-desktop-a-v1.webp",
    alt: "Иллюстрация консультации стоматолога-терапевта со взрослой пациенткой",
    width: 1672,
    height: 941,
  },
  children: {
    src: "/images/service-children-desktop-a-v1.webp",
    alt: "Иллюстрация знакомства ребёнка и родителя с детским стоматологом",
    width: 1672,
    height: 941,
  },
} as const;

export const contactPortrait = {
  src: "/images/portrait-contact-desktop-a-v1.webp",
  alt: "Екатерина Романова приветливо приглашает обратиться к ней",
  width: 1024,
  height: 1536,
} as const;

export const adultDirections = [
  "Эстетические реставрации",
  "Эндодонтическое лечение",
  "Отбеливание",
  "Терапевтическая пародонтология",
  "Профессиональная гигиена",
] as const;

export const childDirections = [
  "Детская стоматология",
  "Адаптация ребёнка к приёму",
  "Коммуникация и работа со страхом",
] as const;

export const approachSteps = [
  {
    number: "01",
    title: "Сначала понять",
    text: "Выслушать, что беспокоит, и учесть состояние, ожидания и прошлый опыт человека.",
  },
  {
    number: "02",
    title: "Потом объяснить",
    text: "Обсудить ситуацию простым языком и ответить на вопросы до начала лечения.",
  },
  {
    number: "03",
    title: "Составить план",
    text: "Показать логику предложенных шагов и договориться о следующем этапе.",
  },
  {
    number: "04",
    title: "Действовать бережно",
    text: "Уважать темп человека и поддерживать ясность на каждом этапе.",
  },
  {
    number: "05",
    title: "Подвести итог",
    text: "Завершить приём с пониманием результата и того, что делать дальше.",
  },
] as const;

export const education = [
  {
    year: "2014",
    title: "Врач-стоматолог",
    place: "МГМСУ им. А. И. Евдокимова",
  },
  {
    year: "2015",
    title: "Интернатура, стоматолог общей практики",
    place: "МГМСУ им. А. И. Евдокимова",
  },
  {
    year: "2015",
    title: "Профессиональная переподготовка, врач-стоматолог детский",
    place: "ФМБА им. А. И. Бурназяна",
  },
  {
    year: "2016",
    title: "Профессиональная переподготовка, врач-стоматолог терапевт",
    place: "Воронежский государственный медицинский университет им. Н. Н. Бурденко",
  },
] as const;

export const courses = [
  { year: "2015", title: "Фундаментальные принципы прямой реставрации зубов", place: "БиоСан" },
  { year: "2015", title: "Профессиональная гигиена полости рта по системе iTop", place: "Curadent Swiss" },
  { year: "2016", title: "Лечение детей с ментальными нарушениями", place: "Даунсайд Ап" },
  { year: "2018", title: "SAF. Обработка корневых каналов", place: "Геософт" },
  { year: "2018", title: "Первая помощь детям при неотложных состояниях в кресле стоматолога", place: "Sanofi" },
  { year: "2018", title: "Эстетический конгресс", place: "Aurum Academy" },
  { year: "2018", title: "Коронки в детской стоматологии", place: "Aurum Academy" },
  { year: "2019", title: "Международный форум по детской стоматологии", place: "Aurum Academy" },
  { year: "2019", title: "Пульпиты молочных и незрелых постоянных зубов", place: "Aurum Academy" },
  { year: "2020", title: "Повышение квалификации: врач-стоматолог детский и врач-стоматолог терапевт", place: "ФМБА им. А. И. Бурназяна" },
  { year: "2021", title: "Конгресс по детской стоматологии", place: "OHI-S" },
  { year: "2022", title: "Школа детской психологии: особенности поведения детей дошкольного и школьного возраста", place: "OHI-S" },
  { year: "2022", title: "НЛП в детской стоматологии", place: "OHI-S" },
  { year: "2022", title: "Элементы эриксоновского гипноза в детской стоматологии", place: "OHI-S" },
  { year: "2023", title: "Системный подход для успешной реставрации фронтальной группы зубов", place: "Dentsply Sirona Academy" },
  { year: "2023", title: "Академия современной детской стоматологии", place: "Школа Адаевой" },
  { year: "2024", title: "НЛП-практик. Лечение страхов и фобий", place: "" },
] as const;

export const faq = [
  {
    question: "Как проходит первый приём?",
    answer:
      "Сначала Екатерина уточнит, что вас беспокоит, проведёт осмотр и ответит на вопросы. Если потребуется лечение, возможные шаги обсудят отдельно.",
  },
  {
    question: "Что делать, если ребёнок боится стоматолога?",
    answer:
      "Расскажите об этом при записи или в начале приёма. Подход к знакомству с кабинетом и лечению обсуждается с учётом ситуации ребёнка.",
  },
  {
    question: "Можно ли прийти с ребёнком с особенностями развития?",
    answer:
      "Екатерина участвовала в проекте «Обнажённые сердца», помогая детям с особенностями развития адаптироваться к стоматологическому приёму и проходить лечение. Возможность и условия приёма лучше уточнить заранее в выбранной клинике.",
  },
  {
    question: "Как узнать расписание и записаться?",
    answer: "Напишите Екатерине в личный Telegram или уточните расписание в клинике. Дни и время приёма зависят от выбранного места.",
  },
] as const;

export const reviews = [
  {
    date: "30 января 2023",
    dateTime: "2023-01-30",
    rating: "4.4",
    excerpt: "Доброжелательна и тёплая в общении.",
    source: "DOCTU",
    sourceUrl: "https://doctu.ru/msk/doctor/romanova-ekaterina-aleksandrovna",
  },
  {
    date: "19 апреля 2023",
    dateTime: "2023-04-19",
    rating: "4.8",
    excerpt: "Внимательна и аккуратна к детям.",
    source: "DOCTU",
    sourceUrl: "https://doctu.ru/msk/doctor/romanova-ekaterina-aleksandrovna",
  },
  {
    date: "13 января 2023",
    dateTime: "2023-01-13",
    rating: null,
    excerpt: "Всё объяснила и не навязывала лишних процедур.",
    source: "DOCTU",
    sourceUrl: "https://doctu.ru/msk/doctor/romanova-ekaterina-aleksandrovna",
  },
  {
    date: "6 октября 2025",
    dateTime: "2025-10-06",
    rating: "5.0",
    excerpt: "Поясняет действия в игровом формате и чутко реагирует на сигналы ребёнка.",
    source: "ПроДокторов · проверенный отзыв",
    sourceUrl: "https://prodoctorov.ru/moskva/vrach/376129-romanova/",
  },
  {
    date: "11 декабря 2025",
    dateTime: "2025-12-11",
    rating: "5.0",
    excerpt: "Екатерина Александровна — наш любимый доктор, у неё отличный контакт с детьми.",
    source: "Яндекс · отзыв из СберЗдоровья",
    sourceUrl: "https://yandex.ru/medicine/doctor/romanova_yekaterina_K6So3p3Zmy5yL",
  },
] as const;

export const archivedReviews = [
  {
    date: "9 апреля 2019",
    dateTime: "2019-04-09",
    rating: "5.0",
    summary: "Семья лечилась у Екатерины два года и сожалеет, что после перехода врача пришлось расстаться.",
  },
  {
    date: "12 января 2019",
    dateTime: "2019-01-12",
    rating: "5.0",
    summary: "Автор отдельно отмечает внимательное и аккуратное отношение к маленькому ребёнку.",
  },
  {
    date: "10 декабря 2018",
    dateTime: "2018-12-10",
    rating: "5.0",
    summary: "Родитель пишет, что Екатерина быстро находит общий язык с ребёнком.",
  },
  {
    date: "9 ноября 2018",
    dateTime: "2018-11-09",
    rating: "5.0",
    summary: "Автор благодарит за доброжелательность и то, как легко врач нашла подход к сыну.",
  },
  {
    date: "13 декабря 2017",
    dateTime: "2017-12-13",
    rating: null,
    summary: "Гость благодарит за внимательное, аккуратное лечение и умение найти общий язык с маленьким ребёнком.",
    source: "ПроДокторов · не участвует в рейтинге",
  },
] as const;

export const reviewSources = [
  { label: "ПроДокторов", href: "https://prodoctorov.ru/moskva/vrach/376129-romanova/" },
  { label: "DOCTU", href: "https://doctu.ru/msk/doctor/romanova-ekaterina-aleksandrovna" },
  { label: "DocDoc · СберЗдоровье", href: "https://docdoc.ru/doctor/Romanova_Ekaterina_13" },
  { label: "Яндекс.Доктора", href: "https://yandex.ru/medicine/doctor/romanova_yekaterina_K6So3p3Zmy5yL" },
  { label: "НаПоправку", href: "https://napopravku.ru/moskva/doctor-profile/romanova-ekaterina-aleksandrovna-stomatolog/" },
  { label: "ИнфоДоктор", href: "https://infodoctor.ru/doktor/card-romanovaea-115692" },
  { label: "32top", href: "https://www.32top.ru/dr/76747-romanova-ekaterina-aleksandrovna/" },
] as const;

export const certificates = [
  {
    src: "/images/diploma-specialist-2014.webp",
    alt: "Разворот диплома специалиста по стоматологии, выданного в 2014 году",
    title: "Диплом специалиста",
    detail: "МГМСУ им. А. И. Евдокимова · 2014",
    width: 854,
    height: 602,
  },
  {
    src: "/images/certificate-pediatric-dentistry-2020.webp",
    alt: "Разворот сертификата специалиста по детской стоматологии, выданного 5 декабря 2020 года",
    title: "Стоматология детская",
    detail: "Сертификат специалиста · 5 декабря 2020",
    width: 812,
    height: 604,
  },
] as const;

export const clinics = [
  {
    name: "Seline Clinic",
    address: "Москва, Большой Кондратьевский переулок, 7 · м. «Белорусская»",
    clinicUrl: "https://seline.ru/",
    doctorUrl: "https://seline.ru/doctors/romanova-ekaterina-aleksandrovna-/",
  },
  {
    name: "Стоматология «К78»",
    address: "Москва, Волоколамское шоссе, 71, корп. 1",
    clinicUrl: "https://k78dent.ru/",
    doctorUrl: "https://k78dent.ru/romanova",
  },
] as const;

export const navigation = [
  { label: "О враче", href: "#about" },
  { label: "Подход", href: "#approach" },
  { label: "Направления", href: "#services" },
  { label: "Образование", href: "#education" },
  { label: "Контакты", href: "#contact" },
] as const;

export const universeU = {
  name: "Вселенная У",
  bookCover: {
    src: "/images/universe-u-book-cover-v1.webp",
    alt: "Обложка волшебного журнала «Вселенная У» для защиты детских зубов",
    width: 1491,
    height: 1055,
  },
  credit: "Совместный авторский проект Екатерины Романовой и Евгения Толченкова.",
  description:
    "Система историй, персонажей и визуальных образов, которая помогает детям знакомиться со стоматологией через понятный им мир.",
  telegram: "https://t.me/VselennayaU",
} as const;
