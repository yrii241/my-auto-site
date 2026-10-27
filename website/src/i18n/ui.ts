export type Lang = 'ru' | 'en';
export type ImageKey = 'garage' | 'car' | 'repairs' | 'fuel' | 'stats' | 'ai';

export interface FeatureCopy {
  number: string;
  icon: string;
  title: string;
  text: string;
  accent: string;
  image: ImageKey;
  imageAlt: string;
  purpose: string;
  situations: string[];
  steps: string[];
  result: string;
}

export interface HighlightCopy {
  feature: string;
  accent: string;
  icon: string;
  title: string;
  text: string;
}

export interface ScreenshotCopy {
  image: ImageKey;
  alt: string;
  label: string;
}

interface HomeCopy {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroTitleAccent: string;
  featuresTitleRest: string;
  screensTitleRest: string;
  storyTitleRest: string;
  heroText: string;
  play: string;
  watchTitle: string;
  watchHint: string;
  heroVisualLabel: string;
  heroShotAlt: string;
  highlightsEyebrow: string;
  highlightsTitle: string;
  highlights: HighlightCopy[];
  featuresEyebrow: string;
  featuresTitle: string;
  featuresText: string;
  more: string;
  close: string;
  featureKicker: string;
  whenUseful: string;
  howToUse: string;
  whatYouGet: string;
  features: FeatureCopy[];
  screensEyebrow: string;
  screensTitle: string;
  screensText: string;
  screenshots: ScreenshotCopy[];
  storyAlt: string;
  storyStatLabel: string;
  storyStatValue: string;
  storyEyebrow: string;
  storyTitle: string;
  storyText: string;
  storyPoints: string[];
  blogEyebrow: string;
  blogTitle: string;
  allArticles: string;
  downloadEyebrow: string;
  downloadTitle: string;
  downloadText: string;
  downloadButton: string;
}

interface ChromeCopy {
  metaTitle: string;
  metaDescription: string;
  skip: string;
  homeLabel: string;
  navLabel: string;
  features: string;
  app: string;
  blog: string;
  download: string;
  tagline: string;
  privacy: string;
  support: string;
  footerNote: string;
  langLabel: string;
  blogIndexTitle: string;
  blogIndexDescription: string;
  blogIndexEyebrow: string;
  blogIndexHeading: string;
  blogIndexText: string;
  backToBlog: string;
  ctaTitle: string;
  ctaText: string;
  ctaLink: string;
}

export const chrome: Record<Lang, ChromeCopy> = {
  ru: {
    metaTitle: 'My Auto — история вашего автомобиля в одном месте',
    metaDescription:
      'My Auto помогает вести историю обслуживания, ремонтов, расходов и заправок автомобиля.',
    skip: 'Перейти к содержанию',
    homeLabel: 'My Auto — главная',
    navLabel: 'Основная навигация',
    features: 'Возможности',
    app: 'Приложение',
    blog: 'Блог',
    download: 'Скачать',
    tagline: 'Спокойствие за рулём начинается с порядка в истории автомобиля.',
    privacy: 'Конфиденциальность',
    support: 'Поддержка',
    footerNote: 'Сделано для тех, кто заботится об автомобиле',
    langLabel: 'Переключить язык. Сейчас русский',
    blogIndexTitle: 'Блог My Auto — об автомобиле без лишней сложности',
    blogIndexDescription:
      'Советы по обслуживанию автомобиля, контролю расходов и возможностям приложения My Auto.',
    blogIndexEyebrow: 'Блог My Auto',
    blogIndexHeading: 'Полезно для машины.<br />Понятно для водителя.',
    blogIndexText:
      'Рассказываем об уходе за автомобилем, разумном контроле расходов и новых возможностях My Auto.',
    backToBlog: '← Вернуться в блог',
    ctaTitle: 'Сохраняйте историю автомобиля в My Auto',
    ctaText: 'Ремонты, заправки, расходы и фотографии — всё в одном месте.',
    ctaLink: 'Скачать приложение →',
  },
  en: {
    metaTitle: "My Auto — your car's history in one place",
    metaDescription:
      'My Auto helps you keep service history, repairs, costs, and fuel records for your car.',
    skip: 'Skip to content',
    homeLabel: 'My Auto — home',
    navLabel: 'Main navigation',
    features: 'Features',
    app: 'The app',
    blog: 'Blog',
    download: 'Download',
    tagline: 'A calmer drive starts with an orderly car history.',
    privacy: 'Privacy',
    support: 'Support',
    footerNote: 'Made for people who look after their cars',
    langLabel: 'Switch language. Currently English',
    blogIndexTitle: 'My Auto blog — car care without the clutter',
    blogIndexDescription:
      'Advice on car maintenance, tracking costs, and what My Auto can do.',
    blogIndexEyebrow: 'My Auto blog',
    blogIndexHeading: 'Useful for the car.<br />Clear for the driver.',
    blogIndexText:
      'Notes on car care, sensible cost tracking, and what is new in My Auto.',
    backToBlog: '← Back to the blog',
    ctaTitle: "Keep your car's history in My Auto",
    ctaText: 'Repairs, fuel, costs, and photos — all in one place.',
    ctaLink: 'Download the app →',
  },
};

