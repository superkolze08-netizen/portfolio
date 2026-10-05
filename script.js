const root = document.documentElement;
root.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const translations = {
  ru: {
    skip: "Перейти к содержанию",
    navWork: "Проект",
    navServices: "Услуги",
    navProcess: "Как я работаю",
    navContact: "Контакт",
    menuOpen: "Меню",
    heroKicker: "Сайты для небольших компаний",
    heroClock: "Польша",
    heroH1: "Smerthnix — сайты для салонов и малого бизнеса",
    heroLead: "Делаю сайты для beauty-салонов, кабинетов и местного бизнеса. Продумываю дизайн, пишу код и запускаю готовый сайт. Вы рассказываете о компании, остальное беру на себя.",
    heroCta: "Написать мне",
    heroWork: "Смотреть проект",
    heroScroll: "Листайте",
    stickerSupport: "дней поддержки после запуска",
    stickerQuote: "Цена после разговора",
    stickerDrag: "наклейки можно двигать",
    marqueeOne: "Сайты компаний",
    marqueeTwo: "Лендинги",
    marqueeThree: "Интернет-магазины",
    marqueeFour: "Онлайн-запись",
    marqueeFive: "Админ-панели",
    marqueeSix: "Мобильные версии",
    workLabel: "Проект",
    workPlace: "Студия массажа и SPA · Щецин",
    workIntro: "У салона много услуг: массажи, SPA, фитосауна, джакузи, пакеты для двоих и сертификаты. Нужно было показать всё это так, чтобы клиент не запутался и быстро дошёл до записи.",
    workListTitle: "Что есть на сайте",
    workItemOne: "услуги массажа, SPA, фитосауны и джакузи",
    workItemTwo: "пакеты для двоих",
    workItemThree: "подарочные сертификаты",
    workItemFour: "отзывы и FAQ",
    workItemFive: "запись через Booksy",
    workItemSix: "Google Maps, Instagram и YouTube",
    workItemSeven: "мобильная версия и базовое SEO",
    workVisit: "Открыть fitorelax.pl",
    workAria: "Fito Relax — открыть сайт fitorelax.pl",
    logoAria: "Smerthnix — наверх страницы",
    servicesTitle: "Что я могу сделать",
    servicesLead: "От одной страницы под рекламу до системы с аккаунтами и оплатой. Объём решаем вместе, без лишнего.",
    serviceBusinessTitle: "Сайт компании",
    serviceBusinessText: "Всё, что клиент ищет перед звонком: услуги, цены, фото, отзывы и как добраться.",
    serviceBusinessOne: "услуги и цены",
    serviceBusinessTwo: "галерея и отзывы",
    serviceBusinessThree: "контакты, карта и SEO",
    serviceLandingTitle: "Лендинг",
    serviceLandingText: "Одна страница под конкретную рекламу, услугу или событие.",
    serviceLandingOne: "понятное предложение",
    serviceLandingTwo: "форма и кнопки",
    serviceLandingThree: "продающие блоки",
    serviceUpgradeTitle: "Обновление старого сайта",
    serviceUpgradeText: "Когда текущий сайт плохо выглядит на телефоне или просто устарел.",
    serviceUpgradeOne: "новый дизайн",
    serviceUpgradeTwo: "скорость и мобильная версия",
    serviceUpgradeThree: "новые функции",
    serviceCommerceTitle: "Магазин и оплата",
    serviceCommerceText: "Продажа услуг, сертификатов или товаров прямо на сайте.",
    serviceCommerceOne: "онлайн-оплата",
    serviceCommerceTwo: "корзина и заказы",
    serviceCommerceThree: "счета и уведомления",
    serviceSystemTitle: "Система с базой данных",
    serviceSystemText: "Аккаунты клиентов, данные и панель, в которой вы управляете бизнесом.",
    serviceSystemOne: "вход и роли",
    serviceSystemTwo: "база данных и админка",
    serviceSystemThree: "CRM, отчёты, экспорт",
    serviceAutomationTitle: "Запись и автоматизация",
    serviceAutomationText: "Меньше ручной работы: календарь, напоминания и связь с системами, которыми вы уже пользуетесь.",
    serviceAutomationOne: "календарь и запись",
    serviceAutomationTwo: "e-mail, SMS, напоминания",
    serviceAutomationThree: "API, боты, интеграции",
    extrasLabel: "Ещё могу подключить",
    capVouchers: "Сертификаты",
    capPayments: "Онлайн-оплата",
    capDatabase: "База данных",
    capAccounts: "Вход и аккаунты",
    capAdmin: "Админ-панель",
    capStore: "Магазин и корзина",
    capBooking: "Онлайн-запись",
    capApi: "API и интеграции",
    capNotifications: "E-mail и SMS",
    capSubscriptions: "Подписки",
    capLanguages: "Несколько языков",
    capBlog: "Блог",
    capAnalytics: "Аналитика",
    capBots: "Боты",
    capAutomation: "Автоматизация",
    processTitle: "От сообщения до сайта в сети",
    processOneTitle: "Разговор",
    processOneText: "Вы пишете, чем занимается компания и что нужно. Я уточню детали.",
    processTwoTitle: "План и цена",
    processTwoText: "Согласуем объём, цену и срок до начала работы.",
    processThreeTitle: "Дизайн и код",
    processThreeText: "Делаю сайт и показываю его вам на проверку до публикации.",
    processFourTitle: "Запуск и поддержка",
    processFourText: "Публикую сайт, подключаю домен и 30 дней после запуска помогаю с правками.",
    priceTitle: "Сколько это стоит?",
    priceLead: "Готовых пакетов у меня нет. Сначала обсуждаем компанию и задачи, потом вы получаете точную цену и срок.",
    receiptHead: "Сайты для бизнеса",
    receiptNo: "№",
    receiptDate: "ДАТА",
    receiptOne: "Дизайн под вашу компанию",
    receiptTwo: "Версия для телефона и ПК",
    receiptThree: "Услуги, фото и контакты",
    receiptFour: "Подключение домена",
    receiptFive: "Базовое SEO",
    receiptSix: "Публикация сайта",
    receiptSeven: "30 дней поддержки",
    receiptTotal: "Итого",
    receiptTotalValue: "после разговора",
    receiptNote: "Цена зависит от количества страниц, материалов, языков и функций.",
    receiptThanks: "Спасибо!",
    priceButton: "Узнать стоимость",
    contactTitle: "Напишите мне",
    contactLead: "Достаточно пары предложений: чем занимается компания и что нужно. Отвечу по делу.",
    contactEmail: "E-mail",
    contactCopy: "Копировать",
    footerRole: "Сайты для бизнеса · Польша",
    footerTop: "Наверх"
  },
  uk: {
    skip: "Перейти до вмісту",
    navWork: "Проєкт",
    navServices: "Послуги",
    navProcess: "Як я працюю",
    navContact: "Контакт",
    menuOpen: "Меню",
    heroKicker: "Сайти для невеликих компаній",
    heroClock: "Польща",
    heroH1: "Smerthnix — сайти для салонів і малого бізнесу",
    heroLead: "Роблю сайти для beauty-салонів, кабінетів і місцевого бізнесу. Продумую дизайн, пишу код і запускаю готовий сайт. Ви розповідаєте про компанію, решту беру на себе.",
    heroCta: "Написати мені",
    heroWork: "Дивитися проєкт",
    heroScroll: "Гортайте",
    stickerSupport: "днів підтримки після запуску",
    stickerQuote: "Ціна після розмови",
    stickerDrag: "наліпки можна рухати",
    marqueeOne: "Сайти компаній",
    marqueeTwo: "Лендинги",
    marqueeThree: "Інтернет-магазини",
    marqueeFour: "Онлайн-запис",
    marqueeFive: "Адмін-панелі",
    marqueeSix: "Мобільні версії",
    workLabel: "Проєкт",
    workPlace: "Студія масажу та SPA · Щецин",
    workIntro: "У салону багато послуг: масажі, SPA, фітосауна, джакузі, пакети для двох і сертифікати. Треба було показати все це так, щоб клієнт не заплутався і швидко дійшов до запису.",
    workListTitle: "Що є на сайті",
    workItemOne: "послуги масажу, SPA, фітосауни та джакузі",
    workItemTwo: "пакети для двох",
    workItemThree: "подарункові сертифікати",
    workItemFour: "відгуки та FAQ",
    workItemFive: "запис через Booksy",
    workItemSix: "Google Maps, Instagram і YouTube",
    workItemSeven: "мобільна версія та базове SEO",
    workVisit: "Відкрити fitorelax.pl",
    workAria: "Fito Relax — відкрити сайт fitorelax.pl",
    logoAria: "Smerthnix — нагору сторінки",
    servicesTitle: "Що я можу зробити",
    servicesLead: "Від однієї сторінки під рекламу до системи з акаунтами та оплатою. Обсяг вирішуємо разом, без зайвого.",
    serviceBusinessTitle: "Сайт компанії",
    serviceBusinessText: "Усе, що клієнт шукає перед дзвінком: послуги, ціни, фото, відгуки та як дістатися.",
    serviceBusinessOne: "послуги та ціни",
    serviceBusinessTwo: "галерея та відгуки",
    serviceBusinessThree: "контакти, карта та SEO",
    serviceLandingTitle: "Лендинг",
    serviceLandingText: "Одна сторінка під конкретну рекламу, послугу чи подію.",
    serviceLandingOne: "зрозуміла пропозиція",
    serviceLandingTwo: "форма та кнопки",
    serviceLandingThree: "продажні блоки",
    serviceUpgradeTitle: "Оновлення старого сайту",
    serviceUpgradeText: "Коли поточний сайт погано виглядає на телефоні або просто застарів.",
    serviceUpgradeOne: "новий дизайн",
    serviceUpgradeTwo: "швидкість і мобільна версія",
    serviceUpgradeThree: "нові функції",
    serviceCommerceTitle: "Магазин і оплата",
    serviceCommerceText: "Продаж послуг, сертифікатів або товарів прямо на сайті.",
    serviceCommerceOne: "онлайн-оплата",
    serviceCommerceTwo: "кошик і замовлення",
    serviceCommerceThree: "рахунки та сповіщення",
    serviceSystemTitle: "Система з базою даних",
    serviceSystemText: "Акаунти клієнтів, дані та панель, у якій ви керуєте бізнесом.",
    serviceSystemOne: "вхід і ролі",
    serviceSystemTwo: "база даних і адмінка",
    serviceSystemThree: "CRM, звіти, експорт",
    serviceAutomationTitle: "Запис і автоматизація",
    serviceAutomationText: "Менше ручної роботи: календар, нагадування та зв’язок із системами, якими ви вже користуєтеся.",
    serviceAutomationOne: "календар і запис",
    serviceAutomationTwo: "e-mail, SMS, нагадування",
    serviceAutomationThree: "API, боти, інтеграції",
    extrasLabel: "Ще можу підключити",
    capVouchers: "Сертифікати",
    capPayments: "Онлайн-оплата",
    capDatabase: "База даних",
    capAccounts: "Вхід і акаунти",
    capAdmin: "Адмін-панель",
    capStore: "Магазин і кошик",
    capBooking: "Онлайн-запис",
    capApi: "API та інтеграції",
    capNotifications: "E-mail і SMS",
    capSubscriptions: "Підписки",
    capLanguages: "Кілька мов",
    capBlog: "Блог",
    capAnalytics: "Аналітика",
    capBots: "Боти",
    capAutomation: "Автоматизація",
    processTitle: "Від повідомлення до сайту в мережі",
    processOneTitle: "Розмова",
    processOneText: "Ви пишете, чим займається компанія і що потрібно. Я уточню деталі.",
    processTwoTitle: "План і ціна",
    processTwoText: "Погоджуємо обсяг, ціну та строк до початку роботи.",
    processThreeTitle: "Дизайн і код",
    processThreeText: "Роблю сайт і показую його вам на перевірку до публікації.",
    processFourTitle: "Запуск і підтримка",
    processFourText: "Публікую сайт, підключаю домен і 30 днів після запуску допомагаю зі змінами.",
    priceTitle: "Скільки це коштує?",
    priceLead: "Готових пакетів у мене немає. Спочатку обговорюємо компанію та завдання, потім ви отримуєте точну ціну і строк.",
    receiptHead: "Сайти для бізнесу",
    receiptNo: "№",
    receiptDate: "ДАТА",
    receiptOne: "Дизайн під вашу компанію",
    receiptTwo: "Версія для телефона й ПК",
    receiptThree: "Послуги, фото та контакти",
    receiptFour: "Підключення домену",
    receiptFive: "Базове SEO",
    receiptSix: "Публікація сайту",
    receiptSeven: "30 днів підтримки",
    receiptTotal: "Разом",
    receiptTotalValue: "після розмови",
    receiptNote: "Ціна залежить від кількості сторінок, матеріалів, мов і функцій.",
    receiptThanks: "Дякую!",
    priceButton: "Дізнатися вартість",
    contactTitle: "Напишіть мені",
    contactLead: "Вистачить кількох речень: чим займається компанія і що потрібно. Відповім по суті.",
    contactEmail: "E-mail",
    contactCopy: "Копіювати",
    footerRole: "Сайти для бізнесу · Польща",
    footerTop: "Нагору"
  },
  en: {
    skip: "Skip to content",
    navWork: "Project",
    navServices: "Services",
    navProcess: "How I work",
    navContact: "Contact",
    menuOpen: "Menu",
    heroKicker: "Websites for small businesses",
    heroClock: "Poland",
    heroH1: "Smerthnix — websites for salons and small businesses",
    heroLead: "I build websites for beauty salons, studios and local businesses. I design them, write the code and put the finished site online. You tell me about the business, I handle the rest.",
    heroCta: "Get in touch",
    heroWork: "See the project",
    heroScroll: "Scroll",
    stickerSupport: "days of support after launch",
    stickerQuote: "Quote after a chat",
    stickerDrag: "drag the stickers",
    marqueeOne: "Business websites",
    marqueeTwo: "Landing pages",
    marqueeThree: "Online stores",
    marqueeFour: "Bookings",
    marqueeFive: "Admin panels",
    marqueeSix: "Mobile versions",
    workLabel: "Project",
    workPlace: "Massage & SPA studio · Szczecin",
    workIntro: "The salon offers a lot: massages, SPA, a phyto-sauna, a jacuzzi, packages for two and gift vouchers. The site had to show all of it without confusing anyone and get people to booking fast.",
    workListTitle: "What's on the site",
    workItemOne: "massage, SPA, phyto-sauna and jacuzzi offer",
    workItemTwo: "packages for two",
    workItemThree: "gift vouchers",
    workItemFour: "reviews and FAQ",
    workItemFive: "booking through Booksy",
    workItemSix: "Google Maps, Instagram and YouTube",
    workItemSeven: "mobile version and basic SEO",
    workVisit: "Open fitorelax.pl",
    workAria: "Fito Relax — open fitorelax.pl",
    logoAria: "Smerthnix — back to top",
    servicesTitle: "What I can build",
    servicesLead: "From a single page for an ad campaign to a system with accounts and payments. We agree on the scope together and skip what you don't need.",
    serviceBusinessTitle: "Business website",
    serviceBusinessText: "Everything a client looks for before calling: services, prices, photos, reviews and directions.",
    serviceBusinessOne: "services and pricing",
    serviceBusinessTwo: "gallery and reviews",
    serviceBusinessThree: "contact, map and SEO",
    serviceLandingTitle: "Landing page",
    serviceLandingText: "One page for a specific ad, service or event.",
    serviceLandingOne: "clear offer",
    serviceLandingTwo: "form and buttons",
    serviceLandingThree: "sales sections",
    serviceUpgradeTitle: "Redesign of an old site",
    serviceUpgradeText: "When your current site looks bad on a phone or has simply aged.",
    serviceUpgradeOne: "new look",
    serviceUpgradeTwo: "speed and mobile",
    serviceUpgradeThree: "new features",
    serviceCommerceTitle: "Store and payments",
    serviceCommerceText: "Sell services, vouchers or products straight from the site.",
    serviceCommerceOne: "online payments",
    serviceCommerceTwo: "cart and orders",
    serviceCommerceThree: "invoices and notifications",
    serviceSystemTitle: "Database-backed system",
    serviceSystemText: "Client accounts, data and a panel where you run the business.",
    serviceSystemOne: "login and roles",
    serviceSystemTwo: "database and admin panel",
    serviceSystemThree: "CRM, reports, export",
    serviceAutomationTitle: "Bookings and automation",
    serviceAutomationText: "Less manual work: a calendar, reminders and links to the tools you already use.",
    serviceAutomationOne: "calendar and booking",
    serviceAutomationTwo: "e-mail, SMS, reminders",
    serviceAutomationThree: "API, bots, integrations",
    extrasLabel: "I can also connect",
    capVouchers: "Vouchers",
    capPayments: "Online payments",
    capDatabase: "Database",
    capAccounts: "Login and accounts",
    capAdmin: "Admin panel",
    capStore: "Store and cart",
    capBooking: "Online booking",
    capApi: "API and integrations",
    capNotifications: "E-mail and SMS",
    capSubscriptions: "Subscriptions",
    capLanguages: "Several languages",
    capBlog: "Blog",
    capAnalytics: "Analytics",
    capBots: "Bots",
    capAutomation: "Automation",
    processTitle: "From first message to live site",
    processOneTitle: "Conversation",
    processOneText: "You tell me what the business does and what you need. I ask about the details.",
    processTwoTitle: "Plan and price",
    processTwoText: "We agree on scope, price and deadline before I start.",
    processThreeTitle: "Design and code",
    processThreeText: "I build the site and send it to you for review before it goes live.",
    processFourTitle: "Launch and support",
    processFourText: "I publish the site, connect the domain and help with changes for 30 days after launch.",
    priceTitle: "How much does it cost?",
    priceLead: "I don't sell ready-made packages. First we talk about the business and what it needs, then you get a clear price and deadline.",
    receiptHead: "Websites for business",
    receiptNo: "NO",
    receiptDate: "DATE",
    receiptOne: "Design made for you",
    receiptTwo: "Mobile and desktop",
    receiptThree: "Services, photos, contact",
    receiptFour: "Domain connection",
    receiptFive: "Basic SEO",
    receiptSix: "Publishing the site",
    receiptSeven: "30 days of support",
    receiptTotal: "Total",
    receiptTotalValue: "after a chat",
    receiptNote: "The price depends on the number of pages, materials, languages and features.",
    receiptThanks: "Thank you!",
    priceButton: "Ask for a quote",
    contactTitle: "Write to me",
    contactLead: "A few sentences are enough: what the business does and what you need. I'll reply with specifics.",
    contactEmail: "E-mail",
    contactCopy: "Copy",
    footerRole: "Websites for business · Poland",
    footerTop: "Back to top"
  }
};

