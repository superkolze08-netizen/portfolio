document.documentElement.classList.add("js");

const translations = {
  ru: {
    skip: "Перейти к содержанию",
    navWork: "Работа",
    navServices: "Услуги",
    navPrice: "Цена",
    navProcess: "Процесс",
    navContact: "Обсудить проект",
    availability: "Беру новые проекты",
    heroLineOne: "Сайт, который превращает",
    heroLineTwo: "бизнес в бренд.",
    heroLead: "Создаю сайты для beauty-салонов, локальных услуг и небольших компаний. Соединяю выразительный дизайн, простой текст и понятный путь к обращению.",
    heroWork: "Посмотреть мою работу",
    heroWrite: "Написать в Telegram",
    heroFactOneLabel: "Цена сайта",
    heroFactOneValue: "расчёт после обсуждения",
    heroFactTwoLabel: "Общение",
    heroFactTwoValue: "связь 24/7",
    heroFactThreeLabel: "Языки",
    phoneBook: "Записаться",
    liveProject: "Реальный проект",
    stickerFrom: "РАСЧЁТ",
    stickerNote: "ПОСЛЕ ОБСУЖДЕНИЯ",
    tickerWeb: "САЙТЫ ДЛЯ БИЗНЕСА",
    tickerDesign: "СОВРЕМЕННЫЙ ДИЗАЙН",
    tickerMobile: "ВЕРСИЯ ДЛЯ ТЕЛЕФОНА",
    tickerBooksy: "ЗАПИСЬ ЧЕРЕЗ BOOKSY",
    tickerGoogle: "ВИДИМОСТЬ В GOOGLE",
    tickerAutomation: "АВТОМАТИЗАЦИЯ",
    tickerCRM: "CRM — РАБОТА С КЛИЕНТАМИ",
    workLabel: "ГЛАВНАЯ РАБОТА",
    workTitle: "Не макет. Сайт, который действительно работает.",
    projectIndustry: "BEAUTY / WELLNESS",
    projectOpen: "Открыть сайт",
    projectPhotoSmall: "ОТДОХНИ. ТЫ ЗАСЛУЖИВАЕШЬ.",
    projectPhotoButton: "СМОТРЕТЬ УСЛУГИ",
    projectHover: "СМОТРЕТЬ LIVE ↗",
    projectTaskLabel: "ЗАДАЧА",
    projectTask: "Показать большую подборку услуг без хаоса и упростить клиенту запись.",
    projectSolutionLabel: "РЕШЕНИЕ",
    projectSolution: "Понятные услуги, сильные фото, Booksy, сертификаты, отзывы, FAQ и контакты.",
    projectResultLabel: "РЕЗУЛЬТАТ",
    projectResult: "Полноценный сайт для телефона и компьютера с простым переходом к записи.",
    servicesLabel: "ЧТО Я МОГУ СДЕЛАТЬ",
    servicesTitle: "Всё, что нужно хорошему сайту. Без лишнего хаоса.",
    servicesLead: "От дизайна до оплаты, записи и автоматизации — выбираем только то, что действительно помогает вашему бизнесу.",
    serviceBusinessTitle: "Сайт компании",
    serviceBusinessText: "Профессиональная презентация бизнеса, которая упорядочивает предложение и ведёт клиента к обращению.",
    serviceBusinessOne: "услуги и цены",
    serviceBusinessTwo: "галерея и отзывы",
    serviceBusinessThree: "контакты, карта и SEO",
    serviceLandingTitle: "Лендинг",
    serviceLandingText: "Сфокусированная на одной цели страница для рекламы, услуги, продукта или события.",
    serviceLandingOne: "понятное предложение",
    serviceLandingTwo: "форма и кнопки",
    serviceLandingThree: "продающие блоки",
    serviceUpgradeTitle: "Обновление старого сайта",
    serviceUpgradeText: "Современный вид, более простой текст и правильная работа на телефоне.",
    serviceUpgradeOne: "новый дизайн",
    serviceUpgradeTwo: "скорость и мобильная версия",
    serviceUpgradeThree: "новые функции",
    serviceCommerceTitle: "Магазин и онлайн-оплата",
    serviceCommerceText: "Продажа услуг, сертификатов или товаров прямо на сайте.",
    serviceCommerceOne: "онлайн-платежи",
    serviceCommerceTwo: "корзина и заказы",
    serviceCommerceThree: "счета и уведомления",
    serviceSystemTitle: "Система с базой данных",
    serviceSystemText: "Аккаунты пользователей, данные и панель управления бизнесом.",
    serviceSystemOne: "вход и роли пользователей",
    serviceSystemTwo: "база данных и админ-панель",
    serviceSystemThree: "CRM, отчёты и экспорт данных",
    serviceAutomationTitle: "Системы и автоматизация",
    serviceAutomationText: "Панель, база данных, запись и интеграции, которые сокращают ручную работу.",
    serviceAutomationOne: "база данных и аккаунты пользователей",
    serviceAutomationTwo: "запись, e-mail и SMS",
    serviceAutomationThree: "API, CRM и автоматизация",
    capabilitiesLabel: "ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ",
    capabilitiesLead: "Возможности подбираются под проект, а не ради длинного списка.",
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
    capCRM: "CRM и работа с клиентами",
    priceLabel: "ЦЕНА БЕЗ ДОГАДОК",
    priceTitle: "Цена зависит от задачи. Без сюрпризов.",
    priceLead: "Сначала я знакомлюсь с вашим бизнесом и задачей. Затем вы получаете конкретный план, цену и срок — без скрытых сюрпризов.",
    priceLink: "Спросить о своём сайте",
    priceCardName: "ИНДИВИДУАЛЬНЫЙ РАСЧЁТ",
    priceCardTag: "ПОСЛЕ ОБСУЖДЕНИЯ",
    priceFrom: "ЦЕНА",
    priceValue: "РАСЧЁТ",
    priceSuffix: "ПОСЛЕ ОБСУЖДЕНИЯ",
    priceDescription: "Для небольшой компании, салона или специалиста, которому важно профессионально выглядеть в интернете.",
    priceOne: "индивидуальный дизайн",
    priceTwo: "телефон и компьютер",
    priceThree: "услуги, фото и контакты",
    priceFour: "подключение домена",
    priceFive: "базовое SEO",
    priceSix: "публикация сайта",
    priceSeven: "30 дней поддержки после запуска",
    priceButton: "Узнать стоимость",
    priceNote: "Цена зависит от количества страниц, материалов, языков и нужных функций.",
    processLabel: "КАК ВСЁ ПРОХОДИТ",
    processTitle: "От сообщения до готового сайта.",
    processOneTitle: "Разговор",
    processOneText: "Узнаю о бизнесе, цели сайта и нужных функциях.",
    processTwoTitle: "План и цена",
    processTwoText: "Согласовываем содержание, стоимость и срок.",
    processThreeTitle: "Дизайн и код",
    processThreeText: "Создаю сайт и показываю его на проверку.",
    processFourTitle: "Запуск и поддержка",
    processFourText: "Публикую сайт и предоставляю 30 дней поддержки после запуска.",
    contactKicker: "ЕСТЬ ИДЕЯ ИЛИ БИЗНЕС?",
    contactTitle: "Сделаем сайт, который отлично выглядит и ещё лучше работает.",
    contactLead: "Расскажите, чем занимается ваш бизнес и что вам нужно. Отвечу конкретно и предложу лучший путь.",
    contactTelegramLabel: "TELEGRAM • СВЯЗЬ 24/7",
    footerRole: "WEB DEVELOPER / POLAND",
    footerRights: "Все права защищены"
  },
  uk: {
    skip: "Перейти до вмісту",
    navWork: "Робота",
    navServices: "Послуги",
    navPrice: "Ціна",
    navProcess: "Процес",
    navContact: "Обговорити проєкт",
    availability: "Беру нові проєкти",
    heroLineOne: "Сайт, який перетворює",
    heroLineTwo: "бізнес на бренд.",
    heroLead: "Створюю сайти для beauty-салонів, локальних послуг і невеликих компаній. Поєдную виразний дизайн, простий текст і зрозумілий шлях до звернення.",
    heroWork: "Переглянути мою роботу",
    heroWrite: "Написати в Telegram",
    heroFactOneLabel: "Ціна сайту",
    heroFactOneValue: "оцінка після розмови",
    heroFactTwoLabel: "Спілкування",
    heroFactTwoValue: "зв’язок 24/7",
    heroFactThreeLabel: "Мови",
    phoneBook: "Записатися",
    liveProject: "Реальний проєкт",
    stickerFrom: "ОЦІНКА",
    stickerNote: "ПІСЛЯ РОЗМОВИ",
    tickerWeb: "САЙТИ ДЛЯ БІЗНЕСУ",
    tickerDesign: "СУЧАСНИЙ ДИЗАЙН",
    tickerMobile: "ВЕРСІЯ ДЛЯ ТЕЛЕФОНА",
    tickerBooksy: "ЗАПИС ЧЕРЕЗ BOOKSY",
    tickerGoogle: "ВИДИМІСТЬ У GOOGLE",
    tickerAutomation: "АВТОМАТИЗАЦІЯ",
    tickerCRM: "CRM — РОБОТА З КЛІЄНТАМИ",
    workLabel: "ГОЛОВНА РОБОТА",
    workTitle: "Не макет. Сайт, який справді працює.",
    projectIndustry: "BEAUTY / WELLNESS",
    projectOpen: "Відкрити сайт",
    projectPhotoSmall: "ВІДПОЧИНЬ. ТИ ЗАСЛУГОВУЄШ.",
    projectPhotoButton: "ПЕРЕГЛЯНУТИ ПОСЛУГИ",
    projectHover: "ДИВИТИСЯ LIVE ↗",
    projectTaskLabel: "ЗАВДАННЯ",
    projectTask: "Показати великий вибір послуг без хаосу та спростити клієнту запис.",
    projectSolutionLabel: "РІШЕННЯ",
    projectSolution: "Зрозумілі послуги, сильні фото, Booksy, сертифікати, відгуки, FAQ і контакти.",
    projectResultLabel: "РЕЗУЛЬТАТ",
    projectResult: "Повноцінний сайт для телефона й комп’ютера з простим переходом до запису.",
    servicesLabel: "ЩО Я МОЖУ ЗРОБИТИ",
    servicesTitle: "Усе, що потрібно хорошому сайту. Без зайвого хаосу.",
    servicesLead: "Від дизайну до оплати, запису й автоматизації — обираємо лише те, що справді допомагає вашому бізнесу.",
    serviceBusinessTitle: "Сайт компанії",
    serviceBusinessText: "Професійна презентація бізнесу, яка впорядковує пропозицію та веде клієнта до звернення.",
    serviceBusinessOne: "послуги та ціни",
    serviceBusinessTwo: "галерея та відгуки",
    serviceBusinessThree: "контакти, карта та SEO",
    serviceLandingTitle: "Лендінг",
    serviceLandingText: "Сфокусована на одній меті сторінка для реклами, послуги, продукту або події.",
    serviceLandingOne: "зрозуміла пропозиція",
    serviceLandingTwo: "форма та кнопки",
    serviceLandingThree: "продажні блоки",
    serviceUpgradeTitle: "Оновлення старого сайту",
    serviceUpgradeText: "Сучасний вигляд, простіший текст і правильна робота на телефоні.",
    serviceUpgradeOne: "новий дизайн",
    serviceUpgradeTwo: "швидкість і мобільна версія",
    serviceUpgradeThree: "нові функції",
    serviceCommerceTitle: "Магазин та онлайн-оплата",
    serviceCommerceText: "Продаж послуг, сертифікатів або товарів безпосередньо на сайті.",
    serviceCommerceOne: "онлайн-платежі",
    serviceCommerceTwo: "кошик і замовлення",
    serviceCommerceThree: "рахунки та сповіщення",
    serviceSystemTitle: "Система з базою даних",
    serviceSystemText: "Акаунти користувачів, дані та панель керування бізнесом.",
    serviceSystemOne: "вхід і ролі користувачів",
    serviceSystemTwo: "база даних та адмін-панель",
    serviceSystemThree: "CRM, звіти та експорт даних",
    serviceAutomationTitle: "Системи й автоматизація",
    serviceAutomationText: "Панель, база даних, запис та інтеграції, які скорочують ручну роботу.",
    serviceAutomationOne: "база даних та акаунти користувачів",
    serviceAutomationTwo: "запис, e-mail і SMS",
    serviceAutomationThree: "API, CRM та автоматизація",
    capabilitiesLabel: "ДОДАТКОВІ МОЖЛИВОСТІ",
    capabilitiesLead: "Можливості добираються під проєкт, а не заради довгого списку.",
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
    capCRM: "CRM та робота з клієнтами",
    priceLabel: "ЦІНА БЕЗ ЗДОГАДОК",
    priceTitle: "Ціна залежить від завдання. Без сюрпризів.",
    priceLead: "Спочатку я знайомлюся з вашим бізнесом і завданням. Потім ви отримуєте конкретний план, ціну та строк — без прихованих сюрпризів.",
    priceLink: "Запитати про свій сайт",
    priceCardName: "ІНДИВІДУАЛЬНА ОЦІНКА",
    priceCardTag: "ПІСЛЯ РОЗМОВИ",
    priceFrom: "ЦІНА",
    priceValue: "ОЦІНКА",
    priceSuffix: "ПІСЛЯ РОЗМОВИ",
    priceDescription: "Для невеликої компанії, салону або спеціаліста, якому важливо професійно виглядати в інтернеті.",
    priceOne: "індивідуальний дизайн",
    priceTwo: "телефон і комп’ютер",
    priceThree: "послуги, фото та контакти",
    priceFour: "підключення домену",
    priceFive: "базове SEO",
    priceSix: "публікація сайту",
    priceSeven: "30 днів підтримки після запуску",
    priceButton: "Дізнатися вартість",
    priceNote: "Ціна залежить від кількості сторінок, матеріалів, мов і потрібних функцій.",
    processLabel: "ЯК УСЕ ВІДБУВАЄТЬСЯ",
    processTitle: "Від повідомлення до готового сайту.",
    processOneTitle: "Розмова",
    processOneText: "Дізнаюся про бізнес, мету сайту та потрібні функції.",
    processTwoTitle: "План і ціна",
    processTwoText: "Узгоджуємо зміст, вартість і строк.",
    processThreeTitle: "Дизайн і код",
    processThreeText: "Створюю сайт і показую його на перевірку.",
    processFourTitle: "Запуск і підтримка",
    processFourText: "Публікую сайт і надаю 30 днів підтримки після запуску.",
    contactKicker: "Є ІДЕЯ АБО БІЗНЕС?",
    contactTitle: "Зробімо сайт, який чудово виглядає і ще краще працює.",
    contactLead: "Розкажіть, чим займається ваш бізнес і що вам потрібно. Відповім конкретно та запропоную найкращий напрям.",
    contactTelegramLabel: "TELEGRAM • ЗВ’ЯЗОК 24/7",
    footerRole: "WEB DEVELOPER / POLAND",
    footerRights: "Усі права захищені"
  },
  en: {
    skip: "Skip to content",
    navWork: "Work",
    navServices: "Services",
    navPrice: "Price",
    navProcess: "Process",
    navContact: "Let's talk",
    availability: "Available for new projects",
    heroLineOne: "A website that turns",
    heroLineTwo: "a business into a brand.",
    heroLead: "I build websites for beauty salons, local services and small businesses. I combine a distinctive look with clear copy and an easy path to contact.",
    heroWork: "See my work",
    heroWrite: "Message me on Telegram",
    heroFactOneLabel: "Website price",
    heroFactOneValue: "quote after a call",
    heroFactTwoLabel: "Communication",
    heroFactTwoValue: "contact 24/7",
    heroFactThreeLabel: "Languages",
    phoneBook: "Book a visit",
    liveProject: "Real project",
    stickerFrom: "QUOTE",
    stickerNote: "AFTER A CALL",
    tickerWeb: "WEBSITES FOR BUSINESS",
    tickerDesign: "MODERN DESIGN",
    tickerMobile: "MOBILE READY",
    tickerBooksy: "BOOKSY BOOKINGS",
    tickerGoogle: "VISIBILITY IN GOOGLE",
    tickerAutomation: "AUTOMATION",
    tickerCRM: "CRM — CLIENT MANAGEMENT",
    workLabel: "FEATURED WORK",
    workTitle: "Not a mockup. A website that actually works.",
    projectIndustry: "BEAUTY / WELLNESS",
    projectOpen: "Open website",
    projectPhotoSmall: "REST. YOU DESERVE IT.",
    projectPhotoButton: "SEE SERVICES",
    projectHover: "VIEW LIVE ↗",
    projectTaskLabel: "TASK",
    projectTask: "Present a large service range without clutter and make booking easy for clients.",
    projectSolutionLabel: "SOLUTION",
    projectSolution: "Clear services, strong photos, Booksy, vouchers, reviews, FAQ and contact details.",
    projectResultLabel: "RESULT",
    projectResult: "A complete mobile and desktop website with a simple path to booking.",
    servicesLabel: "WHAT I CAN BUILD",
    servicesTitle: "Everything a strong website needs. Without the clutter.",
    servicesLead: "From design to payments, bookings and automation — we choose only what genuinely helps your business.",
    serviceBusinessTitle: "Business website",
    serviceBusinessText: "A professional business presentation that organises your offer and guides clients towards an enquiry.",
    serviceBusinessOne: "services and pricing",
    serviceBusinessTwo: "gallery and reviews",
    serviceBusinessThree: "contact, map and SEO",
    serviceLandingTitle: "Landing page",
    serviceLandingText: "A focused, single-goal page for an ad, service, product or event.",
    serviceLandingOne: "clear offer",
    serviceLandingTwo: "form and buttons",
    serviceLandingThree: "sales sections",
    serviceUpgradeTitle: "Website redesign",
    serviceUpgradeText: "A better look, simpler copy and proper mobile performance.",
    serviceUpgradeOne: "new design",
    serviceUpgradeTwo: "speed and mobile",
    serviceUpgradeThree: "new features",
    serviceCommerceTitle: "Online store and payments",
    serviceCommerceText: "Sell services, vouchers or products directly through the website.",
    serviceCommerceOne: "online payments",
    serviceCommerceTwo: "cart and orders",
    serviceCommerceThree: "invoices and notifications",
    serviceSystemTitle: "Database-backed system",
    serviceSystemText: "User accounts, data and an admin panel for managing the business.",
    serviceSystemOne: "login and user roles",
    serviceSystemTwo: "database and admin panel",
    serviceSystemThree: "CRM, reports and data export",
    serviceAutomationTitle: "Systems and automation",
    serviceAutomationText: "An admin panel, database, bookings and integrations that reduce manual work.",
    serviceAutomationOne: "database and user accounts",
    serviceAutomationTwo: "bookings, e-mail and SMS",
    serviceAutomationThree: "API, CRM and automation",
    capabilitiesLabel: "EXTRA CAPABILITIES",
    capabilitiesLead: "Capabilities are selected for the project, not to make a long list.",
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
    capLanguages: "Multiple languages",
    capBlog: "Blog",
    capAnalytics: "Analytics",
    capBots: "Bots",
    capAutomation: "Automation",
    capCRM: "CRM and client management",
    priceLabel: "A CLEAR PRICE",
    priceTitle: "A price matched to the scope. No surprises.",
    priceLead: "First, I learn about your business and the project scope. Then you receive a clear plan, price and delivery date — with no hidden surprises.",
    priceLink: "Ask about your website",
    priceCardName: "INDIVIDUAL QUOTE",
    priceCardTag: "AFTER A CALL",
    priceFrom: "PRICE",
    priceValue: "QUOTE",
    priceSuffix: "AFTER A CALL",
    priceDescription: "For a small business, salon or professional who wants to look credible online.",
    priceOne: "custom design",
    priceTwo: "mobile and desktop",
    priceThree: "services, photos and contact",
    priceFour: "domain connection",
    priceFive: "basic SEO",
    priceSix: "website launch",
    priceSeven: "30 days of support after launch",
    priceButton: "Ask for a quote",
    priceNote: "The price depends on the number of pages, materials, languages and required features.",
    processLabel: "HOW IT WORKS",
    processTitle: "From the first message to a live website.",
    processOneTitle: "Conversation",
    processOneText: "I learn about the business, the goal and the required features.",
    processTwoTitle: "Plan and price",
    processTwoText: "We agree on the content, cost and delivery date.",
    processThreeTitle: "Design and code",
    processThreeText: "I build the website and send it for review.",
    processFourTitle: "Launch and support",
    processFourText: "I publish the website and provide 30 days of support after launch.",
    contactKicker: "HAVE AN IDEA OR A BUSINESS?",
    contactTitle: "Let's build a website that looks great and works even better.",
    contactLead: "Tell me what your business does and what you need. I will give you a clear answer and recommend the best direction.",
    contactTelegramLabel: "TELEGRAM • CONTACT 24/7",
    footerRole: "WEB DEVELOPER / POLAND",
    footerRights: "All rights reserved"
  }
};