const ruFeatures: FeatureCopy[] = [
  {
    number: '01',
    icon: '⌁',
    title: 'Весь гараж в одном месте',
    text: 'Добавляйте автомобили, фиксируйте пробег, VIN, фотографии и основные сведения. Нужная информация всегда под рукой.',
    accent: 'red',
    image: 'garage',
    imageAlt: 'Экран гаража со списком автомобилей',
    purpose:
      'Создать отдельную цифровую карточку для каждого автомобиля и не смешивать данные разных машин.',
    situations: [
      'В семье несколько автомобилей — у каждого будет своя история.',
      'Нужно быстро найти VIN, номер, год выпуска или актуальный пробег.',
      'Планируете продать машину и хотите показать аккуратный журнал владения.',
    ],
    steps: [
      'Нажмите «Добавить автомобиль» и укажите основные сведения.',
      'Добавьте фотографию, VIN и текущий пробег.',
      'Откройте карточку автомобиля, чтобы перейти к ремонтам, заправкам и статистике.',
    ],
    result:
      'Вместо заметок и разрозненных фотографий — понятная карточка автомобиля со всей связанной информацией.',
  },
  {
    number: '02',
    icon: '⌘',
    title: 'История без пробелов',
    text: 'Записывайте обслуживание и ремонт с датой, стоимостью, пробегом, описанием работ и фотографиями.',
    accent: 'orange',
    image: 'repairs',
    imageAlt: 'Хронология ремонтов и обслуживания',
    purpose:
      'Сохранить полную хронологию обслуживания: что ремонтировали, когда, на каком пробеге и сколько это стоило.',
    situations: [
      'Нужно вспомнить дату последней замены масла, ремня или тормозов.',
      'Неисправность появилась повторно — можно показать сервису предыдущие работы.',
      'Нужно подтвердить обслуживание фотографиями, чеками или экспортом в PDF.',
    ],
    steps: [
      'Выберите автомобиль и создайте день ремонта.',
      'Укажите пробег, выполненные работы, стоимость и комментарий.',
      'Добавьте фотографии деталей или документов — они останутся рядом с записью.',
    ],
    result:
      'Вы видите последовательную историю работ и принимаете решения на основе фактов, а не памяти.',
  },
  {
    number: '03',
    icon: '◉',
    title: 'Расходы на топливо',
    text: 'Контролируйте заправки, цену литра и общие расходы. Статистика помогает увидеть реальную стоимость владения.',
    accent: 'green',
    image: 'fuel',
    imageAlt: 'Сводка и история заправок',
    purpose: 'Понимать, сколько топлива и денег действительно требует автомобиль за выбранный период.',
    situations: [
      'Хотите видеть общую сумму и количество заправок.',
      'Сравниваете цены на разных АЗС или расходы за разные месяцы.',
      'Нужно сохранить пробег, литры, стоимость и заметку по каждой заправке.',
    ],
    steps: [
      'После заправки внесите дату и показания одометра.',
      'Укажите количество литров, общую стоимость и при необходимости заметку.',
      'Откройте статистику, чтобы посмотреть сводные показатели и динамику.',
    ],
    result: 'Расходы перестают быть набором чеков: приложение собирает их в наглядную историю.',
  },
  {
    number: '04',
    icon: '✦',
    title: 'Умный помощник',
    text: 'Получайте подсказки по эксплуатации автомобиля и разбирайтесь в технических вопросах с AI-ассистентом.',
    accent: 'violet',
    image: 'ai',
    imageAlt: 'Диалог с AI-помощником My Auto',
    purpose:
      'Быстро разобраться в симптомах, терминах и возможных действиях с учётом данных вашего автомобиля.',
    situations: [
      'Появился незнакомый звук, индикатор или симптом.',
      'Нужно подготовить список вопросов перед поездкой в сервис.',
      'Хотите понять назначение детали или порядок базовой проверки.',
    ],
    steps: [
      'Откройте помощника из карточки нужного автомобиля.',
      'Опишите ситуацию подробно и при необходимости приложите фотографию.',
      'Получите объяснение и план следующих действий, затем уточните детали в диалоге.',
    ],
    result:
      'Вы лучше понимаете проблему и увереннее общаетесь с мастером. Для работы нужен интернет; ответы носят справочный характер и не заменяют диагностику.',
  },
];