const uiText = {
  pl: { cursorView: "Zobacz ↗", copied: "Skopiowano", menuClose: "Zamknij" },
  ru: { cursorView: "Смотреть ↗", copied: "Скопировано", menuClose: "Закрыть" },
  uk: { cursorView: "Дивитися ↗", copied: "Скопійовано", menuClose: "Закрити" },
  en: { cursorView: "View ↗", copied: "Copied", menuClose: "Close" }
};

const pageMeta = {
  pl: {
    title: "Smerthnix — strony internetowe dla małych firm",
    description: "Robię strony dla salonów beauty, gabinetów i lokalnych firm: projekt, kod, publikacja i 30 dni wsparcia. Wycena po rozmowie."
  },
  ru: {
    title: "Smerthnix — сайты для малого бизнеса",
    description: "Делаю сайты для beauty-салонов, кабинетов и местного бизнеса: дизайн, код, запуск и 30 дней поддержки. Цена после разговора."
  },
  uk: {
    title: "Smerthnix — сайти для малого бізнесу",
    description: "Роблю сайти для beauty-салонів, кабінетів і місцевого бізнесу: дизайн, код, запуск і 30 днів підтримки. Ціна після розмови."
  },
  en: {
    title: "Smerthnix — websites for small businesses",
    description: "I build websites for beauty salons, studios and local businesses: design, code, launch and 30 days of support. Quote after a chat."
  }
};