const pageMeta = {
  pl: {
    title: "Smerthnix — strony internetowe dla firm",
    description: "Projektuję nowoczesne strony internetowe dla salonów beauty, lokalnych usług i małych firm. Strony firmowe, landing pages, sklepy, rezerwacje i integracje."
  },
  ru: {
    title: "Smerthnix — сайты для бизнеса",
    description: "Создаю сайты для сферы услуг и малого бизнеса. Индивидуальный расчёт, мобильная версия, Booksy, CRM, SEO и нужные интеграции."
  },
  uk: {
    title: "Smerthnix — сайти для бізнесу",
    description: "Створюю сайти для сфери послуг і малого бізнесу. Індивідуальна оцінка, мобільна версія, Booksy, CRM, SEO та потрібні інтеграції."
  },
  en: {
    title: "Smerthnix — websites for businesses",
    description: "I design and build websites for service businesses. Individual quotes, mobile-ready, with Booksy, CRM, SEO and useful integrations."
  }
};

const polishText = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  polishText[element.dataset.i18n] = element.textContent.trim();
});

function applyLanguage(language) {
  const selected = pageMeta[language] ? language : "pl";
  const dictionary = selected === "pl" ? polishText : translations[selected];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.documentElement.lang = selected === "uk" ? "uk" : selected;
  document.title = pageMeta[selected].title;
  const description = document.querySelector("#meta-description");
  if (description) description.setAttribute("content", pageMeta[selected].description);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === selected));
  });

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
applyLanguage(savedLanguage);

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");