const enFeatures: FeatureCopy[] = [
  {
    number: '01',
    icon: '⌁',
    title: 'The whole garage in one place',
    text: 'Add your cars and keep mileage, VIN, photos, and the basic details together. The information you need stays close at hand.',
    accent: 'red',
    image: 'garage',
    imageAlt: 'Garage screen with the list of cars',
    purpose: 'Give every car its own digital record so the details of different cars never get mixed together.',
    situations: [
      'The household has more than one car, and each one needs its own history.',
      'You need the VIN, plate, year, or current mileage quickly.',
      'You plan to sell and want a tidy ownership log to show.',
    ],
    steps: [
      'Tap Add a car and enter the basic details.',
      'Add a photo, the VIN, and the current mileage.',
      'Open the car card to reach repairs, fuel records, and statistics.',
    ],
    result:
      'Scattered notes and photos become a clear car card with everything that belongs to that car.',
  },
  {
    number: '02',
    icon: '⌘',
    title: 'A history without gaps',
    text: 'Record service and repairs with the date, cost, mileage, a description of the work, and photos.',
    accent: 'orange',
    image: 'repairs',
    imageAlt: 'Timeline of repairs and service',
    purpose:
      'Keep a complete service timeline: what was repaired, when, at what mileage, and what it cost.',
    situations: [
      'You need the date of the last oil, belt, or brake change.',
      'A fault has come back, and you want to show the shop the earlier work.',
      'You need photos, receipts, or a PDF export to confirm the service.',
    ],
    steps: [
      'Choose the car and create a repair day.',
      'Enter the mileage, the work done, the cost, and a note.',
      'Add photos of parts or documents — they stay with the record.',
    ],
    result: 'You see the work in order and decide from the record, not from memory.',
  },
  {
    number: '03',
    icon: '◉',
    title: 'Fuel costs',
    text: 'Track fill-ups, the price per litre, and the total spent. The statistics show what the car really costs to run.',
    accent: 'green',
    image: 'fuel',
    imageAlt: 'Fuel summary and fill-up history',
    purpose: 'See how much fuel and money the car actually used over a period you choose.',
    situations: [
      'You want the total amount and the number of fill-ups.',
      'You are comparing stations or spending across months.',
      'You want mileage, litres, cost, and a note for every fill-up.',
    ],
    steps: [
      'After a fill-up, enter the date and the odometer reading.',
      'Enter the litres, the total cost, and a note if you need one.',
      'Open statistics to see the totals and how they change.',
    ],
    result: 'Receipts stop being a pile of paper. The app turns them into a history you can read.',
  },
  {
    number: '04',
    icon: '✦',
    title: 'A smart assistant',
    text: 'Get practical notes on how the car is used and work through technical questions with the AI assistant.',
    accent: 'violet',
    image: 'ai',
    imageAlt: 'A conversation with the My Auto AI assistant',
    purpose:
      'Make sense of a symptom, a term, or a next step using the details already saved for your car.',
    situations: [
      'There is an unfamiliar noise, warning light, or symptom.',
      'You want a list of questions before a visit to the shop.',
      'You want to know what a part does or how a basic check works.',
    ],
    steps: [
      'Open the assistant from the card of the car you mean.',
      'Describe the situation in detail and attach a photo if it helps.',
      'Read the explanation and the next steps, then ask follow-up questions in the chat.',
    ],
    result:
      'You understand the problem better and talk to the mechanic with more confidence. The assistant needs an internet connection. Its answers are for reference and do not replace a diagnosis.',
  },
];