const greetings = { pl: "Cześć!", ru: "Привет!", uk: "Привіт!", en: "Hello!" };

let currentLang = "pl";
const ui = () => uiText[currentLang] || uiText.pl;

function safe(fn) {
  try {
    fn();
  } catch (error) {
    console.error(error);
  }
}

/* ---------- Text helpers ---------- */

function splitWords(element) {
  const text = element.textContent.trim().replace(/\s+/g, " ");
  element.textContent = "";
  text.split(" ").forEach((word, index, words) => {
    const outer = document.createElement("span");
    const inner = document.createElement("span");
    outer.className = "word";
    inner.textContent = word;
    inner.style.setProperty("--i", index);
    outer.appendChild(inner);
    element.appendChild(outer);
    if (index < words.length - 1) element.appendChild(document.createTextNode(" "));
  });
}

const scrambleChars = "ABCDEFGHIJKLMNOPRSTUWXYZ0123456789/#*+";

function scramble(element, finalText, duration = 520) {
  if (reduceMotion) {
    element.textContent = finalText;
    return;
  }
  cancelAnimationFrame(element._scrambleFrame);
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const revealed = Math.floor(progress * finalText.length);
    let output = "";
    for (let i = 0; i < finalText.length; i += 1) {
      const char = finalText[i];
      if (i < revealed || char === " ") output += char;
      else output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
    }
    element.textContent = output;
    if (progress < 1) element._scrambleFrame = requestAnimationFrame(step);
    else element.textContent = finalText;
  };
  element._scrambleFrame = requestAnimationFrame(step);
}

