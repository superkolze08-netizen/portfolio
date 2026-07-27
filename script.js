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
    heroLead: "Создаю сайты для beauty-салонов, локальных услуг и небольших компаний. Сильный дизайн, простой текст и понятный путь к контакту.",
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
    servicesTitle: "От простого сайта до системы с оплатой и базой данных.",
    servicesLead: "Подбираем решение под бизнес: дизайн, функции, интеграции и управление.",
    serviceBusinessTitle: "Сайт компании",
    serviceBusinessText: "Полная презентация бизнеса, которая вызывает доверие и ведёт к обращению.",
    serviceBusinessOne: "услуги и цены",
    serviceBusinessTwo: "галерея и отзывы",
    serviceBusinessThree: "контакты, карта и SEO",
    serviceLandingTitle: "Лендинг",
    serviceLandingText: "Одна сильная страница для рекламы, услуги, продукта или события.",
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
    serviceAutomationTitle: "Запись и автоматизация",
    serviceAutomationText: "Меньше ручной работы благодаря подключению нужных систем.",
    serviceAutomationOne: "календарь и онлайн-запись",
    serviceAutomationTwo: "e-mail, SMS и напоминания",
    serviceAutomationThree: "API, боты и интеграции",
    capabilitiesLabel: "ДОПОЛНИТЕЛЬНЫЕ ВОЗМОЖНОСТИ",
    capabilitiesLead: "Добавим только то, что действительно нужно бизнесу.",
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
    capCRM: "CRM — база и работа с клиентами",
    priceLabel: "ЦЕНА БЕЗ ДОГАДОК",
    priceTitle: "Цена зависит от задачи. Без сюрпризов.",
    priceLead: "Сначала определяем, что нужно бизнесу. Затем вы получаете точный объём работ, цену и срок.",
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
    contactTitle: "Сделаем сайт, который хочется показывать.",
    contactLead: "Напишите в любое время, чем занимается компания и какой сайт нужен. Отвечу конкретно.",
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
    heroLead: "Створюю сайти для beauty-салонів, локальних послуг і невеликих компаній. Сильний дизайн, простий текст і зрозумілий шлях до контакту.",
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
    servicesTitle: "Від простого сайту до системи з оплатою та базою даних.",
    servicesLead: "Підбираємо рішення під бізнес: дизайн, функції, інтеграції та керування.",
    serviceBusinessTitle: "Сайт компанії",
    serviceBusinessText: "Повна презентація бізнесу, яка викликає довіру та веде до звернення.",
    serviceBusinessOne: "послуги та ціни",
    serviceBusinessTwo: "галерея та відгуки",
    serviceBusinessThree: "контакти, карта та SEO",
    serviceLandingTitle: "Лендінг",
    serviceLandingText: "Одна сильна сторінка для реклами, послуги, продукту або події.",
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
    serviceAutomationTitle: "Запис і автоматизація",
    serviceAutomationText: "Менше ручної роботи завдяки підключенню потрібних систем.",
    serviceAutomationOne: "календар та онлайн-запис",
    serviceAutomationTwo: "e-mail, SMS і нагадування",
    serviceAutomationThree: "API, боти та інтеграції",
    capabilitiesLabel: "ДОДАТКОВІ МОЖЛИВОСТІ",
    capabilitiesLead: "Додамо лише те, що справді потрібно бізнесу.",
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
    capCRM: "CRM — база та робота з клієнтами",
    priceLabel: "ЦІНА БЕЗ ЗДОГАДОК",
    priceTitle: "Ціна залежить від завдання. Без сюрпризів.",
    priceLead: "Спочатку визначаємо, що потрібно бізнесу. Потім ви отримуєте точний обсяг робіт, ціну та строк.",
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
    contactTitle: "Зробімо сайт, який хочеться показувати.",
    contactLead: "Напишіть у будь-який час, чим займається компанія та який сайт потрібен. Відповім конкретно.",
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
    heroLead: "I build websites for beauty salons, local services and small businesses. Strong design, simple copy and a clear path to contact.",
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
    servicesTitle: "From a simple website to payments and database systems.",
    servicesLead: "We match the solution to the business: design, features, integrations and management.",
    serviceBusinessTitle: "Business website",
    serviceBusinessText: "A complete business presentation that builds trust and leads to enquiries.",
    serviceBusinessOne: "services and pricing",
    serviceBusinessTwo: "gallery and reviews",
    serviceBusinessThree: "contact, map and SEO",
    serviceLandingTitle: "Landing page",
    serviceLandingText: "One focused page for an ad, service, product or event.",
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
    serviceAutomationTitle: "Bookings and automation",
    serviceAutomationText: "Less manual work by connecting the website to the systems you need.",
    serviceAutomationOne: "calendar and online booking",
    serviceAutomationTwo: "e-mail, SMS and reminders",
    serviceAutomationThree: "API, bots and integrations",
    capabilitiesLabel: "EXTRA CAPABILITIES",
    capabilitiesLead: "We add only what the business actually needs.",
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
    capCRM: "CRM — client database and management",
    priceLabel: "A CLEAR PRICE",
    priceTitle: "A price matched to the scope. No surprises.",
    priceLead: "First, we define what the business needs. Then you get a clear scope, price and delivery date.",
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
    contactTitle: "Let's build a website you'll want to show people.",
    contactLead: "Message me at any time with what the business does and what kind of site you need. I'll give you a clear answer.",
    contactTelegramLabel: "TELEGRAM • CONTACT 24/7",
    footerRole: "WEB DEVELOPER / POLAND",
    footerRights: "All rights reserved"
  }
};

const pageMeta = {
  pl: {
    title: "Smerthnix — strony internetowe dla firm",
    description: "Projektuję i tworzę strony internetowe dla firm usługowych. Indywidualna wycena, wersja mobilna, Booksy, CRM, SEO i potrzebne integracje."
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
if (finePointer.matches) {
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
}