export const homeCopy: Record<Lang, HomeCopy> = {
  ru: {
    metaTitle: chrome.ru.metaTitle,
    metaDescription: chrome.ru.metaDescription,
    heroEyebrow: 'Твой автомобиль. Твоя история.',
    heroLine1: 'Ваш автомобиль',
    heroLine2: 'заслуживает',
    heroTitleAccent: 'лучшего!',
    featuresTitleRest: 'узнаете подробности',
    screensTitleRest: 'Простой интерфейс.',
    storyTitleRest: 'Просто откройте.',
    heroText:
      'My Auto — удобный журнал вашего автомобиля. Ремонты, заправки, расходы и история обслуживания всегда под рукой.',
    play: 'Скачать в Google Play',
    watchTitle: 'Смотреть возможности',
    watchHint: 'Как это работает',
    heroVisualLabel: 'Приложение My Auto',
    heroShotAlt: 'Экран гаража My Auto',
    highlightsEyebrow: 'Всё, что нужно',
    highlightsTitle: 'в одном приложении',
    highlights: [
      {
        feature: '02',
        accent: 'orange',
        icon: '🔧',
        title: 'Ремонты и обслуживание',
        text: 'Записывайте работы, пробеги и комментарии.',
      },
      {
        feature: '03',
        accent: 'green',
        icon: '⛽',
        title: 'Заправки и расходы',
        text: 'Контролируйте расход топлива и бюджет.',
      },
      {
        feature: '02',
        accent: 'blue',
        icon: '📊',
        title: 'Графики и аналитика',
        text: 'Следите за пробегом и динамикой затрат.',
      },
      {
        feature: '01',
        accent: 'violet',
        icon: '🛡️',
        title: 'Ваши данные в безопасности',
        text: 'Облачное хранение и резервные копии.',
      },
      {
        feature: '01',
        accent: 'yellow',
        icon: '🚗',
        title: 'Несколько авто',
        text: 'Ведите историю нескольких машин в одном месте.',
      },
    ],
    featuresEyebrow: 'Как это работает',
    featuresTitle: 'Нажмите карточку —',
    featuresText:
      'Каждая возможность открывается с назначением, сценариями применения и коротким порядком действий.',
    more: 'Подробнее',
    close: 'Закрыть описание',
    featureKicker: 'Возможность My Auto',
    whenUseful: 'Когда пригодится',
    howToUse: 'Как использовать',
    whatYouGet: 'Что вы получаете',
    features: ruFeatures,
    screensEyebrow: 'Внутри приложения',
    screensTitle: 'Сложные данные.',
    screensText:
      'Никаких перегруженных таблиц. Важная информация оформлена так, чтобы её было удобно посмотреть даже одной рукой.',
    screenshots: [
      { image: 'garage', alt: 'Гараж с автомобилями в приложении My Auto', label: 'Мой гараж' },
      { image: 'car', alt: 'Карточка автомобиля со статистикой', label: 'История автомобиля' },
      { image: 'repairs', alt: 'Список ремонтов автомобиля', label: 'Ремонты' },
      { image: 'fuel', alt: 'Учёт заправок автомобиля', label: 'Топливо' },
      { image: 'stats', alt: 'Статистика обслуживания автомобиля', label: 'Статистика' },
      { image: 'ai', alt: 'AI-помощник My Auto', label: 'AI-помощник' },
    ],
    storyAlt: 'История ремонтов в My Auto',
    storyStatLabel: 'История обслуживания',
    storyStatValue: 'Всегда с вами',
    storyEyebrow: 'Спокойствие в дороге',
    storyTitle: 'Не вспоминайте.',
    storyText:
      'Когда меняли масло? Сколько стоил последний ремонт? Какой сейчас пробег? Ответы уже записаны и аккуратно разложены по датам.',
    storyPoints: [
      'Быстрый поиск по истории работ',
      'Фото чеков и деталей рядом с записью',
      'Экспорт истории в PDF',
    ],
    blogEyebrow: 'Полезные материалы',
    blogTitle: 'Блог My Auto',
    allArticles: 'Все статьи',
    downloadEyebrow: 'Начните сегодня',
    downloadTitle: 'История автомобиля начинается с одной записи.',
    downloadText: 'Установите My Auto и сохраните то, что важно для вашей машины.',
    downloadButton: 'Скачать бесплатно',
  },
  en: {
    metaTitle: chrome.en.metaTitle,
    metaDescription: chrome.en.metaDescription,
    heroEyebrow: 'Your car. Your history.',
    heroLine1: 'Your car',
    heroLine2: 'deserves',
    heroTitleAccent: 'better!',
    featuresTitleRest: 'see the details',
    screensTitleRest: 'A simple interface.',
    storyTitleRest: 'Just open it.',
    heroText:
      'My Auto is a straightforward journal for your car. Repairs, fuel, costs, and service history stay close at hand.',
    play: 'Get it on Google Play',
    watchTitle: 'See the features',
    watchHint: 'How it works',
    heroVisualLabel: 'The My Auto app',
    heroShotAlt: 'The My Auto garage screen',
    highlightsEyebrow: 'Everything you need',
    highlightsTitle: 'in one app',
    highlights: [
      {
        feature: '02',
        accent: 'orange',
        icon: '🔧',
        title: 'Repairs and service',
        text: 'Record the work, the mileage, and your notes.',
      },
      {
        feature: '03',
        accent: 'green',
        icon: '⛽',
        title: 'Fuel and spending',
        text: 'Keep an eye on fuel use and the budget.',
      },
      {
        feature: '02',
        accent: 'blue',
        icon: '📊',
        title: 'Charts and insights',
        text: 'Follow mileage and how the costs change.',
      },
      {
        feature: '01',
        accent: 'violet',
        icon: '🛡️',
        title: 'Your data stays safe',
        text: 'Cloud storage and backups.',
      },
      {
        feature: '01',
        accent: 'yellow',
        icon: '🚗',
        title: 'More than one car',
        text: 'Keep the history of several cars in one place.',
      },
    ],
    featuresEyebrow: 'How it works',
    featuresTitle: 'Tap a card —',
    featuresText:
      'Every feature opens with its purpose, situations where it helps, and a short sequence of steps.',
    more: 'Details',
    close: 'Close details',
    featureKicker: 'A My Auto feature',
    whenUseful: 'When it helps',
    howToUse: 'How to use it',
    whatYouGet: 'What you get',
    features: enFeatures,
    screensEyebrow: 'Inside the app',
    screensTitle: 'Complex data.',
    screensText:
      'No overloaded tables. The important information is laid out so you can check it with one hand.',
    screenshots: [
      { image: 'garage', alt: 'The garage with cars in My Auto', label: 'My garage' },
      { image: 'car', alt: 'A car card with statistics', label: 'Car history' },
      { image: 'repairs', alt: 'A list of car repairs', label: 'Repairs' },
      { image: 'fuel', alt: 'Fuel records for a car', label: 'Fuel' },
      { image: 'stats', alt: 'Service statistics for a car', label: 'Statistics' },
      { image: 'ai', alt: 'The My Auto AI assistant', label: 'AI assistant' },
    ],
    storyAlt: 'Repair history in My Auto',
    storyStatLabel: 'Service history',
    storyStatValue: 'Always with you',
    storyEyebrow: 'Peace of mind on the road',
    storyTitle: "Don't try to remember.",
    storyText:
      'When was the oil changed? What did the last repair cost? What is the mileage now? The answers are already saved and sorted by date.',
    storyPoints: [
      'A quick search through the service history',
      'Photos of receipts and parts next to the record',
      'Export the history to PDF',
    ],
    blogEyebrow: 'Useful reading',
    blogTitle: 'My Auto blog',
    allArticles: 'All articles',
    downloadEyebrow: 'Start today',
    downloadTitle: "A car's history starts with one entry.",
    downloadText: 'Install My Auto and keep what matters for your car.',
    downloadButton: 'Download free',
  },
};

export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ru' : 'en';
}

export function localePath(lang: Lang, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const slashed = normalized.endsWith('/') ? normalized : `${normalized}/`;
  if (lang === 'ru') return slashed;
  return slashed === '/' ? '/en/' : `/en${slashed}`;
}

export function withBase(baseUrl: string, path: string): string {
  const prefix = baseUrl.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${normalized}`;
}

export function dateLocale(lang: Lang): string {
  return lang === 'en' ? 'en-US' : 'ru-RU';
}