/* ---------- Language ---------- */

const polishText = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  polishText[element.dataset.i18n] = element.textContent.trim().replace(/\s+/g, " ");
});

const ariaTargets = [
  [document.querySelector(".work-media"), "workAria"],
  [document.querySelector(".logo"), "logoAria"]
].filter(([element]) => element);

ariaTargets.forEach(([element, key]) => {
  polishText[key] = element.getAttribute("aria-label");
});

const marqueeRow = document.querySelector("[data-marquee]");
let marqueeGroupWidth = 0;

function buildMarquee() {
  if (!marqueeRow) return;
  const groups = marqueeRow.querySelectorAll(".marquee-group");
  groups.forEach((group, index) => {
    if (index > 0) group.remove();
  });
  const first = marqueeRow.querySelector(".marquee-group");
  marqueeGroupWidth = first.getBoundingClientRect().width;
  if (!marqueeGroupWidth) return;
  const copies = Math.max(2, Math.ceil((window.innerWidth * 1.3) / marqueeGroupWidth) + 1);
  for (let i = 1; i < copies; i += 1) marqueeRow.appendChild(first.cloneNode(true));
}

function updateReceiptDate() {
  const dateElement = document.querySelector(".receipt-date");
  if (!dateElement) return;
  const formatted = new Intl.DateTimeFormat("pl-PL", {
    timeZone: "Europe/Warsaw",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(new Date());
  dateElement.textContent = formatted;
}

function applyLanguage(language) {
  const selected = pageMeta[language] ? language : "pl";
  currentLang = selected;
  const dictionary = selected === "pl" ? polishText : translations[selected];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n] || polishText[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  ariaTargets.forEach(([element, key]) => {
    const value = dictionary[key] || polishText[key];
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-split]").forEach(splitWords);

  root.lang = selected;
  document.title = pageMeta[selected].title;
  const description = document.querySelector("#meta-description");
  if (description) description.setAttribute("content", pageMeta[selected].description);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
  });

  const greeting = document.querySelector(".greeting");
  if (greeting) greeting.textContent = greetings[selected];

  const menuToggle = document.querySelector(".menu-toggle span");
  if (menuToggle && root.classList.contains("menu-open")) menuToggle.textContent = ui().menuClose;

  safe(buildMarquee);
  updateReceiptDate();

  try {
    localStorage.setItem("portfolio-language", selected);
  } catch (_) {
    // The page still works when browser storage is disabled.
  }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

let savedLanguage = "pl";
try {
  const stored = localStorage.getItem("portfolio-language");
  if (pageMeta[stored]) savedLanguage = stored;
} catch (_) {
  savedLanguage = "pl";
}
safe(() => applyLanguage(savedLanguage));

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

/* ---------- Hero name ---------- */

const nameElement = document.querySelector("[data-name]");
const nameState = {
  letters: [],
  centers: [],
  target: 0,
  scale: 1,
  focus: 0.5,
  pointerX: null,
  visible: true,
  ready: false
};

function nameBase() {
  return window.innerWidth < 820 ? { w: 70, g: 850 } : { w: 78, g: 800 };
}

function buildName() {
  if (!nameElement) return;
  const text = nameElement.textContent.trim();
  nameElement.textContent = "";
  nameState.letters = [...text].map((char, index) => {
    const outer = document.createElement("span");
    const inner = document.createElement("span");
    outer.className = "ch";
    outer.style.setProperty("--i", index);
    inner.textContent = char;
    outer.appendChild(inner);
    nameElement.appendChild(outer);
    return outer;
  });
}

function fitName() {
  if (!nameElement || !nameState.letters.length) return;
  const base = nameBase();
  nameElement.style.setProperty("--name-size", "100px");
  nameState.letters.forEach((letter) => {
    letter.style.setProperty("--w", base.w);
    letter.style.setProperty("--g", base.g);
  });
  const widths = nameState.letters.map((letter) => letter.getBoundingClientRect().width);
  const total = widths.reduce((sum, width) => sum + width, 0);
  const available = nameElement.clientWidth;
  if (!total || !available) return;
  const size = (available / total) * 100 * 0.97;
  nameElement.style.setProperty("--name-size", `${size}px`);
  nameState.target = total * (size / 100);
  let running = 0;
  nameState.centers = widths.map((width) => {
    const center = (running + width / 2) / total;
    running += width;
    return center;
  });
  nameState.scale = 1;
  nameState.ready = true;
}

function tickName(time) {
  if (!nameState.ready || !nameState.visible) return;
  const base = nameBase();
  const letters = nameState.letters;

  let actual = 0;
  for (let i = 0; i < letters.length; i += 1) actual += letters[i].offsetWidth;

  const rect = nameElement.getBoundingClientRect();
  const goal = nameState.pointerX !== null
    ? (nameState.pointerX - rect.left) / rect.width
    : 0.5 + 0.46 * Math.sin(time / 1700);
  nameState.focus += (goal - nameState.focus) * 0.07;

  if (actual > 0) {
    const correction = Math.pow(nameState.target / actual, 0.6);
    nameState.scale = Math.min(2.2, Math.max(0.45, nameState.scale * correction));
  }

  const spread = 0.17;
  for (let i = 0; i < letters.length; i += 1) {
    const distance = (nameState.centers[i] - nameState.focus) / spread;
    const influence = Math.exp(-distance * distance);
    const width = (base.w * 0.58 + base.w * 1.25 * influence) * nameState.scale;
    const weight = 560 + 340 * influence;
    letters[i].style.setProperty("--w", Math.min(200, Math.max(50, width)).toFixed(1));
    letters[i].style.setProperty("--g", weight.toFixed(0));
  }
}

safe(() => {
  buildName();
  fitName();
});

const hero = document.querySelector(".hero");
if (hero && !reduceMotion) {
  hero.addEventListener("pointermove", (event) => {
    if (event.target.closest("[data-drag]")) return;
    nameState.pointerX = event.clientX;
  });
  hero.addEventListener("pointerleave", () => {
    nameState.pointerX = null;
  });
  hero.addEventListener("pointercancel", () => {
    nameState.pointerX = null;
  });
}

/* ---------- Loader ---------- */

function finishLoading() {
  root.classList.add("is-loaded");
  const loader = document.querySelector(".loader");
  if (loader) window.setTimeout(() => loader.remove(), 1200);
}

safe(() => {
  const loader = document.querySelector(".loader");
  const counter = loader && loader.querySelector(".loader-count span");
  if (!loader || reduceMotion) {
    finishLoading();
    return;
  }
  const start = performance.now();
  const minimum = 1050;
  let fontsReady = false;
  const fontsPromise = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  fontsPromise.then(() => {
    fontsReady = true;
    safe(fitName);
    safe(buildMarquee);
  });
  const step = (now) => {
    const elapsed = now - start;
    const progress = Math.min(1, elapsed / minimum);
    const eased = 1 - Math.pow(1 - progress, 3);
    if (counter) counter.textContent = String(Math.round(eased * 100)).padStart(3, "0");
    if ((progress >= 1 && fontsReady) || elapsed > 2600) {
      finishLoading();
      return;
    }
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
});

if (reduceMotion && document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    safe(fitName);
    safe(buildMarquee);
  });
}

/* ---------- Reveal ---------- */

const revealTargets = document.querySelectorAll("[data-reveal], [data-split], .printer");
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        if (target.classList.contains("printer")) {
          const price = target.closest(".price");
          price.classList.add("is-printed", "is-printing");
        } else {
          target.classList.add("is-in");
        }
        observer.unobserve(target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => {
    target.classList.add("is-in");
    const price = target.closest(".price");
    if (price) price.classList.add("is-printed");
  });
}