function closeMobileNavigation() {
  if (!menuToggle || !mobileNavigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Otwórz menu");
  mobileNavigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && mobileNavigation) {
  menuToggle.addEventListener("click", () => {
    const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(willOpen));
    menuToggle.setAttribute("aria-label", willOpen ? "Zamknij menu" : "Otwórz menu");
    mobileNavigation.classList.toggle("is-open", willOpen);
    document.body.classList.toggle("menu-open", willOpen);
  });

  mobileNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNavigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNavigation();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMobileNavigation();
  }, { passive: true });
}

function updateHeaderState() {
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const finePointer = window.matchMedia("(pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (finePointer.matches && !reducedMotion.matches) {
  window.addEventListener("pointermove", (event) => {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  }, { passive: true });

  const visual = document.querySelector(".hero-visual");
  const desktop = document.querySelector('[data-parallax="desktop"]');
  const phone = document.querySelector('[data-parallax="phone"]');

  if (visual && desktop && phone) {
    visual.addEventListener("pointermove", (event) => {
      const box = visual.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width - 0.5;
      const y = (event.clientY - box.top) / box.height - 0.5;
      desktop.style.transform = `rotateY(${-7 + x * 3}deg) rotateX(${-y * 2}deg) rotateZ(2.4deg) translate3d(${x * 7}px, ${y * 7}px, 0)`;
      phone.style.transform = `rotate(${6 - x * 3}deg) translate3d(${-x * 9}px, ${-y * 9}px, 0)`;
    });

    visual.addEventListener("pointerleave", () => {
      desktop.style.transform = "";
      phone.style.transform = "";
    });
  }

  document.querySelectorAll(".service-row").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const box = card.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      const rotateX = (0.5 - y) * 5;
      const rotateY = (x - 0.5) * 6;

      card.style.setProperty("--spot-x", `${x * 100}%`);
      card.style.setProperty("--spot-y", `${y * 100}%`);
      card.style.transform = `perspective(950px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.classList.add("is-tilting");
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
      card.classList.remove("is-tilting");
    });
  });
}