/* ---------- Visibility flags ---------- */

const visibility = { marquee: true, work: false };
const marquee = document.querySelector(".marquee");
const workMedia = document.querySelector(".work-media");
const workImage = workMedia && workMedia.querySelector("img");

document.querySelectorAll("img").forEach((image) => {
  const markBroken = () => image.classList.add("is-broken");
  image.addEventListener("error", markBroken);
  if (image.complete && image.naturalWidth === 0 && image.currentSrc) markBroken();
});

if ("IntersectionObserver" in window) {
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === hero) nameState.visible = entry.isIntersecting;
      if (entry.target === marquee) visibility.marquee = entry.isIntersecting;
      if (entry.target === workMedia) visibility.work = entry.isIntersecting;
    });
  });
  [hero, marquee, workMedia].forEach((target) => target && visibilityObserver.observe(target));
}

/* ---------- Header, menu ---------- */

const header = document.querySelector(".header");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector(".menu-toggle");

function setMenu(open) {
  if (!menu || !menuToggle) return;
  const label = menuToggle.querySelector("span");
  menuToggle.setAttribute("aria-expanded", String(open));
  root.classList.toggle("menu-open", open);
  if (open) {
    menu.hidden = false;
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("is-open")));
    document.body.style.overflow = "hidden";
    if (label) label.textContent = ui().menuClose;
    const firstLink = menu.querySelector("a");
    if (firstLink) window.setTimeout(() => firstLink.focus({ preventScroll: true }), 250);
  } else {
    menu.classList.remove("is-open");
    document.body.style.overflow = "";
    if (label) {
      const dictionary = currentLang === "pl" ? polishText : translations[currentLang];
      label.textContent = dictionary.menuOpen || polishText.menuOpen;
    }
    window.setTimeout(() => {
      if (!menu.classList.contains("is-open")) menu.hidden = true;
    }, 700);
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenu(open);
    if (!open) menuToggle.focus();
  });
}

if (menu) {
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && root.classList.contains("menu-open")) {
    setMenu(false);
    if (menuToggle) menuToggle.focus();
  }
});

/* ---------- Nav scramble ---------- */

document.querySelectorAll("[data-scramble]").forEach((link) => {
  link.addEventListener("pointerenter", () => {
    const finalText = link.dataset.text && link._scrambleFrame ? link.dataset.text : link.textContent;
    link.dataset.text = finalText;
    scramble(link, finalText, 420);
  });
});

/* ---------- Clock ---------- */

const clock = document.querySelector(".clock time");
function updateClock() {
  if (!clock) return;
  clock.textContent = new Intl.DateTimeFormat("pl-PL", {
    timeZone: "Europe/Warsaw",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}
safe(updateClock);
window.setInterval(() => safe(updateClock), 15000);

/* ---------- Greeting ---------- */

const greeting = document.querySelector(".greeting");
if (greeting && !reduceMotion) {
  const order = ["pl", "ru", "uk", "en"];
  let index = 0;
  window.setInterval(() => {
    if (document.hidden) return;
    index = (index + 1) % order.length;
    scramble(greeting, greetings[order[index]], 600);
  }, 2600);
}

/* ---------- Copy e-mail ---------- */

const toast = document.querySelector(".toast");
let toastTimer;
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    let copied = false;
    try {
      await navigator.clipboard.writeText(value);
      copied = true;
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = value;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        copied = document.execCommand("copy");
      } catch (__) {
        copied = false;
      }
      area.remove();
    }
    showToast(copied ? `${ui().copied}: ${value}` : value);
  });
});

/* ---------- Direction-aware fills ---------- */

document.querySelectorAll(".svc, .channel").forEach((row) => {
  const setOrigin = (event) => {
    const box = row.getBoundingClientRect();
    row.style.setProperty("--origin", event.clientY - box.top < box.height / 2 ? "top" : "bottom");
  };
  row.addEventListener("pointerenter", setOrigin);
  row.addEventListener("pointerleave", setOrigin);
});

/* ---------- Draggable stickers ---------- */

document.querySelectorAll("[data-drag]").forEach((sticker) => {
  const baseRotation = parseFloat(sticker.style.getPropertyValue("--r")) || 0;
  const state = { id: null, startX: 0, startY: 0, x: 0, y: 0, lastX: 0, bounds: null };

  sticker.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    state.id = event.pointerId;
    sticker.setPointerCapture(event.pointerId);
    state.startX = event.clientX - state.x;
    state.startY = event.clientY - state.y;
    state.lastX = event.clientX;
    const box = sticker.getBoundingClientRect();
    const area = (hero || document.body).getBoundingClientRect();
    state.bounds = {
      minX: state.x + (area.left - box.left) + 8,
      maxX: state.x + (area.right - box.right) - 8,
      minY: state.y + (area.top - box.top) + 60,
      maxY: state.y + (area.bottom - box.bottom) - 8
    };
    sticker.classList.add("is-dragging", "was-moved");
    sticker.style.setProperty("--s", "1.08");
  });

  sticker.addEventListener("pointermove", (event) => {
    if (state.id !== event.pointerId) return;
    const bounds = state.bounds;
    state.x = Math.min(bounds.maxX, Math.max(bounds.minX, event.clientX - state.startX));
    state.y = Math.min(bounds.maxY, Math.max(bounds.minY, event.clientY - state.startY));
    const tilt = Math.max(-14, Math.min(14, (event.clientX - state.lastX) * 0.8));
    state.lastX = event.clientX;
    sticker.style.setProperty("--x", `${state.x}px`);
    sticker.style.setProperty("--y", `${state.y}px`);
    sticker.style.setProperty("--r", `${baseRotation + tilt}deg`);
  });

  const release = (event) => {
    if (state.id !== event.pointerId) return;
    state.id = null;
    sticker.classList.remove("is-dragging");
    sticker.style.setProperty("--s", "1");
    sticker.style.setProperty("--r", `${baseRotation}deg`);
  };
  sticker.addEventListener("pointerup", release);
  sticker.addEventListener("pointercancel", release);
});

/* ---------- Custom cursor and magnetic buttons ---------- */

const cursor = document.querySelector(".cursor");
const cursorState = { x: -200, y: -200, bx: -200, by: -200 };

if (finePointer && cursor) {
  root.classList.add("has-cursor");
  const bubbleText = cursor.querySelector(".cursor-bubble em");

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    cursorState.x = event.clientX;
    cursorState.y = event.clientY;
    cursor.style.setProperty("--dx", `${event.clientX}px`);
    cursor.style.setProperty("--dy", `${event.clientY}px`);
  }, { passive: true });

  document.addEventListener("pointerover", (event) => {
    const viewTarget = event.target.closest("[data-cursor='view']");
    const interactive = event.target.closest("a, button, [data-drag], .svc, .extras li");
    cursor.classList.toggle("is-label", Boolean(viewTarget));
    cursor.classList.toggle("is-hover", Boolean(interactive) && !viewTarget);
    if (viewTarget && bubbleText) bubbleText.textContent = ui().cursorView;
  });

  document.documentElement.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });
  document.documentElement.addEventListener("mouseenter", () => {
    cursor.style.opacity = "1";
  });

  if (!reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((element) => {
      element.addEventListener("pointermove", (event) => {
        const box = element.getBoundingClientRect();
        const x = event.clientX - (box.left + box.width / 2);
        const y = event.clientY - (box.top + box.height / 2);
        element.style.setProperty("--mx", `${x * 0.22}px`);
        element.style.setProperty("--my", `${y * 0.3}px`);
      });
      element.addEventListener("pointerleave", () => {
        element.style.setProperty("--mx", "0px");
        element.style.setProperty("--my", "0px");
      });
    });
  }
}

/* ---------- Main loop ---------- */

let lastScroll = window.scrollY;
let lastTime = performance.now();
let marqueeOffset = 0;
let marqueeDirection = 1;
let scrollVelocity = 0;

const progressBar = document.querySelector(".progress i");
let lastProgress = -1;

function updateScrollUI(scrollY, delta) {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, scrollY / max) : 0;
  if (progressBar && Math.abs(progress - lastProgress) > 0.0005) {
    progressBar.style.transform = `scaleX(${progress.toFixed(4)})`;
    lastProgress = progress;
  }

  if (header) {
    const hide = scrollY > 160 && delta > 2 && !root.classList.contains("menu-open");
    if (hide) header.classList.add("is-hidden");
    else if (delta < -2 || scrollY <= 160) header.classList.remove("is-hidden");
  }
}

function updateWork() {
  if (!workMedia || !visibility.work) return;
  const box = workMedia.getBoundingClientRect();
  const viewport = window.innerHeight;
  const progress = Math.min(1, Math.max(0, (viewport - box.top) / (viewport + box.height)));
  const open = Math.min(1, progress / 0.42);
  const inset = 1 - (1 - Math.pow(1 - open, 3));
  workMedia.style.setProperty("--inset-x", `${(inset * 7).toFixed(2)}%`);
  workMedia.style.setProperty("--inset-y", `${(inset * 9).toFixed(2)}%`);
  if (workImage) {
    workImage.style.setProperty("--parallax", `${((progress - 0.5) * -14).toFixed(2)}%`);
    workImage.style.setProperty("--zoom", (1.14 - 0.14 * open).toFixed(3));
  }
}

function updateMarquee(dt) {
  if (!marqueeRow || !visibility.marquee || !marqueeGroupWidth) return;
  const speed = 70 + Math.min(1400, Math.abs(scrollVelocity) * 0.9);
  marqueeOffset -= speed * (dt / 1000) * marqueeDirection;
  if (marqueeOffset <= -marqueeGroupWidth) marqueeOffset += marqueeGroupWidth;
  if (marqueeOffset > 0) marqueeOffset -= marqueeGroupWidth;
  const skew = Math.max(-10, Math.min(10, scrollVelocity * -0.006));
  marqueeRow.style.transform = `translate3d(${marqueeOffset.toFixed(2)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`;
}

function updateCursorBubble() {
  if (!cursor || !finePointer) return;
  const ease = reduceMotion ? 1 : 0.18;
  cursorState.bx += (cursorState.x - cursorState.bx) * ease;
  cursorState.by += (cursorState.y - cursorState.by) * ease;
  cursor.style.setProperty("--bx", `${cursorState.bx.toFixed(1)}px`);
  cursor.style.setProperty("--by", `${cursorState.by.toFixed(1)}px`);
}

function frame(time) {
  const dt = Math.min(64, time - lastTime);
  lastTime = time;
  const scrollY = window.scrollY;
  const delta = scrollY - lastScroll;
  lastScroll = scrollY;

  const instantVelocity = dt > 0 ? (delta / dt) * 1000 : 0;
  scrollVelocity += (instantVelocity - scrollVelocity) * 0.12;
  if (delta > 0) marqueeDirection = 1;
  if (delta < 0) marqueeDirection = -1;

  updateScrollUI(scrollY, delta);
  updateCursorBubble();

  if (!reduceMotion) {
    safe(() => tickName(time));
    updateWork();
    updateMarquee(dt);
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);

/* ---------- Resize ---------- */

let resizeTimer;
let lastWidth = window.innerWidth;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    safe(fitName);
    safe(buildMarquee);
    if (window.innerWidth > 820 && root.classList.contains("menu-open")) setMenu(false);
  }, 150);
});
