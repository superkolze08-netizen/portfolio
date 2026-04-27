const profile = {
  name: "Smerthnix",
  telegram: "@Smerthnix",
  telegramUrl: "https://t.me/Smerthnix",
  email: "superkolze08@gmail.com",
  emailUrl: "mailto:superkolze08@gmail.com",
};

const media = {
  solutions: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90",
  ],
  services: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=90",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=90",
  ],
};

const localMediaSource = "assets/hero-background.mp4";
let currentLanguage = "ru";

const translations = {
  ru: {
    langCode: "RU",
    htmlLang: "ru",
    metaTitle: "Smerthnix — сайты, боты, автоматизация и доработка",
    metaDescription:
      "Smerthnix — разработка сайтов, Telegram и Discord ботов, автоматизация, игровые проекты и доработка готовых систем.",
    brandRole: "Сайты, боты, автоматизация",
    nav: {
      solutions: "Направления",
      services: "Услуги",
      process: "Как работаю",
      contact: "Контакты",
    },
    headerCta: "Связаться",
    hero: {
      eyebrow: "Разработка, автоматизация и доработка",
      title: "Сайты, боты, автоматизация и доработка проектов.",
      titleAccent: ["Сайты", "боты", "автоматизация", "доработка"],
      lead:
        "Разрабатываю сайты под услуги и проекты, ботов, скрипты, интеграции, игровые сборки, плагины, конфиги и технические доработки. Можно обратиться как с новой задачей, так и с уже работающим проектом.",
      primary: "Написать в Telegram",
      secondary: "Написать на почту",
      tertiary: "Посмотреть услуги",
      microcopy:
        "Работаю напрямую. Связь в Telegram и по почте, без лишних посредников.",
      points: [
        {
          title: "Сайты и веб-проекты",
          text: "Визитки, лендинги, страницы услуг, внутренние панели и доработка существующих интерфейсов.",
        },
        {
          title: "Боты и автоматизация",
          text: "Telegram, Discord, скрипты, команды, уведомления, API и рабочие сценарии под конкретную задачу.",
        },
        {
          title: "Игровые проекты",
          text: "Конфиги, плагины, меню, логика, кастомные системы и техническая доработка готовой сборки.",
        },
      ],
      contactLabel: "Быстрый контакт",
      telegramLabel: "Telegram",
      emailLabel: "Почта",
      cardKicker: "Основные направления",
      cardTitle: "Что можно заказать",
      cardItems: [
        "сайт или страницу под услугу",
        "Telegram / Discord бота под задачу",
        "автоматизацию, скрипт или интеграцию",
        "доработку кода, плагинов, конфигов или игровых систем",
      ],
      languageLabel: "Языки",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Работа напрямую",
    },
    brief: {
      eyebrow: "Старт",
      title: "Можно обратиться и с нуля, и с уже готовым проектом.",
      lead:
        "Если задача большая, помогу разложить ее по этапам. Если нужна точечная правка, тоже можно подключиться без лишней волокиты.",
      button: "Обсудить",
    },
    solutions: {
      eyebrow: "С чем помогаю",
      title: "Задачи, с которыми обращаются чаще всего",
      lead:
        "Не привязываюсь к одному формату: можно собрать сайт, настроить бота, автоматизировать процесс или доработать готовую систему.",
      items: [
        {
          tag: "Сайты и страницы",
          title: "Визитки, лендинги и страницы услуг",
          text: "Когда нужно показать предложение, собрать понятную структуру и вывести человека на связь.",
          bullets: [
            "сайт под услугу, нишу или проект",
            "первый экран, блоки, форма и контакты",
            "адаптив и аккуратная доработка дизайна",
          ],
          link: "Заказать сайт",
        },
        {
          tag: "Боты и автоматизация",
          title: "Telegram, Discord, скрипты и рабочая логика",
          text: "Когда нужно автоматизировать рутину, настроить команды, уведомления, меню или связать сервисы между собой.",
          bullets: [
            "боты под реальные рабочие сценарии",
            "скрипты, интеграции и API",
            "внутренняя логика и обработка действий",
          ],
          link: "Обсудить автоматизацию",
        },
        {
          tag: "Игровые и готовые проекты",
          title: "Плагины, конфиги, меню, системы и доработка базы",
          text: "Если проект уже работает, но ему не хватает порядка, функционала или нормальной технической настройки.",
          bullets: [
            "доработка готового кода и логики",
            "настройка плагинов, конфигов и меню",
            "кастомный функционал под вашу задачу",
          ],
          link: "Показать проект",
        },
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Что могу взять в работу",
      lead:
        "Работаю как с отдельными задачами, так и с проектами, которые нужно собрать под ключ.",
      items: [
        {
          tag: "Web",
          title: "Сайты, страницы услуг, лендинги и внутренние интерфейсы",
          text: "Подойдет, если нужен сайт под услугу, запуск проекта или аккуратная доработка уже существующей страницы.",
          points: [
            "структура и текст под задачу",
            "адаптивная верстка и рабочая связь",
            "аккуратная доработка без лишней переделки",
          ],
          link: "Написать по сайту",
        },
        {
          tag: "Bots",
          title: "Telegram и Discord боты под конкретный процесс",
          text: "Боты для команд, меню, уведомлений, заявок, внутренней логики и связки с сервисами.",
          points: [
            "команды, роли, меню и сценарии",
            "API, уведомления и обработка действий",
            "настройка под конкретный рабочий процесс",
          ],
          link: "Написать по ботам",
        },
        {
          tag: "Автоматизация",
          title: "Автоматизация, скрипты, интеграции и служебные решения",
          text: "Когда часть работы можно снять с рук и закрыть скриптом, интеграцией или отдельным инструментом.",
          points: [
            "автоматизация повторяющихся задач",
            "связка сервисов и внутренних систем",
            "решения под индивидуальный процесс",
          ],
          link: "Написать по автоматизации",
        },
        {
          tag: "Game / Support",
          title: "Игровые проекты, плагины, конфиги и доработка готовой базы",
          text: "Подключаюсь к игровым проектам, настройке логики, меню, команд, кастомного функционала и технической части.",
          points: [
            "плагины, конфиги и внутренняя логика",
            "меню, команды и технические системы",
            "доработка и исправление готового проекта",
          ],
          link: "Написать по проекту",
        },
      ],
    },
    proof: {
      eyebrow: "Что получает заказчик",
      title: "Понятную работу без лишней переписки и потери времени.",
      lead:
        "Работаю напрямую, быстро вхожу в задачу и держу связь по проекту без лишних посредников.",
      tags: ["Прямой контакт", "Понятный объем", "Рабочий результат"],
      cardKicker: "На выходе",
      cardItems: [
        "понятно, что именно делается и для чего",
        "можно прийти как с новой задачей, так и с готовой базой",
        "связь идет через Telegram и почту без длинных цепочек",
        "результат собирается под задачу, а не по шаблону",
      ],
    },
    process: {
      eyebrow: "Как работаю",
      title: "Сначала разбираю задачу, потом предлагаю вариант и только после этого начинаю делать.",
      lead:
        "Так меньше случайных решений, меньше лишних правок и понятнее весь процесс работы.",
      steps: [
        {
          number: "01",
          title: "Смотрю задачу",
          text: "Изучаю, что уже есть, что нужно получить и где сейчас основная проблема.",
        },
        {
          number: "02",
          title: "Формирую решение",
          text: "Предлагаю рабочий вариант, формат реализации и с чего лучше начать.",
        },
        {
          number: "03",
          title: "Делаю и связываю",
          text: "Собираю интерфейс, код, логику, автоматизацию или нужные подключения.",
        },
        {
          number: "04",
          title: "Проверяю результат",
          text: "Довожу детали, исправляю слабые места и подготавливаю проект к нормальной работе.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакты",
      title: "Напишите, если нужен сайт, бот, автоматизация или доработка проекта.",
      lead:
        "Можно написать в Telegram или на почту. Коротко опишите задачу, и я сориентирую по формату работы.",
      list: [
        "Можно прийти с идеей, ТЗ или уже работающим проектом.",
        "Если нужно не все сразу, а только конкретный блок или доработка, это тоже нормально.",
        "Подключаюсь к задачам по сайтам, ботам, игровым проектам и техническим системам.",
      ],
      panelKicker: "Связь",
      telegramLabel: "Telegram",
      emailLabel: "Почта",
      note:
        "Чем понятнее задача на старте, тем быстрее можно обсудить объем, сроки и стоимость.",
    },
    dock: {
      telegram: "Telegram",
      email: "Почта",
    },
    footerRole: "Сайты, боты, автоматизация",
    footerCopy: "2026 / Все права защищены / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  en: {
    langCode: "EN",
    htmlLang: "en",
    metaTitle: "Smerthnix — websites, bots and automation",
    metaDescription:
      "Smerthnix builds websites, bots, automation workflows and technical solutions for real business tasks.",
    brandRole: "Websites, bots and automation",
    nav: {
      solutions: "Solutions",
      services: "Services",
      process: "Process",
      contact: "Contact",
    },
    headerCta: "Discuss project",
    hero: {
      eyebrow: "Websites, bots, automation and technical refinement",
      title: "I build websites and technical solutions that look credible and help a client make a decision.",
      lead:
        "I work on projects where structure, trust and practical results matter: service websites, focused landing pages, Telegram or Discord bots, workflow automation and careful improvement of existing code.",
      primary: "Message on Telegram",
      secondary: "Send email",
      tertiary: "View work formats",
      microcopy:
        "If a project needs stronger presentation and less template feeling, this is exactly the kind of work I do.",
      points: [
        {
          title: "Fast task alignment",
          text: "I start from the goal, weak points and desired outcome instead of random visual noise.",
        },
        {
          title: "Clear conversion path",
          text: "Offer, structure and CTA are arranged to make the value obvious and the next step easy.",
        },
        {
          title: "Direct communication",
          text: "Telegram and email are visible from the first screen instead of hiding at the very bottom.",
        },
      ],
      contactLabel: "Quick contact",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      cardKicker: "What the client gets",
      cardTitle: "The visitor should instantly understand what you offer, why you can be trusted and how to reach you.",
      cardItems: [
        "structure without random blocks or generic clutter",
        "clear offer and obvious calls to action",
        "fast access to Telegram and email",
        "presentation shaped around the task, not a template",
      ],
      languageLabel: "Languages",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Direct work with the developer",
    },
    brief: {
      eyebrow: "First step",
      title: "A short brief is enough to outline the right format of the solution.",
      lead:
        "It quickly becomes clear whether you need a new website, a refinement of the current project, a bot or a combination of several tools.",
      button: "Go to contact",
    },
    solutions: {
      eyebrow: "Task examples",
      title: "What can be built for your case",
      lead:
        "These are not fake portfolio stories. These are common project formats where clients usually need a stronger website, automation or technical refinement.",
      items: [
        {
          tag: "Service website",
          title: "A page that explains the value fast and leads to contact",
          text: "Useful for experts, small businesses and projects that need a strong first screen and more confidence in the presentation.",
          bullets: [
            "offer, structure and content blocks",
            "trust elements, contact points and CTA",
            "clean responsive layout",
          ],
          link: "Discuss a similar task",
        },
        {
          tag: "Bot or automation",
          title: "A tool that removes routine and speeds up the workflow",
          text: "A good fit for commands, notifications, lead handling, service logic or integrations with APIs and internal tools.",
          bullets: [
            "Telegram and Discord scenarios",
            "automation of repeated actions",
            "integrations and internal logic",
          ],
          link: "I need this format",
        },
        {
          tag: "Existing project refinement",
          title: "Careful technical improvement of something that already runs",
          text: "For projects that are already online but still look weak, feel unfinished or do not support the business task properly.",
          bullets: [
            "fixing weak points in logic and structure",
            "improving presentation and clarity",
            "adding features without creating chaos",
          ],
          link: "Show my project",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Where I can help",
      lead:
        "If your task does not fit a single box, the solution can be tailored to your stack, workflow and the current stage of the project.",
      items: [
        {
          tag: "Websites and landing pages",
          title: "Business cards, service pages, landing pages and clean interfaces",
          text: "Useful when you need more than a screen. The page should explain the offer, build trust and move the visitor to contact.",
          points: [
            "structure for a specific service or offer",
            "strong first screen and working CTA",
            "responsive layout for mobile and desktop",
          ],
          link: "Write about this task",
        },
        {
          tag: "Telegram and Discord",
          title: "Bots, command logic, notifications and service scenarios",
          text: "A good fit when routine should disappear or an internal process needs a clearer technical flow.",
          points: [
            "commands, menus and working scenarios",
            "notifications, lead handling and logic",
            "API connections and external services",
          ],
          link: "Discuss a bot",
        },
        {
          tag: "Automation",
          title: "Scripts, integrations, helper panels and internal systems",
          text: "Useful when repeated tasks slow down the team or a project needs a separate technical layer.",
          points: [
            "automation of process steps",
            "service connections and internal tools",
            "solutions for a specific workflow",
          ],
          link: "Discuss automation",
        },
        {
          tag: "Refinement and support",
          title: "Fixing, strengthening and growing an existing project",
          text: "When the code, visuals or logic already exist but need calm technical work without breaking the base.",
          points: [
            "finding and fixing weak spots",
            "improving structure, copy and interface",
            "adding new functionality carefully",
          ],
          link: "Show the current project",
        },
      ],
    },
    proof: {
      eyebrow: "Trust and presentation",
      title: "A website feels stronger when the visitor instantly sees that this is not a random page.",
      lead:
        "Offer, structure, visuals and contacts should support each other. A good first screen never fights with the content.",
      tags: ["Clear offer", "Fast contact", "Structure without clutter"],
      cardKicker: "Working focus",
      cardItems: [
        "meaning and client path come before decorative details",
        "contact points stay visible in key sections",
        "cards and blocks guide the next action instead of sitting there for animation",
        "visual treatment supports the feeling of a serious project",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "I understand the task calmly, map the right route and bring the project to a working state.",
      lead:
        "That means fewer pointless edits, less randomness and a much better chance of shipping something that is both usable and presentable.",
      steps: [
        {
          number: "01",
          title: "Brief and review",
          text: "I look at the goal, project format, existing materials and what currently blocks the result.",
        },
        {
          number: "02",
          title: "Structure and direction",
          text: "I define what should be shown, which blocks matter and how the visitor should be guided to contact.",
        },
        {
          number: "03",
          title: "Implementation",
          text: "I build the interface, copy, logic, effects and technical side around the specific task.",
        },
        {
          number: "04",
          title: "Check and polish",
          text: "I remove weak points, adjust details and bring the final result into a complete working form.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "If you need a website, bot, automation or a careful upgrade of an existing project.",
      lead:
        "Write on Telegram or send an email. A short description of the task, timing and current materials is enough to start the conversation properly.",
      list: [
        "You can come with a new idea or with a project that already exists.",
        "If something feels weak, I can first identify where the real issue is.",
        "If needed, I can suggest a stronger presentation for your specific case.",
      ],
      panelKicker: "Contact directly",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note: "The clearer the starting input is, the faster the estimate can become realistic.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Websites, bots and automation",
    footerCopy: "2026 / All rights reserved / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  pl: {
    langCode: "PL",
    htmlLang: "pl",
    metaTitle: "Smerthnix — strony, boty i automatyzacja",
    metaDescription:
      "Smerthnix tworzy strony, boty, automatyzacje i rozwiazania techniczne pod konkretne zadania.",
    brandRole: "Strony, boty i automatyzacja",
    nav: {
      solutions: "Rozwiazania",
      services: "Uslugi",
      process: "Jak pracuje",
      contact: "Kontakt",
    },
    headerCta: "Omow projekt",
    hero: {
      eyebrow: "Strony, boty, automatyzacja i dopracowanie techniczne",
      title: "Tworze strony i rozwiazania techniczne, ktore wygladaja wiarygodnie i pomagaja klientowi podjac decyzje.",
      lead:
        "Pracuje przy projektach, gdzie liczy sie struktura, zaufanie i realny efekt: strony uslugowe, landing page, boty Telegram i Discord, automatyzacja procesow oraz spokojne dopracowanie istniejacego kodu.",
      primary: "Napisz na Telegramie",
      secondary: "Napisz mail",
      tertiary: "Zobacz formaty prac",
      microcopy:
        "Jesli projekt ma wygladac mocniej i mniej szablonowo, to jest wlasnie moj format pracy.",
      points: [
        {
          title: "Szybkie wejscie w zadanie",
          text: "Najpierw cel, slabe miejsca i wynik, a dopiero potem efekty wizualne.",
        },
        {
          title: "Jasna droga do kontaktu",
          text: "Oferta, struktura i CTA sa ustawione tak, aby klient szybko zrozumial wartosc.",
        },
        {
          title: "Bezposredni kontakt",
          text: "Telegram i email sa widoczne od razu, bez szukania ich na dole strony.",
        },
      ],
      contactLabel: "Szybki kontakt",
      telegramLabel: "TG",
      emailLabel: "Email",
      cardKicker: "Co dostaje klient",
      cardTitle: "Odwiedzajacy powinien od razu zrozumiec co oferujesz, dlaczego warto Ci zaufac i jak sie z Toba skontaktowac.",
      cardItems: [
        "strukture bez przypadkowych blokow",
        "czytelna oferte i mocne CTA",
        "szybki dostep do Telegrama i emaila",
        "prezentacje dopasowana do zadania",
      ],
      languageLabel: "Jezyki",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Bezposredni kontakt z wykonawca",
    },
    brief: {
      eyebrow: "Pierwszy krok",
      title: "Krotki brief wystarczy, zeby wyznaczyc dobry format rozwiazania.",
      lead:
        "Szybko wychodzi na jaw, czy potrzebna jest nowa strona, dopracowanie obecnego projektu, bot albo polaczenie kilku narzedzi.",
      button: "Przejdz do kontaktu",
    },
    solutions: {
      eyebrow: "Przyklady zadan",
      title: "Co mozna zrobic w Twoim przypadku",
      lead:
        "To nie sa wymyslone case study. To najczestsze typy zadan, z ktorymi klienci przychodza po mocniejsza strone, automatyzacje albo dopracowanie techniczne.",
      items: [
        {
          tag: "Strona uslugowa",
          title: "Strona, ktora szybko tlumaczy wartosc i prowadzi do kontaktu",
          text: "Dobrze sprawdza sie dla ekspertow, malych firm i projektow, ktore potrzebuja mocniejszego pierwszego wrazenia.",
          bullets: [
            "oferta, struktura i bloki tresci",
            "zaufanie, kontakt i CTA",
            "czysty responsywny uklad",
          ],
          link: "Omow podobne zadanie",
        },
        {
          tag: "Bot lub automatyzacja",
          title: "Narzedzie, ktore zdejmuje rutynowe dzialania",
          text: "Przydaje sie tam, gdzie potrzebne sa komendy, powiadomienia, obsluga zgloszen lub integracje z API.",
          bullets: [
            "scenariusze Telegram i Discord",
            "automatyzacja powtarzalnych dzialan",
            "integracje i logika wewnetrzna",
          ],
          link: "Potrzebuje takiego formatu",
        },
        {
          tag: "Dopracowanie projektu",
          title: "Spokojne wzmocnienie tego, co juz dziala",
          text: "Dla projektow online, ktore nadal wygladaja slabo, sa niedokonczone albo nie wspieraja celu biznesowego.",
          bullets: [
            "naprawa slabych miejsc",
            "lepsza prezentacja i przejrzystosc",
            "nowe funkcje bez chaosu",
          ],
          link: "Pokaz moj projekt",
        },
      ],
    },
    services: {
      eyebrow: "Uslugi",
      title: "W czym moge pomoc",
      lead:
        "Jesli zadanie nie miesci sie w jednej kategorii, rozwiazanie mozna dopasowac do Twojego stacku, procesu i etapu projektu.",
      items: [
        {
          tag: "Strony i landing page",
          title: "Wizytowki, strony uslugowe, landing page i czyste interfejsy",
          text: "Przydaje sie wtedy, gdy strona ma nie tylko wygladac, ale tez jasno prowadzic do kontaktu.",
          points: [
            "struktura pod konkretna usluge",
            "mocny pierwszy ekran i CTA",
            "adaptacja na telefon i desktop",
          ],
          link: "Napisz w tej sprawie",
        },
        {
          tag: "Telegram i Discord",
          title: "Boty, logika komend, powiadomienia i scenariusze",
          text: "Dobra opcja, gdy trzeba uproscic proces albo zbudowac czytelne narzedzie wewnetrzne.",
          points: [
            "komendy, menu i scenariusze pracy",
            "powiadomienia i logika zgloszen",
            "API i zewnetrzne serwisy",
          ],
          link: "Omow bota",
        },
        {
          tag: "Automatyzacja",
          title: "Skrypty, integracje, panele pomocnicze i systemy wewnetrzne",
          text: "Przydatne, gdy powtarzalne zadania zabieraja zbyt duzo czasu albo projekt potrzebuje warstwy technicznej.",
          points: [
            "automatyzacja krokow procesu",
            "polaczenia miedzy serwisami",
            "rozwiazania pod konkretny workflow",
          ],
          link: "Omow automatyzacje",
        },
        {
          tag: "Dopracowanie i wsparcie",
          title: "Naprawa, wzmocnienie i rozwoj istniejacego projektu",
          text: "Gdy kod, wyglad lub logika juz sa, ale potrzebuja spokojnej technicznej pracy bez burzenia podstaw.",
          points: [
            "szukanie i naprawa slabych miejsc",
            "poprawa struktury, tekstu i interfejsu",
            "ostrozne dodawanie nowych funkcji",
          ],
          link: "Pokaz obecny projekt",
        },
      ],
    },
    proof: {
      eyebrow: "Zaufanie i prezentacja",
      title: "Strona wyglada mocniej wtedy, gdy od pierwszych sekund widac, ze to nie jest przypadkowy szablon.",
      lead:
        "Oferta, struktura, wizual i kontakt powinny grac razem. Dobry pierwszy ekran nie walczy z trescia.",
      tags: ["Jasna oferta", "Szybki kontakt", "Struktura bez balaganu"],
      cardKicker: "Na czym sie skupiam",
      cardItems: [
        "najpierw sens i droga klienta, potem dekoracje",
        "kontakt jest widoczny w kluczowych miejscach",
        "karty i bloki prowadza do kolejnego kroku",
        "wizual wspiera wrazenie powaznego projektu",
      ],
    },
    process: {
      eyebrow: "Jak pracuje",
      title: "Spokojnie rozumiem zadanie, wyznaczam dobra droge i doprowadzam projekt do dzialajacego stanu.",
      lead:
        "To oznacza mniej chaotycznych poprawek i wieksza szanse na wynik, ktory dobrze dziala i dobrze wyglada.",
      steps: [
        {
          number: "01",
          title: "Brief i analiza",
          text: "Patrze na cel, format projektu, dostepne materialy i to, co teraz blokuje efekt.",
        },
        {
          number: "02",
          title: "Struktura i kierunek",
          text: "Ustalam co trzeba pokazac, ktore bloki sa wazne i jak prowadzic odbiorce do kontaktu.",
        },
        {
          number: "03",
          title: "Realizacja",
          text: "Buduje interfejs, tekst, logike, efekty i warstwe techniczna pod konkretne zadanie.",
        },
        {
          number: "04",
          title: "Sprawdzenie i dopracowanie",
          text: "Usuwam slabe miejsca, poprawiam detale i skladam wynik w spojna calosc.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Jesli potrzebujesz strony, bota, automatyzacji albo porzadnego dopracowania projektu.",
      lead:
        "Napisz na Telegramie albo maila. Krotki opis zadania, terminu i tego, co juz masz, wystarczy aby zaczac normalna rozmowe.",
      list: [
        "Mozesz przyjsc z nowym pomyslem albo z gotowym projektem.",
        "Jesli cos wyglada slabo, najpierw wskaze realny problem.",
        "W razie potrzeby zaproponuje mocniejsza prezentacje pod Twoj przypadek.",
      ],
      panelKicker: "Kontakt bezposredni",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note: "Im bardziej konkretne materialy startowe, tym szybciej da sie oszacowac zakres prac.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Strony, boty i automatyzacja",
    footerCopy: "2026 / Wszelkie prawa zastrzezone / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  uk: {
    langCode: "UA",
    htmlLang: "uk",
    metaTitle: "Smerthnix — сайти, боти та автоматизація",
    metaDescription:
      "Smerthnix створює сайти, ботів, автоматизацію та технічні рішення під конкретні задачі.",
    brandRole: "Сайти, боти та автоматизація",
    nav: {
      solutions: "Рішення",
      services: "Послуги",
      process: "Як працюю",
      contact: "Контакти",
    },
    headerCta: "Обговорити проєкт",
    hero: {
      eyebrow: "Сайти, боти, автоматизація і технічне доопрацювання",
      title: "Розробляю сайти та технічні рішення, які виглядають переконливо і допомагають клієнту прийняти рішення.",
      lead:
        "Підключаюся до проєктів, де важливі структура, довіра і робочий результат: сайт послуги, цільова сторінка, Telegram або Discord бот, автоматизація процесів і доопрацювання вже наявного коду.",
      primary: "Написати в Telegram",
      secondary: "Написати на пошту",
      tertiary: "Подивитися формати робіт",
      microcopy:
        "Якщо потрібно прибрати відчуття сирого шаблону і зробити подачу сильнішою, це саме мій формат роботи.",
      points: [
        {
          title: "Швидко входжу в задачу",
          text: "Спочатку фіксую мету, слабкі місця і результат, а вже потім переходжу до візуальних рішень.",
        },
        {
          title: "Зрозумілий шлях до контакту",
          text: "Оффер, структура і CTA збираються так, щоб людина швидко зрозуміла цінність пропозиції.",
        },
        {
          title: "Прямий зв'язок",
          text: "Telegram і email видно відразу, без пошуку внизу сторінки.",
        },
      ],
      contactLabel: "Швидкий контакт",
      telegramLabel: "ТГ",
      emailLabel: "Пошта",
      cardKicker: "Що отримує клієнт",
      cardTitle: "Людина має одразу зрозуміти, що ви пропонуєте, чому вам можна довіряти і як швидко з вами зв'язатися.",
      cardItems: [
        "структуру без випадкових блоків і шаблонного шуму",
        "чіткий оффер і зрозумілі CTA",
        "швидкий доступ до Telegram та email",
        "подачу під задачу, а не під універсальний шаблон",
      ],
      languageLabel: "Мови",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Прямий контакт з виконавцем",
    },
    brief: {
      eyebrow: "Перший крок",
      title: "Короткого брифу достатньо, щоб окреслити правильний формат рішення.",
      lead:
        "Далі швидко стає зрозуміло, чи потрібен новий сайт, доопрацювання поточного проєкту, бот або зв'язка з кількох інструментів.",
      button: "Перейти до контактів",
    },
    solutions: {
      eyebrow: "Приклади задач",
      title: "Що можна зробити саме у вашому випадку",
      lead:
        "Це не вигадані кейси для картинки, а типові формати задач, з якими найчастіше приходять за сильнішим сайтом, автоматизацією або технічним доопрацюванням.",
      items: [
        {
          tag: "Сайт послуги",
          title: "Сторінка, яка швидко пояснює цінність і веде до заявки",
          text: "Підходить для експерта, малого бізнесу або проєкту, якому потрібен сильний перший екран і більш впевнена подача.",
          bullets: [
            "оффер, структура і змістові блоки",
            "довіра, контакти та CTA",
            "акуратний адаптивний макет",
          ],
          link: "Обговорити схожу задачу",
        },
        {
          tag: "Бот або автоматизація",
          title: "Інструмент, який знімає рутину і прискорює роботу",
          text: "Корисно там, де потрібні команди, сповіщення, обробка заявок, службова логіка або інтеграції з API.",
          bullets: [
            "сценарії для Telegram і Discord",
            "автоматизація повторюваних дій",
            "інтеграції та внутрішня логіка",
          ],
          link: "Потрібен такий формат",
        },
        {
          tag: "Доопрацювання проєкту",
          title: "Спокійне технічне посилення того, що вже запущено",
          text: "Для проєктів, які вже працюють, але виглядають слабко, відчуваються сирими або не закривають задачу як треба.",
          bullets: [
            "виправлення слабких місць",
            "краща подача і структура",
            "нові функції без хаосу",
          ],
          link: "Показати мій проєкт",
        },
      ],
    },
    services: {
      eyebrow: "Послуги",
      title: "Чим можу бути корисний",
      lead:
        "Якщо задача не вкладається в одну категорію, рішення можна зібрати під ваш стек, процес і поточний етап проєкту.",
      items: [
        {
          tag: "Сайти та посадкові сторінки",
          title: "Візитки, сторінки послуг, лендинги та акуратні інтерфейси",
          text: "Коли потрібен не просто екран, а зрозуміла подача пропозиції, довіра і нормальний шлях до контакту.",
          points: [
            "структура під конкретну послугу або пропозицію",
            "сильний перший екран і робочі CTA",
            "адаптив під телефон і десктоп",
          ],
          link: "Написати з цього приводу",
        },
        {
          tag: "Telegram і Discord",
          title: "Боти, логіка команд, сповіщення і службові сценарії",
          text: "Підходить там, де потрібно прибрати рутину або зробити внутрішній процес зрозумілішим.",
          points: [
            "команди, меню і робочі сценарії",
            "сповіщення та логіка обробки",
            "API та зовнішні сервіси",
          ],
          link: "Обговорити бота",
        },
        {
          tag: "Автоматизація",
          title: "Скрипти, інтеграції, допоміжні панелі і внутрішні системи",
          text: "Корисно, коли повторювані дії гальмують роботу або проєкту потрібен окремий технічний шар.",
          points: [
            "автоматизація етапів процесу",
            "зв'язка сервісів і внутрішніх інструментів",
            "рішення під конкретний робочий сценарій",
          ],
          link: "Обговорити автоматизацію",
        },
        {
          tag: "Доопрацювання і підтримка",
          title: "Виправлення, посилення і розвиток чинного проєкту",
          text: "Якщо код, візуал або логіка вже існують, але потребують спокійної технічної роботи без руйнування основи.",
          points: [
            "пошук і виправлення слабких місць",
            "покращення структури, тексту і інтерфейсу",
            "додавання нового функціоналу без хаосу",
          ],
          link: "Показати поточний проєкт",
        },
      ],
    },
    proof: {
      eyebrow: "Подача і довіра",
      title: "Сайт виглядає сильніше тоді, коли з перших секунд видно, що перед клієнтом не випадкова сторінка.",
      lead:
        "Оффер, структура, візуал і контакти мають працювати разом. Хороший перший екран не сперечається зі змістом, а підсилює його.",
      tags: ["Чіткий оффер", "Швидкий контакт", "Структура без зайвого шуму"],
      cardKicker: "Фокус у роботі",
      cardItems: [
        "спочатку сенс і маршрут клієнта, потім декоративні деталі",
        "контакти доступні відразу і повторюються в ключових точках",
        "картки і блоки ведуть до наступної дії",
        "візуал підтримує відчуття серйозного проєкту",
      ],
    },
    process: {
      eyebrow: "Як працюю",
      title: "Спокійно вникаю в задачу, пропоную зрозумілий шлях і доводжу проєкт до робочого результату.",
      lead:
        "Так менше зайвих правок, менше випадкових рішень і більше шансів отримати те, що справді зручно використовувати і не соромно показувати клієнту.",
      steps: [
        {
          number: "01",
          title: "Бриф і розбір задачі",
          text: "Дивлюся на мету, формат проєкту, наявні матеріали і на те, що зараз заважає результату.",
        },
        {
          number: "02",
          title: "Структура і підхід",
          text: "Визначаю, що потрібно показати, які блоки важливі і як краще вести людину до контакту.",
        },
        {
          number: "03",
          title: "Реалізація",
          text: "Збираю інтерфейс, тексти, логіку, ефекти і технічну частину під конкретну задачу.",
        },
        {
          number: "04",
          title: "Перевірка і доводка",
          text: "Прибираю слабкі місця, уточнюю деталі і приводжу результат до цілісного стану.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Якщо потрібен сайт, бот, автоматизація або акуратне доопрацювання поточного проєкту.",
      lead:
        "Напишіть у Telegram або на пошту. Достатньо коротко описати задачу, строки і що вже є на руках, щоб почати нормальну розмову по суті.",
      list: [
        "Можна прийти з новою ідеєю або з уже працюючим проєктом.",
        "Якщо щось виглядає слабко, спочатку покажу, де саме проблема.",
        "За потреби підкажу сильнішу подачу саме під ваш випадок.",
      ],
      panelKicker: "Зв'язатися напряму",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note:
        "Чим конкретніші стартові дані, тим швидше можна дати адекватну оцінку по строках і обсягу.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Сайти, боти та автоматизація",
    footerCopy: "2026 / Усі права захищені / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  de: {
    langCode: "DE",
    htmlLang: "de",
    metaTitle: "Smerthnix — Websites, Bots und Automatisierung",
    metaDescription:
      "Smerthnix entwickelt Websites, Bots, Automatisierungen und technische Loesungen fuer konkrete Aufgaben.",
    brandRole: "Websites, Bots und Automatisierung",
    nav: {
      solutions: "Loesungen",
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt",
    },
    headerCta: "Projekt besprechen",
    hero: {
      eyebrow: "Websites, Bots, Automatisierung und technische Ueberarbeitung",
      title: "Ich entwickle Websites und technische Loesungen, die ueberzeugend wirken und dem Kunden die Entscheidung erleichtern.",
      lead:
        "Ich arbeite an Projekten, bei denen Struktur, Vertrauen und ein echtes Ergebnis wichtig sind: Service-Websites, Landingpages, Telegram- oder Discord-Bots, Prozessautomatisierung und die saubere Weiterentwicklung bestehenden Codes.",
      primary: "Auf Telegram schreiben",
      secondary: "E-Mail senden",
      tertiary: "Arbeitsformate ansehen",
      microcopy:
        "Wenn ein Projekt staerker wirken und weniger nach Vorlage aussehen soll, ist das genau mein Format.",
      points: [
        {
          title: "Schneller Einstieg",
          text: "Zuerst Ziel, Schwachstellen und Ergebnis, danach die visuellen Details.",
        },
        {
          title: "Klarer Weg zum Kontakt",
          text: "Angebot, Struktur und CTA machen den Nutzen schnell sichtbar.",
        },
        {
          title: "Direkter Kontakt",
          text: "Telegram und E-Mail sind sofort sichtbar und nicht erst ganz unten.",
        },
      ],
      contactLabel: "Schneller Kontakt",
      telegramLabel: "Telegram",
      emailLabel: "E-Mail",
      cardKicker: "Was der Kunde bekommt",
      cardTitle: "Der Besucher soll sofort verstehen, was angeboten wird, warum Vertrauen sinnvoll ist und wie er Sie erreicht.",
      cardItems: [
        "Struktur ohne zufaellige Bloeke",
        "klares Angebot und deutliche CTA",
        "schneller Zugang zu Telegram und E-Mail",
        "Praesentation passend zur Aufgabe",
      ],
      languageLabel: "Sprachen",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Direkte Arbeit mit dem Entwickler",
    },
    brief: {
      eyebrow: "Erster Schritt",
      title: "Ein kurzes Briefing reicht, um das passende Loesungsformat festzulegen.",
      lead:
        "Danach wird schnell klar, ob eine neue Website, die Ueberarbeitung eines bestehenden Projekts, ein Bot oder eine Kombination mehrerer Werkzeuge sinnvoll ist.",
      button: "Zum Kontakt",
    },
    solutions: {
      eyebrow: "Beispielaufgaben",
      title: "Was sich in Ihrem Fall umsetzen laesst",
      lead:
        "Keine erfundenen Erfolgsgeschichten, sondern typische Projektformate, bei denen Kunden eine staerkere Website, Automatisierung oder technische Ueberarbeitung brauchen.",
      items: [
        {
          tag: "Service-Website",
          title: "Eine Seite, die den Nutzen schnell erklaert und zum Kontakt fuehrt",
          text: "Ideal fuer Experten, kleine Unternehmen und Projekte, die einen staerkeren ersten Eindruck brauchen.",
          bullets: [
            "Angebot, Struktur und Inhaltsbloeke",
            "Vertrauen, Kontaktpunkte und CTA",
            "sauberes responsives Layout",
          ],
          link: "Aehnliche Aufgabe besprechen",
        },
        {
          tag: "Bot oder Automatisierung",
          title: "Ein Werkzeug, das Routine reduziert und Arbeit beschleunigt",
          text: "Sinnvoll bei Befehlen, Benachrichtigungen, Lead-Verarbeitung oder Integrationen mit APIs.",
          bullets: [
            "Telegram- und Discord-Szenarien",
            "Automatisierung wiederkehrender Schritte",
            "Integrationen und interne Logik",
          ],
          link: "Ich brauche dieses Format",
        },
        {
          tag: "Bestehendes Projekt",
          title: "Saubere technische Ueberarbeitung eines laufenden Projekts",
          text: "Fuer Projekte, die bereits online sind, aber noch schwach wirken oder die Aufgabe nicht sauber loesen.",
          bullets: [
            "Schwachstellen in Logik und Struktur beheben",
            "Praesentation und Klarheit verbessern",
            "neue Funktionen ohne Chaos ergaenzen",
          ],
          link: "Mein Projekt zeigen",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Wobei ich helfen kann",
      lead:
        "Wenn die Aufgabe nicht in eine einzige Box passt, kann die Loesung an Ihren Stack, Prozess und Projektstatus angepasst werden.",
      items: [
        {
          tag: "Websites und Landingpages",
          title: "Visitenkarten, Service-Seiten, Landingpages und saubere Interfaces",
          text: "Wenn eine Seite nicht nur gut aussehen, sondern klar zum Kontakt fuehren soll.",
          points: [
            "Struktur fuer ein konkretes Angebot",
            "starker erster Screen und funktionierende CTA",
            "Anpassung fuer Mobil und Desktop",
          ],
          link: "Dazu schreiben",
        },
        {
          tag: "Telegram und Discord",
          title: "Bots, Befehlslogik, Benachrichtigungen und Arbeitsablaeufe",
          text: "Passend, wenn Routine wegfallen oder ein interner Prozess klarer werden soll.",
          points: [
            "Befehle, Menues und Szenarien",
            "Benachrichtigungen und Prozesslogik",
            "API-Anbindung und externe Dienste",
          ],
          link: "Bot besprechen",
        },
        {
          tag: "Automatisierung",
          title: "Skripte, Integrationen, Hilfspaneele und interne Systeme",
          text: "Hilfreich, wenn wiederkehrende Arbeit zu viel Zeit kostet oder ein Projekt eine technische Schicht braucht.",
          points: [
            "Automatisierung von Prozessschritten",
            "Verbindung von Diensten und Tools",
            "Loesungen fuer konkrete Workflows",
          ],
          link: "Automatisierung besprechen",
        },
        {
          tag: "Ueberarbeitung und Support",
          title: "Korrektur, Staerkung und Ausbau eines bestehenden Projekts",
          text: "Wenn Code, Visuals oder Logik bereits da sind, aber ruhige technische Arbeit brauchen.",
          points: [
            "Schwachstellen finden und korrigieren",
            "Struktur, Texte und Interface verbessern",
            "neue Funktionen vorsichtig ergaenzen",
          ],
          link: "Aktuelles Projekt zeigen",
        },
      ],
    },
    proof: {
      eyebrow: "Vertrauen und Praesentation",
      title: "Eine Website wirkt staerker, wenn vom ersten Moment an klar ist, dass sie kein beliebiges Template ist.",
      lead:
        "Angebot, Struktur, Visuals und Kontakt sollten zusammenarbeiten. Ein guter erster Screen unterstuetzt den Inhalt.",
      tags: ["Klares Angebot", "Schneller Kontakt", "Struktur ohne Unruhe"],
      cardKicker: "Arbeitsfokus",
      cardItems: [
        "zuerst Sinn und Weg des Kunden, dann Dekoration",
        "Kontakt bleibt an wichtigen Stellen sichtbar",
        "Karten und Bloeke fuehren zur naechsten Aktion",
        "die visuelle Ebene stuetzt den Eindruck eines ernsten Projekts",
      ],
    },
    process: {
      eyebrow: "Ablauf",
      title: "Ich verstehe die Aufgabe ruhig, lege einen klaren Weg fest und bringe das Projekt in einen funktionierenden Zustand.",
      lead:
        "So gibt es weniger unnoetige Korrekturen, weniger Zufall und bessere Chancen auf ein Ergebnis, das sowohl nutzbar als auch praesentabel ist.",
      steps: [
        {
          number: "01",
          title: "Briefing und Analyse",
          text: "Ich schaue auf Ziel, Projektformat, vorhandene Materialien und die aktuellen Huerden.",
        },
        {
          number: "02",
          title: "Struktur und Richtung",
          text: "Ich bestimme, was gezeigt werden muss, welche Bloeke wichtig sind und wie der Besucher zum Kontakt gefuehrt wird.",
        },
        {
          number: "03",
          title: "Umsetzung",
          text: "Ich baue Interface, Texte, Logik, Effekte und Technik passend zur Aufgabe auf.",
        },
        {
          number: "04",
          title: "Pruefung und Feinschliff",
          text: "Ich beseitige schwache Stellen, passe Details an und bringe alles in eine saubere Form.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Wenn Sie eine Website, einen Bot, Automatisierung oder die ruhige Ueberarbeitung eines bestehenden Projekts brauchen.",
      lead:
        "Schreiben Sie auf Telegram oder per E-Mail. Eine kurze Beschreibung der Aufgabe, des Zeitrahmens und der vorhandenen Materialien reicht fuer den Start.",
      list: [
        "Sie koennen mit einer neuen Idee oder mit einem laufenden Projekt kommen.",
        "Wenn etwas schwach wirkt, zeige ich zuerst das eigentliche Problem.",
        "Bei Bedarf schlage ich eine staerkere Praesentation fuer Ihren Fall vor.",
      ],
      panelKicker: "Direkter Kontakt",
      telegramLabel: "Telegram",
      emailLabel: "E-Mail",
      note:
        "Je klarer die Ausgangsdaten sind, desto schneller laesst sich ein realistischer Umfang einschaetzen.",
    },
    dock: {
      telegram: "Telegram",
      email: "E-Mail",
    },
    footerRole: "Websites, Bots und Automatisierung",
    footerCopy: "2026 / Alle Rechte vorbehalten / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  fr: {
    langCode: "FR",
    htmlLang: "fr",
    metaTitle: "Smerthnix — sites, bots et automatisation",
    metaDescription:
      "Smerthnix cree des sites, des bots, des automatisations et des solutions techniques pour des besoins concrets.",
    brandRole: "Sites, bots et automatisation",
    nav: {
      solutions: "Solutions",
      services: "Services",
      process: "Processus",
      contact: "Contact",
    },
    headerCta: "Parler du projet",
    hero: {
      eyebrow: "Sites, bots, automatisation et amelioration technique",
      title: "Je cree des sites et des solutions techniques qui inspirent confiance et aident le client a prendre une decision.",
      lead:
        "J'interviens sur des projets ou la structure, la confiance et le resultat concret comptent: site de service, landing page, bot Telegram ou Discord, automatisation des processus et amelioration d'un code deja existant.",
      primary: "Ecrire sur Telegram",
      secondary: "Envoyer un email",
      tertiary: "Voir les formats de travail",
      microcopy:
        "Si le projet doit paraitre plus solide et moins generique, c'est exactement le type de travail que je fais.",
      points: [
        {
          title: "Prise en main rapide",
          text: "Je commence par l'objectif, les points faibles et le resultat attendu avant les effets visuels.",
        },
        {
          title: "Chemin clair vers le contact",
          text: "L'offre, la structure et les CTA rendent la valeur evidente et le passage a l'action simple.",
        },
        {
          title: "Contact direct",
          text: "Telegram et email sont visibles des le premier ecran.",
        },
      ],
      contactLabel: "Contact rapide",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      cardKicker: "Ce que le client obtient",
      cardTitle:
        "Le visiteur doit comprendre tout de suite ce que vous proposez, pourquoi il peut vous faire confiance et comment vous joindre.",
      cardItems: [
        "une structure sans blocs aleatoires",
        "une offre claire et des CTA lisibles",
        "un acces rapide a Telegram et a l'email",
        "une presentation adaptee au besoin reel",
      ],
      languageLabel: "Langues",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Contact direct avec le developpeur",
    },
    brief: {
      eyebrow: "Premiere etape",
      title: "Un brief court suffit pour definir le bon format de solution.",
      lead:
        "On comprend rapidement s'il faut un nouveau site, une refonte du projet actuel, un bot ou une combinaison de plusieurs outils.",
      button: "Aller au contact",
    },
    solutions: {
      eyebrow: "Exemples de demandes",
      title: "Ce qui peut etre fait dans votre cas",
      lead:
        "Ce ne sont pas de faux cas marketing. Ce sont des formats de projet typiques pour lesquels on me contacte afin de renforcer un site, une automatisation ou une partie technique.",
      items: [
        {
          tag: "Site de service",
          title: "Une page qui explique vite la valeur et mene au contact",
          text: "Adapte aux experts, aux petites entreprises et aux projets qui ont besoin d'un premier ecran plus fort.",
          bullets: [
            "offre, structure et blocs de contenu",
            "elements de confiance, contact et CTA",
            "mise en page responsive et propre",
          ],
          link: "Parler d'une demande similaire",
        },
        {
          tag: "Bot ou automatisation",
          title: "Un outil qui retire la routine et accelere le travail",
          text: "Utile pour les commandes, les notifications, la gestion de demandes ou les integrations avec des API.",
          bullets: [
            "scenarios Telegram et Discord",
            "automatisation des actions repetitives",
            "integrations et logique interne",
          ],
          link: "J'ai besoin de ce format",
        },
        {
          tag: "Projet existant",
          title: "Une amelioration technique calme de ce qui est deja en ligne",
          text: "Pour les projets deja lances qui restent faibles, brouillons ou mal alignes avec leur objectif.",
          bullets: [
            "correction des points faibles",
            "meilleure presentation et lisibilite",
            "ajout de fonctions sans chaos",
          ],
          link: "Montrer mon projet",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Comment je peux aider",
      lead:
        "Si la demande ne rentre pas dans une seule categorie, la solution peut etre adaptee a votre stack, votre flux de travail et l'etat actuel du projet.",
      items: [
        {
          tag: "Sites et landing pages",
          title: "Cartes de visite, pages de service, landing pages et interfaces propres",
          text: "Quand la page doit non seulement etre belle, mais aussi expliquer l'offre et mener au contact.",
          points: [
            "structure pour une offre precise",
            "premier ecran fort et CTA utiles",
            "adaptation mobile et desktop",
          ],
          link: "Ecrire a ce sujet",
        },
        {
          tag: "Telegram et Discord",
          title: "Bots, logique de commandes, notifications et scenarios",
          text: "Pratique quand il faut enlever de la routine ou rendre un processus interne plus clair.",
          points: [
            "commandes, menus et scenarios",
            "notifications et logique de traitement",
            "API et services externes",
          ],
          link: "Parler d'un bot",
        },
        {
          tag: "Automatisation",
          title: "Scripts, integrations, panneaux auxiliaires et systemes internes",
          text: "Utile quand des actions repetitives ralentissent le travail ou quand le projet a besoin d'une couche technique.",
          points: [
            "automatisation des etapes de process",
            "liaison de services et d'outils internes",
            "solutions pour un workflow precis",
          ],
          link: "Parler d'automatisation",
        },
        {
          tag: "Refonte et support",
          title: "Correction, renforcement et evolution d'un projet existant",
          text: "Quand le code, le visuel ou la logique existent deja mais demandent un travail technique calme et propre.",
          points: [
            "recherche et correction des points faibles",
            "amelioration de la structure, du texte et de l'interface",
            "ajout soigne de nouvelles fonctions",
          ],
          link: "Montrer le projet actuel",
        },
      ],
    },
    proof: {
      eyebrow: "Confiance et presentation",
      title: "Un site parait plus solide quand on voit tout de suite qu'il ne s'agit pas d'une page generique.",
      lead:
        "L'offre, la structure, le visuel et les contacts doivent travailler ensemble. Un bon premier ecran soutient le contenu.",
      tags: ["Offre claire", "Contact rapide", "Structure sans bruit"],
      cardKicker: "Point d'attention",
      cardItems: [
        "d'abord le sens et le parcours du client, ensuite la decoration",
        "les contacts restent visibles aux endroits importants",
        "les cartes et les blocs menent a l'action suivante",
        "le visuel soutient l'impression d'un projet serieux",
      ],
    },
    process: {
      eyebrow: "Processus",
      title: "Je comprends la demande calmement, je definis un chemin clair et j'amene le projet a un resultat concret.",
      lead:
        "Cela reduit les corrections inutiles, le hasard et augmente les chances d'obtenir quelque chose d'a la fois utile et presentable.",
      steps: [
        {
          number: "01",
          title: "Brief et analyse",
          text: "Je regarde l'objectif, le format du projet, les materiaux disponibles et ce qui bloque le resultat.",
        },
        {
          number: "02",
          title: "Structure et direction",
          text: "Je determine ce qu'il faut montrer, quels blocs comptent et comment mener le visiteur vers le contact.",
        },
        {
          number: "03",
          title: "Realisation",
          text: "Je construis l'interface, les textes, la logique, les effets et la partie technique autour de la demande.",
        },
        {
          number: "04",
          title: "Verification et finition",
          text: "Je corrige les points faibles, j'ajuste les details et je mets l'ensemble dans un etat propre et complet.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Si vous avez besoin d'un site, d'un bot, d'automatisation ou d'une amelioration propre d'un projet existant.",
      lead:
        "Ecrivez sur Telegram ou par email. Une courte description de la demande, du delai et de ce que vous avez deja suffit pour commencer une conversation utile.",
      list: [
        "Vous pouvez venir avec une nouvelle idee ou un projet deja en cours.",
        "Si quelque chose semble faible, je peux d'abord montrer ou se trouve le vrai probleme.",
        "Si besoin, je peux proposer une presentation plus forte pour votre cas.",
      ],
      panelKicker: "Contact direct",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note:
        "Plus les informations de depart sont concretes, plus vite il est possible d'estimer le volume de travail.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Sites, bots et automatisation",
    footerCopy: "2026 / Tous droits reserves / Telegram @Smerthnix / superkolze08@gmail.com",
  },
};

const translationRefresh = {
  en: {
    metaTitle: "Smerthnix — websites, bots, automation and refinement",
    metaDescription:
      "Smerthnix develops websites, Telegram and Discord bots, automation, game projects and technical improvements for existing systems.",
    brandRole: "Websites, bots, automation",
    nav: {
      solutions: "Areas",
      services: "Services",
      process: "Process",
      contact: "Contact",
    },
    headerCta: "Contact",
    hero: {
      eyebrow: "Development, automation and refinement",
      title: "Websites, bots, automation and project refinement.",
      titleAccent: ["Websites", "bots", "automation", "refinement"],
      lead:
        "I build websites for services and projects, bots, scripts, integrations, game builds, plugins, configs and technical improvements. You can come with a new idea or with a project that is already running.",
      primary: "Message on Telegram",
      secondary: "Send email",
      tertiary: "View services",
      microcopy:
        "Direct work. Telegram and email are available without unnecessary middlemen.",
      points: [
        {
          title: "Websites and web projects",
          text: "Business cards, landing pages, service pages, internal panels and improvement of existing interfaces.",
        },
        {
          title: "Bots and automation",
          text: "Telegram, Discord, scripts, commands, notifications, APIs and workflows for a specific task.",
        },
        {
          title: "Game projects",
          text: "Configs, plugins, menus, logic, custom systems and technical refinement of existing builds.",
        },
      ],
      contactLabel: "Quick contact",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      cardKicker: "Main areas",
      cardTitle: "What you can order",
      cardItems: [
        "a website or page for a service",
        "a Telegram / Discord bot for your task",
        "automation, a script or an integration",
        "code, plugin, config or game system refinement",
      ],
      languageLabel: "Languages",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Direct work",
    },
    brief: {
      eyebrow: "Start",
      title: "You can come with a fresh idea or an already running project.",
      lead:
        "If the task is large, I will help split it into stages. If you need a small fix, I can also connect without unnecessary friction.",
      button: "Discuss",
    },
    solutions: {
      eyebrow: "How I can help",
      title: "Tasks people usually come with",
      lead:
        "I am not tied to one format: we can build a website, set up a bot, automate a process or improve an existing system.",
      items: [
        {
          tag: "Websites and pages",
          title: "Business cards, landing pages and service pages",
          text: "When you need to present an offer, build a clear structure and make it easy for a person to contact you.",
          bullets: [
            "a website for a service, niche or project",
            "first screen, sections, form and contacts",
            "responsive layout and careful design refinement",
          ],
          link: "Order a website",
        },
        {
          tag: "Bots and automation",
          title: "Telegram, Discord, scripts and working logic",
          text: "When you need to automate routine work, set up commands, notifications, menus or connect services together.",
          bullets: [
            "bots for real working scenarios",
            "scripts, integrations and APIs",
            "internal logic and action handling",
          ],
          link: "Discuss automation",
        },
        {
          tag: "Game and existing projects",
          title: "Plugins, configs, menus, systems and base refinement",
          text: "If the project already works but needs more order, functionality or proper technical setup.",
          bullets: [
            "refinement of existing code and logic",
            "plugin, config and menu setup",
            "custom functionality for your task",
          ],
          link: "Show the project",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What I can take on",
      lead:
        "I work with separate tasks and with projects that need to be built and finished properly.",
      items: [
        {
          tag: "Web",
          title: "Websites, service pages, landing pages and internal interfaces",
          text: "A good fit if you need a website for a service, a project launch or careful refinement of an existing page.",
          points: [
            "structure and copy for the task",
            "responsive layout and working contact points",
            "careful refinement without unnecessary rebuilding",
          ],
          link: "Write about a website",
        },
        {
          tag: "Bots",
          title: "Telegram and Discord bots for a specific process",
          text: "Bots for commands, menus, notifications, requests, internal logic and integrations with services.",
          points: [
            "commands, roles, menus and scenarios",
            "APIs, notifications and action handling",
            "setup for a specific workflow",
          ],
          link: "Write about bots",
        },
        {
          tag: "Automation",
          title: "Automation, scripts, integrations and service tools",
          text: "When part of the work can be removed from manual routine and handled by a script, integration or separate tool.",
          points: [
            "automation of repeated tasks",
            "connecting services and internal systems",
            "solutions for an individual process",
          ],
          link: "Write about automation",
        },
        {
          tag: "Game / Support",
          title: "Game projects, plugins, configs and refinement of existing bases",
          text: "I can connect to game projects, logic setup, menus, commands, custom functionality and the technical side.",
          points: [
            "plugins, configs and internal logic",
            "menus, commands and technical systems",
            "refinement and fixes for existing projects",
          ],
          link: "Write about a project",
        },
      ],
    },
    proof: {
      eyebrow: "What the client gets",
      title: "Clear work without endless messages and wasted time.",
      lead:
        "I work directly, get into the task quickly and keep communication clear throughout the project.",
      tags: ["Direct contact", "Clear scope", "Working result"],
      cardKicker: "Output",
      cardItems: [
        "it is clear what is being done and why",
        "you can come with a new task or an existing base",
        "communication goes through Telegram and email without long chains",
        "the result is built for the task, not from a random template",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "First I understand the task, then I suggest an option and only after that I start building.",
      lead:
        "This means fewer random decisions, fewer unnecessary edits and a clearer work process.",
      steps: [
        {
          number: "01",
          title: "I review the task",
          text: "I check what already exists, what result is needed and where the main issue is.",
        },
        {
          number: "02",
          title: "I shape the solution",
          text: "I suggest a working option, implementation format and the best starting point.",
        },
        {
          number: "03",
          title: "I build and connect",
          text: "I assemble the interface, code, logic, automation or required connections.",
        },
        {
          number: "04",
          title: "I check the result",
          text: "I polish details, fix weak points and prepare the project for normal use.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Message me if you need a website, bot, automation or project refinement.",
      lead:
        "You can write on Telegram or by email. Briefly describe the task, and I will guide you on the work format.",
      list: [
        "You can come with an idea, a brief or a project that is already running.",
        "If you only need one specific part or refinement, that is also fine.",
        "I connect to tasks around websites, bots, game projects and technical systems.",
      ],
      panelKicker: "Contact",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note:
        "The clearer the task at the start, the faster we can discuss scope, timing and cost.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Websites, bots, automation",
    footerCopy: "2026 / All rights reserved / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  pl: {
    metaTitle: "Smerthnix — strony, boty, automatyzacja i dopracowanie",
    metaDescription:
      "Smerthnix tworzy strony, boty Telegram i Discord, automatyzacje, projekty gier oraz techniczne poprawki gotowych systemów.",
    brandRole: "Strony, boty, automatyzacja",
    nav: {
      solutions: "Kierunki",
      services: "Usługi",
      process: "Jak pracuję",
      contact: "Kontakt",
    },
    headerCta: "Kontakt",
    hero: {
      eyebrow: "Tworzenie, automatyzacja i dopracowanie",
      title: "Strony, boty, automatyzacja i dopracowanie projektów.",
      titleAccent: ["Strony", "boty", "automatyzacja", "dopracowanie"],
      lead:
        "Tworzę strony pod usługi i projekty, boty, skrypty, integracje, paczki gier, pluginy, konfiguracje oraz techniczne poprawki. Możesz zgłosić się z nowym pomysłem albo z projektem, który już działa.",
      primary: "Napisz na Telegram",
      secondary: "Napisz na email",
      tertiary: "Zobacz usługi",
      microcopy:
        "Pracuję bezpośrednio. Kontakt przez Telegram i email, bez zbędnych pośredników.",
      points: [
        {
          title: "Strony i projekty web",
          text: "Wizytówki, landing page, strony usług, panele wewnętrzne i poprawki istniejących interfejsów.",
        },
        {
          title: "Boty i automatyzacja",
          text: "Telegram, Discord, skrypty, komendy, powiadomienia, API i scenariusze pracy pod konkretną potrzebę.",
        },
        {
          title: "Projekty gier",
          text: "Konfiguracje, pluginy, menu, logika, systemy customowe i techniczne poprawki gotowej paczki.",
        },
      ],
      contactLabel: "Szybki kontakt",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      cardKicker: "Główne kierunki",
      cardTitle: "Co można zamówić",
      cardItems: [
        "stronę albo podstronę pod usługę",
        "bota Telegram / Discord pod zadanie",
        "automatyzację, skrypt albo integrację",
        "poprawki kodu, pluginów, konfiguracji albo systemów gry",
      ],
      languageLabel: "Języki",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Praca bezpośrednia",
    },
    brief: {
      eyebrow: "Start",
      title: "Możesz zgłosić się od zera albo z gotowym projektem.",
      lead:
        "Jeśli zadanie jest większe, pomogę rozłożyć je na etapy. Jeśli potrzebna jest punktowa poprawka, też mogę się podłączyć bez zbędnej biurokracji.",
      button: "Omów",
    },
    solutions: {
      eyebrow: "W czym pomagam",
      title: "Zadania, z którymi najczęściej się zgłaszają",
      lead:
        "Nie ograniczam się do jednego formatu: można zrobić stronę, ustawić bota, zautomatyzować proces albo dopracować gotowy system.",
      items: [
        {
          tag: "Strony i podstrony",
          title: "Wizytówki, landing page i strony usług",
          text: "Gdy trzeba pokazać ofertę, zbudować jasną strukturę i ułatwić kontakt.",
          bullets: [
            "strona pod usługę, niszę albo projekt",
            "pierwszy ekran, bloki, formularz i kontakty",
            "responsywność i dokładne poprawki designu",
          ],
          link: "Zamów stronę",
        },
        {
          tag: "Boty i automatyzacja",
          title: "Telegram, Discord, skrypty i działająca logika",
          text: "Gdy trzeba zautomatyzować rutynę, ustawić komendy, powiadomienia, menu albo połączyć serwisy.",
          bullets: [
            "boty pod realne scenariusze pracy",
            "skrypty, integracje i API",
            "logika wewnętrzna i obsługa akcji",
          ],
          link: "Omów automatyzację",
        },
        {
          tag: "Gry i gotowe projekty",
          title: "Pluginy, konfiguracje, menu, systemy i poprawki bazy",
          text: "Jeśli projekt już działa, ale brakuje mu porządku, funkcji albo normalnej konfiguracji technicznej.",
          bullets: [
            "dopracowanie gotowego kodu i logiki",
            "ustawianie pluginów, konfiguracji i menu",
            "customowe funkcje pod Twoje zadanie",
          ],
          link: "Pokaż projekt",
        },
      ],
    },
    services: {
      eyebrow: "Usługi",
      title: "Co mogę wziąć do pracy",
      lead:
        "Pracuję zarówno z pojedynczymi zadaniami, jak i z projektami, które trzeba złożyć i doprowadzić do końca.",
      items: [
        {
          tag: "Web",
          title: "Strony, strony usług, landing page i interfejsy wewnętrzne",
          text: "Dobre rozwiązanie, gdy potrzebna jest strona pod usługę, start projektu albo poprawki istniejącej strony.",
          points: [
            "struktura i tekst pod zadanie",
            "responsywna strona i działający kontakt",
            "dokładne poprawki bez zbędnej przebudowy",
          ],
          link: "Napisz w sprawie strony",
        },
        {
          tag: "Bots",
          title: "Boty Telegram i Discord pod konkretny proces",
          text: "Boty do komend, menu, powiadomień, zgłoszeń, logiki wewnętrznej i połączeń z serwisami.",
          points: [
            "komendy, role, menu i scenariusze",
            "API, powiadomienia i obsługa akcji",
            "ustawienie pod konkretny proces pracy",
          ],
          link: "Napisz w sprawie botów",
        },
        {
          tag: "Automatyzacja",
          title: "Automatyzacja, skrypty, integracje i narzędzia pomocnicze",
          text: "Gdy część pracy można zdjąć z rąk i zamknąć w skrypcie, integracji albo osobnym narzędziu.",
          points: [
            "automatyzacja powtarzalnych zadań",
            "łączenie serwisów i systemów wewnętrznych",
            "rozwiązania pod indywidualny proces",
          ],
          link: "Napisz o automatyzacji",
        },
        {
          tag: "Game / Support",
          title: "Projekty gier, pluginy, konfiguracje i poprawki gotowej bazy",
          text: "Podłączam się do projektów gier, logiki, menu, komend, customowych funkcji i części technicznej.",
          points: [
            "pluginy, konfiguracje i logika wewnętrzna",
            "menu, komendy i systemy techniczne",
            "dopracowanie i naprawa gotowego projektu",
          ],
          link: "Napisz o projekcie",
        },
      ],
    },
    proof: {
      eyebrow: "Co dostaje klient",
      title: "Jasną pracę bez zbędnej korespondencji i straty czasu.",
      lead:
        "Pracuję bezpośrednio, szybko wchodzę w zadanie i trzymam kontakt po projekcie bez niepotrzebnych pośredników.",
      tags: ["Bezpośredni kontakt", "Jasny zakres", "Działający wynik"],
      cardKicker: "Na wyjściu",
      cardItems: [
        "wiadomo, co dokładnie jest robione i po co",
        "można przyjść z nowym zadaniem albo gotową bazą",
        "kontakt idzie przez Telegram i email bez długich łańcuchów",
        "wynik jest robiony pod zadanie, a nie z losowego szablonu",
      ],
    },
    process: {
      eyebrow: "Jak pracuję",
      title: "Najpierw rozumiem zadanie, potem proponuję wariant i dopiero wtedy zaczynam robić.",
      lead:
        "Dzięki temu jest mniej przypadkowych decyzji, mniej zbędnych poprawek i jaśniejszy proces pracy.",
      steps: [
        {
          number: "01",
          title: "Sprawdzam zadanie",
          text: "Patrzę, co już jest, jaki wynik jest potrzebny i gdzie znajduje się główny problem.",
        },
        {
          number: "02",
          title: "Układam rozwiązanie",
          text: "Proponuję działający wariant, format realizacji i najlepszy punkt startu.",
        },
        {
          number: "03",
          title: "Robię i łączę",
          text: "Składam interfejs, kod, logikę, automatyzację albo potrzebne połączenia.",
        },
        {
          number: "04",
          title: "Sprawdzam wynik",
          text: "Dopracowuję detale, usuwam słabe miejsca i przygotowuję projekt do normalnej pracy.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Napisz, jeśli potrzebujesz strony, bota, automatyzacji albo dopracowania projektu.",
      lead:
        "Możesz napisać na Telegram albo email. Krótko opisz zadanie, a podpowiem format pracy.",
      list: [
        "Możesz przyjść z pomysłem, briefem albo projektem, który już działa.",
        "Jeśli potrzebny jest tylko jeden konkretny blok albo poprawka, to też normalne.",
        "Podłączam się do zadań ze stronami, botami, projektami gier i systemami technicznymi.",
      ],
      panelKicker: "Kontakt",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note:
        "Im jaśniejsze zadanie na starcie, tym szybciej można omówić zakres, terminy i koszt.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Strony, boty, automatyzacja",
    footerCopy: "2026 / Wszelkie prawa zastrzeżone / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  uk: {
    metaTitle: "Smerthnix — сайти, боти, автоматизація та доопрацювання",
    metaDescription:
      "Smerthnix розробляє сайти, Telegram і Discord ботів, автоматизацію, ігрові проєкти та технічні доопрацювання готових систем.",
    brandRole: "Сайти, боти, автоматизація",
    nav: {
      solutions: "Напрями",
      services: "Послуги",
      process: "Як працюю",
      contact: "Контакти",
    },
    headerCta: "Зв'язатися",
    hero: {
      eyebrow: "Розробка, автоматизація та доопрацювання",
      title: "Сайти, боти, автоматизація та доопрацювання проєктів.",
      titleAccent: ["Сайти", "боти", "автоматизація", "доопрацювання"],
      lead:
        "Розробляю сайти для послуг і проєктів, ботів, скрипти, інтеграції, ігрові збірки, плагіни, конфіги та технічні доопрацювання. Можна звернутися як з новою задачею, так і з уже запущеним проєктом.",
      primary: "Написати в Telegram",
      secondary: "Написати на пошту",
      tertiary: "Подивитися послуги",
      microcopy:
        "Працюю напряму. Зв'язок у Telegram і поштою, без зайвих посередників.",
      points: [
        {
          title: "Сайти та веб-проєкти",
          text: "Візитки, лендинги, сторінки послуг, внутрішні панелі та доопрацювання існуючих інтерфейсів.",
        },
        {
          title: "Боти та автоматизація",
          text: "Telegram, Discord, скрипти, команди, сповіщення, API та робочі сценарії під конкретну задачу.",
        },
        {
          title: "Ігрові проєкти",
          text: "Конфіги, плагіни, меню, логіка, кастомні системи та технічне доопрацювання готової збірки.",
        },
      ],
      contactLabel: "Швидкий контакт",
      telegramLabel: "Telegram",
      emailLabel: "Пошта",
      cardKicker: "Основні напрями",
      cardTitle: "Що можна замовити",
      cardItems: [
        "сайт або сторінку під послугу",
        "Telegram / Discord бота під задачу",
        "автоматизацію, скрипт або інтеграцію",
        "доопрацювання коду, плагінів, конфігів або ігрових систем",
      ],
      languageLabel: "Мови",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Пряма робота",
    },
    brief: {
      eyebrow: "Старт",
      title: "Можна звернутися з нуля або з уже готовим проєктом.",
      lead:
        "Якщо задача велика, допоможу розкласти її на етапи. Якщо потрібна точкова правка, теж можу підключитися без зайвої тяганини.",
      button: "Обговорити",
    },
    solutions: {
      eyebrow: "З чим допомагаю",
      title: "Задачі, з якими найчастіше звертаються",
      lead:
        "Не прив'язуюся до одного формату: можна зібрати сайт, налаштувати бота, автоматизувати процес або доопрацювати готову систему.",
      items: [
        {
          tag: "Сайти та сторінки",
          title: "Візитки, лендинги та сторінки послуг",
          text: "Коли потрібно показати пропозицію, зібрати зрозумілу структуру та вивести людину на зв'язок.",
          bullets: [
            "сайт під послугу, нішу або проєкт",
            "перший екран, блоки, форма та контакти",
            "адаптив і акуратне доопрацювання дизайну",
          ],
          link: "Замовити сайт",
        },
        {
          tag: "Боти та автоматизація",
          title: "Telegram, Discord, скрипти та робоча логіка",
          text: "Коли потрібно автоматизувати рутину, налаштувати команди, сповіщення, меню або зв'язати сервіси між собою.",
          bullets: [
            "боти під реальні робочі сценарії",
            "скрипти, інтеграції та API",
            "внутрішня логіка та обробка дій",
          ],
          link: "Обговорити автоматизацію",
        },
        {
          tag: "Ігрові та готові проєкти",
          title: "Плагіни, конфіги, меню, системи та доопрацювання бази",
          text: "Якщо проєкт уже працює, але йому бракує порядку, функціоналу або нормального технічного налаштування.",
          bullets: [
            "доопрацювання готового коду та логіки",
            "налаштування плагінів, конфігів і меню",
            "кастомний функціонал під вашу задачу",
          ],
          link: "Показати проєкт",
        },
      ],
    },
    services: {
      eyebrow: "Послуги",
      title: "Що можу взяти в роботу",
      lead:
        "Працюю і з окремими задачами, і з проєктами, які потрібно зібрати та довести до нормального результату.",
      items: [
        {
          tag: "Web",
          title: "Сайти, сторінки послуг, лендинги та внутрішні інтерфейси",
          text: "Підійде, якщо потрібен сайт під послугу, запуск проєкту або акуратне доопрацювання вже існуючої сторінки.",
          points: [
            "структура та текст під задачу",
            "адаптивна верстка та робочий зв'язок",
            "акуратне доопрацювання без зайвої переробки",
          ],
          link: "Написати щодо сайту",
        },
        {
          tag: "Bots",
          title: "Telegram і Discord боти під конкретний процес",
          text: "Боти для команд, меню, сповіщень, заявок, внутрішньої логіки та зв'язки з сервісами.",
          points: [
            "команди, ролі, меню та сценарії",
            "API, сповіщення та обробка дій",
            "налаштування під конкретний робочий процес",
          ],
          link: "Написати щодо ботів",
        },
        {
          tag: "Автоматизація",
          title: "Автоматизація, скрипти, інтеграції та службові рішення",
          text: "Коли частину роботи можна зняти з рук і закрити скриптом, інтеграцією або окремим інструментом.",
          points: [
            "автоматизація повторюваних задач",
            "зв'язка сервісів і внутрішніх систем",
            "рішення під індивідуальний процес",
          ],
          link: "Написати щодо автоматизації",
        },
        {
          tag: "Game / Support",
          title: "Ігрові проєкти, плагіни, конфіги та доопрацювання готової бази",
          text: "Підключаюся до ігрових проєктів, налаштування логіки, меню, команд, кастомного функціоналу та технічної частини.",
          points: [
            "плагіни, конфіги та внутрішня логіка",
            "меню, команди та технічні системи",
            "доопрацювання й виправлення готового проєкту",
          ],
          link: "Написати щодо проєкту",
        },
      ],
    },
    proof: {
      eyebrow: "Що отримує замовник",
      title: "Зрозумілу роботу без зайвого листування та втрати часу.",
      lead:
        "Працюю напряму, швидко входжу в задачу та тримаю зв'язок по проєкту без зайвих посередників.",
      tags: ["Прямий контакт", "Зрозумілий обсяг", "Робочий результат"],
      cardKicker: "На виході",
      cardItems: [
        "зрозуміло, що саме робиться і для чого",
        "можна прийти з новою задачею або готовою базою",
        "зв'язок іде через Telegram і пошту без довгих ланцюжків",
        "результат збирається під задачу, а не за випадковим шаблоном",
      ],
    },
    process: {
      eyebrow: "Як працюю",
      title: "Спочатку розбираю задачу, потім пропоную варіант і тільки після цього починаю робити.",
      lead:
        "Так менше випадкових рішень, менше зайвих правок і зрозуміліший процес роботи.",
      steps: [
        {
          number: "01",
          title: "Дивлюся задачу",
          text: "Вивчаю, що вже є, який результат потрібен і де зараз основна проблема.",
        },
        {
          number: "02",
          title: "Формую рішення",
          text: "Пропоную робочий варіант, формат реалізації та з чого краще почати.",
        },
        {
          number: "03",
          title: "Роблю і з'єдную",
          text: "Збираю інтерфейс, код, логіку, автоматизацію або потрібні підключення.",
        },
        {
          number: "04",
          title: "Перевіряю результат",
          text: "Доводжу деталі, виправляю слабкі місця та готую проєкт до нормальної роботи.",
        },
      ],
    },
    contact: {
      eyebrow: "Контакти",
      title: "Напишіть, якщо потрібен сайт, бот, автоматизація або доопрацювання проєкту.",
      lead:
        "Можна написати в Telegram або на пошту. Коротко опишіть задачу, і я зорієнтую по формату роботи.",
      list: [
        "Можна прийти з ідеєю, ТЗ або вже працюючим проєктом.",
        "Якщо потрібен не весь проєкт одразу, а тільки конкретний блок або доопрацювання, це теж нормально.",
        "Підключаюся до задач по сайтах, ботах, ігрових проєктах і технічних системах.",
      ],
      panelKicker: "Зв'язок",
      telegramLabel: "Telegram",
      emailLabel: "Пошта",
      note:
        "Чим зрозуміліша задача на старті, тим швидше можна обговорити обсяг, строки та вартість.",
    },
    dock: {
      telegram: "Telegram",
      email: "Пошта",
    },
    footerRole: "Сайти, боти, автоматизація",
    footerCopy: "2026 / Усі права захищені / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  de: {
    metaTitle: "Smerthnix — Websites, Bots, Automatisierung und Weiterentwicklung",
    metaDescription:
      "Smerthnix entwickelt Websites, Telegram- und Discord-Bots, Automatisierungen, Game-Projekte und technische Verbesserungen bestehender Systeme.",
    brandRole: "Websites, Bots, Automatisierung",
    nav: {
      solutions: "Bereiche",
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt",
    },
    headerCta: "Kontakt",
    hero: {
      eyebrow: "Entwicklung, Automatisierung und Weiterentwicklung",
      title: "Websites, Bots, Automatisierung und Projekt-Weiterentwicklung.",
      titleAccent: ["Websites", "Bots", "Automatisierung", "Weiterentwicklung"],
      lead:
        "Ich entwickle Websites für Dienstleistungen und Projekte, Bots, Skripte, Integrationen, Game-Builds, Plugins, Konfigurationen und technische Verbesserungen. Sie können mit einer neuen Idee oder mit einem bereits laufenden Projekt kommen.",
      primary: "Auf Telegram schreiben",
      secondary: "E-Mail schreiben",
      tertiary: "Leistungen ansehen",
      microcopy:
        "Direkte Zusammenarbeit. Kontakt über Telegram und E-Mail, ohne unnötige Zwischenstellen.",
      points: [
        {
          title: "Websites und Web-Projekte",
          text: "Visitenkarten, Landingpages, Service-Seiten, interne Panels und Verbesserungen bestehender Interfaces.",
        },
        {
          title: "Bots und Automatisierung",
          text: "Telegram, Discord, Skripte, Befehle, Benachrichtigungen, APIs und Workflows für konkrete Aufgaben.",
        },
        {
          title: "Game-Projekte",
          text: "Konfigurationen, Plugins, Menüs, Logik, Custom-Systeme und technische Verbesserung bestehender Builds.",
        },
      ],
      contactLabel: "Schneller Kontakt",
      telegramLabel: "Telegram",
      emailLabel: "E-Mail",
      cardKicker: "Hauptbereiche",
      cardTitle: "Was Sie bestellen können",
      cardItems: [
        "eine Website oder Seite für eine Dienstleistung",
        "einen Telegram / Discord Bot für Ihre Aufgabe",
        "Automatisierung, ein Skript oder eine Integration",
        "Verbesserung von Code, Plugins, Konfigurationen oder Game-Systemen",
      ],
      languageLabel: "Sprachen",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Direkte Arbeit",
    },
    brief: {
      eyebrow: "Start",
      title: "Sie können mit einer neuen Idee oder mit einem fertigen Projekt kommen.",
      lead:
        "Wenn die Aufgabe groß ist, helfe ich, sie in Etappen aufzuteilen. Wenn nur eine punktuelle Änderung nötig ist, kann ich ebenfalls ohne unnötigen Aufwand einsteigen.",
      button: "Besprechen",
    },
    solutions: {
      eyebrow: "Wobei ich helfe",
      title: "Aufgaben, mit denen Kunden meistens kommen",
      lead:
        "Ich bin nicht an ein Format gebunden: Wir können eine Website erstellen, einen Bot einrichten, einen Prozess automatisieren oder ein bestehendes System verbessern.",
      items: [
        {
          tag: "Websites und Seiten",
          title: "Visitenkarten, Landingpages und Service-Seiten",
          text: "Wenn ein Angebot gezeigt, eine klare Struktur aufgebaut und der Kontakt einfach gemacht werden muss.",
          bullets: [
            "Website für Dienstleistung, Nische oder Projekt",
            "erster Screen, Blöcke, Formular und Kontakte",
            "responsive Umsetzung und saubere Design-Verbesserung",
          ],
          link: "Website bestellen",
        },
        {
          tag: "Bots und Automatisierung",
          title: "Telegram, Discord, Skripte und funktionierende Logik",
          text: "Wenn Routine automatisiert, Befehle, Benachrichtigungen, Menüs oder Verbindungen zwischen Diensten eingerichtet werden müssen.",
          bullets: [
            "Bots für echte Arbeitsszenarien",
            "Skripte, Integrationen und APIs",
            "interne Logik und Verarbeitung von Aktionen",
          ],
          link: "Automatisierung besprechen",
        },
        {
          tag: "Game- und bestehende Projekte",
          title: "Plugins, Konfigurationen, Menüs, Systeme und Basis-Verbesserung",
          text: "Wenn das Projekt bereits läuft, aber Ordnung, Funktionalität oder eine normale technische Einrichtung fehlt.",
          bullets: [
            "Verbesserung von bestehendem Code und Logik",
            "Einrichtung von Plugins, Konfigurationen und Menüs",
            "Custom-Funktionalität für Ihre Aufgabe",
          ],
          link: "Projekt zeigen",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Was ich übernehmen kann",
      lead:
        "Ich arbeite mit einzelnen Aufgaben und mit Projekten, die sauber aufgebaut und fertiggestellt werden müssen.",
      items: [
        {
          tag: "Web",
          title: "Websites, Service-Seiten, Landingpages und interne Interfaces",
          text: "Passend, wenn Sie eine Website für eine Dienstleistung, einen Projektstart oder eine saubere Verbesserung einer bestehenden Seite brauchen.",
          points: [
            "Struktur und Text passend zur Aufgabe",
            "responsive Umsetzung und funktionierende Kontaktpunkte",
            "saubere Verbesserung ohne unnötigen Neuaufbau",
          ],
          link: "Zur Website schreiben",
        },
        {
          tag: "Bots",
          title: "Telegram- und Discord-Bots für konkrete Prozesse",
          text: "Bots für Befehle, Menüs, Benachrichtigungen, Anfragen, interne Logik und Verbindungen mit Diensten.",
          points: [
            "Befehle, Rollen, Menüs und Szenarien",
            "APIs, Benachrichtigungen und Aktionsverarbeitung",
            "Einrichtung für einen konkreten Workflow",
          ],
          link: "Zu Bots schreiben",
        },
        {
          tag: "Automatisierung",
          title: "Automatisierung, Skripte, Integrationen und Service-Tools",
          text: "Wenn ein Teil der Arbeit aus manueller Routine herausgenommen und durch Skript, Integration oder Tool gelöst werden kann.",
          points: [
            "Automatisierung wiederkehrender Aufgaben",
            "Verbindung von Diensten und internen Systemen",
            "Lösungen für individuelle Prozesse",
          ],
          link: "Zur Automatisierung schreiben",
        },
        {
          tag: "Game / Support",
          title: "Game-Projekte, Plugins, Konfigurationen und Verbesserung bestehender Basen",
          text: "Ich steige in Game-Projekte, Logik, Menüs, Befehle, Custom-Funktionen und technische Teile ein.",
          points: [
            "Plugins, Konfigurationen und interne Logik",
            "Menüs, Befehle und technische Systeme",
            "Verbesserung und Fehlerbehebung bestehender Projekte",
          ],
          link: "Zum Projekt schreiben",
        },
      ],
    },
    proof: {
      eyebrow: "Was der Kunde bekommt",
      title: "Klare Arbeit ohne unnötige Nachrichten und Zeitverlust.",
      lead:
        "Ich arbeite direkt, komme schnell in die Aufgabe hinein und halte die Kommunikation während des Projekts klar.",
      tags: ["Direkter Kontakt", "Klarer Umfang", "Funktionierendes Ergebnis"],
      cardKicker: "Am Ende",
      cardItems: [
        "es ist klar, was gemacht wird und wofür",
        "Sie können mit einer neuen Aufgabe oder bestehender Basis kommen",
        "Kontakt läuft über Telegram und E-Mail ohne lange Ketten",
        "das Ergebnis wird für die Aufgabe gebaut, nicht nach zufälligem Template",
      ],
    },
    process: {
      eyebrow: "Ablauf",
      title: "Zuerst verstehe ich die Aufgabe, dann schlage ich eine Lösung vor und beginne erst danach mit der Umsetzung.",
      lead:
        "So gibt es weniger zufällige Entscheidungen, weniger unnötige Korrekturen und einen klareren Arbeitsprozess.",
      steps: [
        {
          number: "01",
          title: "Aufgabe prüfen",
          text: "Ich schaue, was bereits vorhanden ist, welches Ergebnis gebraucht wird und wo das Hauptproblem liegt.",
        },
        {
          number: "02",
          title: "Lösung formen",
          text: "Ich schlage eine funktionierende Variante, das Umsetzungsformat und den besten Startpunkt vor.",
        },
        {
          number: "03",
          title: "Bauen und verbinden",
          text: "Ich baue Interface, Code, Logik, Automatisierung oder nötige Verbindungen auf.",
        },
        {
          number: "04",
          title: "Ergebnis prüfen",
          text: "Ich poliere Details, behebe Schwachstellen und bereite das Projekt für normale Nutzung vor.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Schreiben Sie, wenn Sie eine Website, einen Bot, Automatisierung oder Projekt-Weiterentwicklung brauchen.",
      lead:
        "Sie können auf Telegram oder per E-Mail schreiben. Beschreiben Sie kurz die Aufgabe, und ich ordne das passende Arbeitsformat ein.",
      list: [
        "Sie können mit einer Idee, einem Briefing oder einem laufenden Projekt kommen.",
        "Wenn nur ein bestimmter Block oder eine Verbesserung nötig ist, ist das ebenfalls in Ordnung.",
        "Ich steige in Aufgaben rund um Websites, Bots, Game-Projekte und technische Systeme ein.",
      ],
      panelKicker: "Kontakt",
      telegramLabel: "Telegram",
      emailLabel: "E-Mail",
      note:
        "Je klarer die Aufgabe am Anfang ist, desto schneller lassen sich Umfang, Zeit und Kosten besprechen.",
    },
    dock: {
      telegram: "Telegram",
      email: "E-Mail",
    },
    footerRole: "Websites, Bots, Automatisierung",
    footerCopy: "2026 / Alle Rechte vorbehalten / Telegram @Smerthnix / superkolze08@gmail.com",
  },
  fr: {
    metaTitle: "Smerthnix — sites, bots, automatisation et amélioration",
    metaDescription:
      "Smerthnix développe des sites, des bots Telegram et Discord, des automatisations, des projets de jeu et des améliorations techniques de systèmes existants.",
    brandRole: "Sites, bots, automatisation",
    nav: {
      solutions: "Domaines",
      services: "Services",
      process: "Méthode",
      contact: "Contact",
    },
    headerCta: "Contact",
    hero: {
      eyebrow: "Développement, automatisation et amélioration",
      title: "Sites, bots, automatisation et amélioration de projets.",
      titleAccent: ["Sites", "bots", "automatisation", "amélioration"],
      lead:
        "Je développe des sites pour des services et des projets, des bots, des scripts, des intégrations, des builds de jeu, des plugins, des configs et des améliorations techniques. Vous pouvez venir avec une nouvelle idée ou avec un projet déjà lancé.",
      primary: "Écrire sur Telegram",
      secondary: "Écrire par email",
      tertiary: "Voir les services",
      microcopy:
        "Travail direct. Contact par Telegram et email, sans intermédiaires inutiles.",
      points: [
        {
          title: "Sites et projets web",
          text: "Sites vitrines, landing pages, pages de services, panneaux internes et amélioration d'interfaces existantes.",
        },
        {
          title: "Bots et automatisation",
          text: "Telegram, Discord, scripts, commandes, notifications, API et scénarios de travail pour une tâche précise.",
        },
        {
          title: "Projets de jeu",
          text: "Configs, plugins, menus, logique, systèmes custom et amélioration technique d'un build existant.",
        },
      ],
      contactLabel: "Contact rapide",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      cardKicker: "Domaines principaux",
      cardTitle: "Ce que vous pouvez commander",
      cardItems: [
        "un site ou une page pour un service",
        "un bot Telegram / Discord pour votre tâche",
        "une automatisation, un script ou une intégration",
        "l'amélioration de code, plugins, configs ou systèmes de jeu",
      ],
      languageLabel: "Langues",
      languageValue: "RU / EN / PL / UA / DE / FR",
      proofChip: "Travail direct",
    },
    brief: {
      eyebrow: "Départ",
      title: "Vous pouvez venir avec une idée neuve ou avec un projet déjà prêt.",
      lead:
        "Si la tâche est large, je vous aide à la diviser en étapes. Si vous avez besoin d'une correction précise, je peux aussi intervenir sans lourdeur inutile.",
      button: "Discuter",
    },
    solutions: {
      eyebrow: "Ce que je fais",
      title: "Les demandes les plus fréquentes",
      lead:
        "Je ne me limite pas à un seul format: on peut créer un site, configurer un bot, automatiser un processus ou améliorer un système existant.",
      items: [
        {
          tag: "Sites et pages",
          title: "Sites vitrines, landing pages et pages de services",
          text: "Quand il faut présenter une offre, construire une structure claire et faciliter le contact.",
          bullets: [
            "site pour un service, une niche ou un projet",
            "premier écran, blocs, formulaire et contacts",
            "responsive et amélioration soignée du design",
          ],
          link: "Commander un site",
        },
        {
          tag: "Bots et automatisation",
          title: "Telegram, Discord, scripts et logique de travail",
          text: "Quand il faut automatiser la routine, configurer des commandes, notifications, menus ou relier des services.",
          bullets: [
            "bots pour de vrais scénarios de travail",
            "scripts, intégrations et API",
            "logique interne et traitement des actions",
          ],
          link: "Discuter automatisation",
        },
        {
          tag: "Jeux et projets existants",
          title: "Plugins, configs, menus, systèmes et amélioration de base",
          text: "Si le projet fonctionne déjà, mais manque d'ordre, de fonctionnalités ou d'une vraie configuration technique.",
          bullets: [
            "amélioration du code et de la logique existants",
            "configuration de plugins, configs et menus",
            "fonctionnalité custom pour votre tâche",
          ],
          link: "Montrer le projet",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Ce que je peux prendre en charge",
      lead:
        "Je travaille sur des tâches séparées comme sur des projets qu'il faut construire et terminer correctement.",
      items: [
        {
          tag: "Web",
          title: "Sites, pages de services, landing pages et interfaces internes",
          text: "Adapté si vous avez besoin d'un site pour un service, d'un lancement de projet ou d'une amélioration soignée d'une page existante.",
          points: [
            "structure et texte adaptés à la tâche",
            "mise en page responsive et contacts fonctionnels",
            "amélioration soignée sans reconstruction inutile",
          ],
          link: "Écrire pour un site",
        },
        {
          tag: "Bots",
          title: "Bots Telegram et Discord pour un processus concret",
          text: "Bots pour commandes, menus, notifications, demandes, logique interne et connexion avec des services.",
          points: [
            "commandes, rôles, menus et scénarios",
            "API, notifications et traitement d'actions",
            "configuration pour un workflow concret",
          ],
          link: "Écrire pour des bots",
        },
        {
          tag: "Automatisation",
          title: "Automatisation, scripts, intégrations et outils de service",
          text: "Quand une partie du travail peut quitter la routine manuelle et être gérée par un script, une intégration ou un outil séparé.",
          points: [
            "automatisation des tâches répétitives",
            "connexion de services et systèmes internes",
            "solutions pour un processus individuel",
          ],
          link: "Écrire pour l'automatisation",
        },
        {
          tag: "Game / Support",
          title: "Projets de jeu, plugins, configs et amélioration de bases existantes",
          text: "J'interviens sur des projets de jeu, la logique, les menus, les commandes, les fonctions custom et la partie technique.",
          points: [
            "plugins, configs et logique interne",
            "menus, commandes et systèmes techniques",
            "amélioration et correction d'un projet existant",
          ],
          link: "Écrire pour un projet",
        },
      ],
    },
    proof: {
      eyebrow: "Ce que reçoit le client",
      title: "Un travail clair, sans messages inutiles ni perte de temps.",
      lead:
        "Je travaille directement, j'entre rapidement dans la tâche et je garde une communication claire pendant le projet.",
      tags: ["Contact direct", "Volume clair", "Résultat fonctionnel"],
      cardKicker: "Résultat",
      cardItems: [
        "on comprend ce qui est fait et pourquoi",
        "vous pouvez venir avec une nouvelle tâche ou une base existante",
        "la communication passe par Telegram et email sans longues chaînes",
        "le résultat est construit pour la tâche, pas depuis un template au hasard",
      ],
    },
    process: {
      eyebrow: "Méthode",
      title: "Je comprends d'abord la tâche, je propose ensuite une option, puis je commence la réalisation.",
      lead:
        "Cela évite les décisions au hasard, les corrections inutiles et rend le processus plus clair.",
      steps: [
        {
          number: "01",
          title: "J'analyse la tâche",
          text: "Je regarde ce qui existe déjà, le résultat attendu et le problème principal.",
        },
        {
          number: "02",
          title: "Je forme la solution",
          text: "Je propose une option de travail, le format de réalisation et le meilleur point de départ.",
        },
        {
          number: "03",
          title: "Je réalise et je connecte",
          text: "Je construis l'interface, le code, la logique, l'automatisation ou les connexions nécessaires.",
        },
        {
          number: "04",
          title: "Je vérifie le résultat",
          text: "Je polis les détails, corrige les points faibles et prépare le projet pour une utilisation normale.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Écrivez si vous avez besoin d'un site, d'un bot, d'automatisation ou d'amélioration de projet.",
      lead:
        "Vous pouvez écrire sur Telegram ou par email. Décrivez brièvement la tâche, et je vous orienterai sur le format de travail.",
      list: [
        "Vous pouvez venir avec une idée, un brief ou un projet déjà lancé.",
        "Si vous n'avez besoin que d'un bloc précis ou d'une amélioration, c'est aussi possible.",
        "J'interviens sur les sites, bots, projets de jeu et systèmes techniques.",
      ],
      panelKicker: "Contact",
      telegramLabel: "Telegram",
      emailLabel: "Email",
      note:
        "Plus la tâche est claire au départ, plus vite nous pouvons discuter du volume, des délais et du coût.",
    },
    dock: {
      telegram: "Telegram",
      email: "Email",
    },
    footerRole: "Sites, bots, automatisation",
    footerCopy: "2026 / Tous droits réservés / Telegram @Smerthnix / superkolze08@gmail.com",
  },
};

function mergeTranslation(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      target[key] = value;
      return;
    }

    if (value && typeof value === "object") {
      target[key] = mergeTranslation(target[key] || {}, value);
      return;
    }

    target[key] = value;
  });

  return target;
}

Object.entries(translationRefresh).forEach(([lang, copy]) => {
  translations[lang] = mergeTranslation(translations[lang] || {}, copy);
});

const elements = {
  metaDescription: document.getElementById("meta-description"),
  brandName: document.getElementById("brand-name"),
  brandRole: document.getElementById("brand-role"),
  navSolutions: document.getElementById("nav-solutions"),
  navServices: document.getElementById("nav-services"),
  navProcess: document.getElementById("nav-process"),
  navContact: document.getElementById("nav-contact"),
  headerCta: document.getElementById("header-cta"),
  heroEyebrow: document.getElementById("hero-eyebrow"),
  heroTitle: document.getElementById("hero-title"),
  heroLead: document.getElementById("hero-lead"),
  heroPrimary: document.getElementById("hero-primary"),
  heroSecondary: document.getElementById("hero-secondary"),
  heroTertiary: document.getElementById("hero-tertiary"),
  heroMicrocopy: document.getElementById("hero-microcopy"),
  heroPoints: document.getElementById("hero-points"),
  heroContactLabel: document.getElementById("hero-contact-label"),
  heroTelegramLabel: document.getElementById("hero-telegram-label"),
  heroEmailLabel: document.getElementById("hero-email-label"),
  heroEmailText: document.getElementById("hero-email-text"),
  heroCardKicker: document.getElementById("hero-card-kicker"),
  heroCardTitle: document.getElementById("hero-card-title"),
  heroCardList: document.getElementById("hero-card-list"),
  heroLanguageLabel: document.getElementById("hero-language-label"),
  heroLanguageValue: document.getElementById("hero-language-value"),
  heroProofChip: document.getElementById("hero-proof-chip"),
  heroVisual: document.getElementById("hero-visual"),
  heroVisualMedia: document.getElementById("hero-visual-media"),
  briefEyebrow: document.getElementById("brief-eyebrow"),
  briefTitle: document.getElementById("brief-title"),
  briefLead: document.getElementById("brief-lead"),
  briefButton: document.getElementById("brief-button"),
  solutionsEyebrow: document.getElementById("solutions-eyebrow"),
  solutionsTitle: document.getElementById("solutions-title"),
  solutionsLead: document.getElementById("solutions-lead"),
  solutionsGrid: document.getElementById("solutions-grid"),
  servicesEyebrow: document.getElementById("services-eyebrow"),
  servicesTitle: document.getElementById("services-title"),
  servicesLead: document.getElementById("services-lead"),
  serviceGrid: document.getElementById("service-grid"),
  proofEyebrow: document.getElementById("proof-eyebrow"),
  proofTitle: document.getElementById("proof-title"),
  proofLead: document.getElementById("proof-lead"),
  proofTags: document.getElementById("proof-tags"),
  proofImage: document.getElementById("proof-image"),
  proofCardKicker: document.getElementById("proof-card-kicker"),
  proofMediaList: document.getElementById("proof-media-list"),
  processEyebrow: document.getElementById("process-eyebrow"),
  processTitle: document.getElementById("process-title"),
  processLead: document.getElementById("process-lead"),
  stepsGrid: document.getElementById("steps-grid"),
  contactEyebrow: document.getElementById("contact-eyebrow"),
  contactTitle: document.getElementById("contact-title"),
  contactLead: document.getElementById("contact-lead"),
  contactList: document.getElementById("contact-list"),
  contactImage: document.getElementById("contact-image"),
  contactPanelKicker: document.getElementById("contact-panel-kicker"),
  contactTelegram: document.getElementById("contact-telegram"),
  contactTelegramLabel: document.getElementById("contact-telegram-label"),
  contactEmail: document.getElementById("contact-email"),
  contactEmailLabel: document.getElementById("contact-email-label"),
  contactEmailText: document.getElementById("contact-email-text"),
  contactNote: document.getElementById("contact-note"),
  footerName: document.getElementById("footer-name"),
  footerRole: document.getElementById("footer-role"),
  footerCopy: document.getElementById("footer-copy"),
  dockTelegram: document.getElementById("dock-telegram"),
  dockEmail: document.getElementById("dock-email"),
  langControl: document.getElementById("lang-control"),
  langTrigger: document.getElementById("lang-trigger"),
  langMenu: document.getElementById("lang-menu"),
  langCurrent: document.getElementById("lang-current"),
  langOptions: Array.from(document.querySelectorAll(".lang-option")),
};

let revealObserver;

function createElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (typeof text === "string") {
    element.textContent = text;
  }

  return element;
}

function renderColorText(element, text, terms = []) {
  element.replaceChildren();

  if (!terms.length) {
    element.textContent = text;
    return;
  }

  const lowerText = text.toLowerCase();
  const matches = terms
    .map((term, index) => ({
      index,
      term,
      start: lowerText.indexOf(term.toLowerCase()),
    }))
    .filter((match) => match.start >= 0)
    .sort((left, right) => left.start - right.start);

  if (!matches.length) {
    element.textContent = text;
    return;
  }

  let cursor = 0;

  matches.forEach((match) => {
    const end = match.start + match.term.length;

    if (match.start < cursor) {
      return;
    }

    if (match.start > cursor) {
      element.append(document.createTextNode(text.slice(cursor, match.start)));
    }

    const accent = createElement(
      "span",
      `fx-word fx-word-${match.index % 4}`,
      text.slice(match.start, end)
    );
    element.append(accent);
    cursor = end;
  });

  if (cursor < text.length) {
    element.append(document.createTextNode(text.slice(cursor)));
  }
}

function registerReveals(root = document) {
  const nodes =
    root instanceof Element || root instanceof DocumentFragment
      ? Array.from(root.querySelectorAll(".reveal"))
      : [];

  if (!revealObserver) {
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
  }

  nodes.forEach((node) => revealObserver.observe(node));
}

function renderHeroPoints(items) {
  elements.heroPoints.replaceChildren();

  items.forEach((item, index) => {
    const card = createElement("article", "hero-point reveal");
    card.style.transitionDelay = `${index * 80}ms`;
    card.append(createElement("h3", "", item.title), createElement("p", "", item.text));
    elements.heroPoints.append(card);
  });

  registerReveals(elements.heroPoints);
}

function renderFloatingList(items) {
  elements.heroCardList.replaceChildren();

  items.forEach((item) => {
    const row = createElement("div", "floating-row", item);
    elements.heroCardList.append(row);
  });
}

function renderSolutions(items) {
  elements.solutionsGrid.replaceChildren();

  items.forEach((item, index) => {
    const card = createElement("a", "solutions-card reveal");
    card.href = "#contact";
    card.style.transitionDelay = `${index * 90}ms`;

    const image = document.createElement("img");
    image.src = media.solutions[index % media.solutions.length];
    image.alt = item.title;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      image.remove();
    });

    const body = createElement("div", "solutions-body");
    const list = createElement("ul", "solutions-list");

    item.bullets.forEach((bullet) => {
      list.append(createElement("li", "", bullet));
    });

    body.append(
      createElement("p", "solution-tag", item.tag),
      createElement("h3", "", item.title),
      createElement("p", "", item.text),
      list,
      createElement("span", "solutions-link", item.link)
    );

    card.append(image, body);
    elements.solutionsGrid.append(card);
  });

  registerReveals(elements.solutionsGrid);
}

function renderServices(items) {
  elements.serviceGrid.replaceChildren();

  items.forEach((item, index) => {
    const card = createElement("a", "service-card reveal");
    card.href = "#contact";
    card.style.transitionDelay = `${index * 80}ms`;

    const image = document.createElement("img");
    image.loading = "lazy";
    image.decoding = "async";
    image.src = media.services[index % media.services.length];
    image.alt = item.title;
    image.addEventListener("error", () => {
      card.classList.add("is-image-missing");
      image.remove();
    });

    const body = createElement("div", "service-body");
    const list = createElement("ul", "service-list");

    item.points.forEach((point) => {
      list.append(createElement("li", "", point));
    });

    body.append(
      createElement("p", "service-tag", item.tag),
      createElement("h3", "", item.title),
      createElement("p", "", item.text),
      list,
      createElement("span", "service-link", item.link)
    );

    card.append(image, body);
    elements.serviceGrid.append(card);
  });

  registerReveals(elements.serviceGrid);
}

function renderProofTags(items) {
  elements.proofTags.replaceChildren();

  items.forEach((item) => {
    elements.proofTags.append(createElement("span", "proof-tag", item));
  });
}

function renderProofMediaList(items) {
  elements.proofMediaList.replaceChildren();

  items.forEach((item) => {
    elements.proofMediaList.append(createElement("div", "proof-media-row", item));
  });
}

function renderSteps(items) {
  elements.stepsGrid.replaceChildren();

  items.forEach((item, index) => {
    const card = createElement("article", "step-card reveal");
    card.style.transitionDelay = `${index * 80}ms`;

    card.append(
      createElement("span", "step-number", item.number),
      createElement("h3", "", item.title),
      createElement("p", "", item.text)
    );

    elements.stepsGrid.append(card);
  });

  registerReveals(elements.stepsGrid);
}

function renderContactList(items) {
  elements.contactList.replaceChildren();

  items.forEach((item) => {
    elements.contactList.append(createElement("div", "contact-list-item", item));
  });
}

function updateLangButtons(activeLang) {
  elements.langCurrent.textContent = translations[activeLang].langCode;

  elements.langOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === activeLang);
  });
}

function applyTranslation(lang) {
  const copy = translations[lang] || translations.ru;

  currentLanguage = lang;

  document.documentElement.lang = copy.htmlLang;
  document.title = copy.metaTitle;
  elements.metaDescription.content = copy.metaDescription;
  elements.brandName.textContent = profile.name;
  elements.brandRole.textContent = copy.brandRole;
  elements.navSolutions.textContent = copy.nav.solutions;
  elements.navServices.textContent = copy.nav.services;
  elements.navProcess.textContent = copy.nav.process;
  elements.navContact.textContent = copy.nav.contact;
  elements.headerCta.textContent = copy.headerCta;

  elements.heroEyebrow.textContent = copy.hero.eyebrow;
  renderColorText(elements.heroTitle, copy.hero.title, copy.hero.titleAccent);
  elements.heroLead.textContent = copy.hero.lead;
  elements.heroPrimary.textContent = copy.hero.primary;
  elements.heroPrimary.href = profile.telegramUrl;
  elements.heroSecondary.textContent = copy.hero.secondary;
  elements.heroSecondary.href = profile.emailUrl;
  elements.heroTertiary.textContent = copy.hero.tertiary;
  elements.heroMicrocopy.textContent = copy.hero.microcopy;
  elements.heroContactLabel.textContent = copy.hero.contactLabel;
  elements.heroTelegramLabel.textContent = copy.hero.telegramLabel;
  elements.heroEmailLabel.textContent = copy.hero.emailLabel;
  elements.heroEmailText.textContent = profile.email;
  elements.heroCardKicker.textContent = copy.hero.cardKicker;
  elements.heroCardTitle.textContent = copy.hero.cardTitle;
  elements.heroLanguageLabel.textContent = copy.hero.languageLabel;
  elements.heroLanguageValue.textContent = copy.hero.languageValue;
  elements.heroProofChip.textContent = copy.hero.proofChip;

  elements.briefEyebrow.textContent = copy.brief.eyebrow;
  elements.briefTitle.textContent = copy.brief.title;
  elements.briefLead.textContent = copy.brief.lead;
  elements.briefButton.textContent = copy.brief.button;

  elements.solutionsEyebrow.textContent = copy.solutions.eyebrow;
  elements.solutionsTitle.textContent = copy.solutions.title;
  elements.solutionsLead.textContent = copy.solutions.lead;

  elements.servicesEyebrow.textContent = copy.services.eyebrow;
  elements.servicesTitle.textContent = copy.services.title;
  elements.servicesLead.textContent = copy.services.lead;

  elements.proofEyebrow.textContent = copy.proof.eyebrow;
  elements.proofTitle.textContent = copy.proof.title;
  elements.proofLead.textContent = copy.proof.lead;
  elements.proofCardKicker.textContent = copy.proof.cardKicker;

  elements.processEyebrow.textContent = copy.process.eyebrow;
  elements.processTitle.textContent = copy.process.title;
  elements.processLead.textContent = copy.process.lead;

  elements.contactEyebrow.textContent = copy.contact.eyebrow;
  elements.contactTitle.textContent = copy.contact.title;
  elements.contactLead.textContent = copy.contact.lead;
  elements.contactPanelKicker.textContent = copy.contact.panelKicker;
  elements.contactTelegram.href = profile.telegramUrl;
  elements.contactTelegramLabel.textContent = copy.contact.telegramLabel;
  elements.contactEmail.href = profile.emailUrl;
  elements.contactEmailLabel.textContent = copy.contact.emailLabel;
  elements.contactEmailText.textContent = profile.email;
  elements.contactNote.textContent = copy.contact.note || "";
  elements.contactNote.hidden = !copy.contact.note;

  elements.footerName.textContent = profile.name;
  elements.footerRole.textContent = copy.footerRole;
  elements.footerCopy.textContent = copy.footerCopy;
  elements.dockTelegram.href = profile.telegramUrl;
  elements.dockTelegram.textContent = copy.dock.telegram;
  elements.dockEmail.href = profile.emailUrl;
  elements.dockEmail.textContent = copy.dock.email;

  renderHeroPoints(copy.hero.points);
  renderFloatingList(copy.hero.cardItems);
  renderSolutions(copy.solutions.items);
  renderServices(copy.services.items);
  renderProofTags(copy.proof.tags);
  renderProofMediaList(copy.proof.cardItems);
  renderSteps(copy.process.steps);
  renderContactList(copy.contact.list);
  updateLangButtons(lang);

  try {
    localStorage.setItem("smerthnix-lang", lang);
  } catch {}
}

function closeLanguageMenu() {
  elements.langMenu.hidden = true;
  elements.langControl.classList.remove("is-open");
  elements.langTrigger.setAttribute("aria-expanded", "false");
}

function openLanguageMenu() {
  elements.langMenu.hidden = false;
  elements.langControl.classList.add("is-open");
  elements.langTrigger.setAttribute("aria-expanded", "true");
}

function setupLanguageMenu(currentLang) {
  updateLangButtons(currentLang);

  elements.langTrigger.addEventListener("click", () => {
    if (elements.langMenu.hidden) {
      openLanguageMenu();
    } else {
      closeLanguageMenu();
    }
  });

  elements.langOptions.forEach((option) => {
    option.addEventListener("click", () => {
      applyTranslation(option.dataset.lang);
      closeLanguageMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!elements.langControl.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
    }
  });
}

function setupCursor() {
  const shell = document.getElementById("cursor-shell");
  const interactiveSelector =
    "a, button, .lang-option, .contact-dock-link, .solutions-card, .service-card";
  const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const cursorNodes = shell ? Array.from(shell.querySelectorAll(".cursor-glow, .cursor-ring, .cursor-dot")) : [];

  if (!mediaQuery.matches || !shell) {
    return;
  }

  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    currentX: window.innerWidth / 2,
    currentY: window.innerHeight / 2,
    hover: false,
    pressed: false,
  };

  document.body.classList.add("cursor-enhanced");
  shell.classList.add("is-visible");

  function tick() {
    state.currentX += (state.x - state.currentX) * 0.22;
    state.currentY += (state.y - state.currentY) * 0.22;
    shell.style.setProperty("--cursor-x", `${state.currentX}px`);
    shell.style.setProperty("--cursor-y", `${state.currentY}px`);

    const transform = `translate3d(${state.currentX}px, ${state.currentY}px, 0)`;
    cursorNodes.forEach((node) => {
      node.style.transform = `${transform} translate3d(-50%, -50%, 0)`;
    });

    requestAnimationFrame(tick);
  }

  document.addEventListener("pointermove", (event) => {
    state.x = event.clientX;
    state.y = event.clientY;
    document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${event.clientY}px`);
  });

  document.addEventListener("pointerdown", () => {
    shell.classList.add("is-pressed");
  });

  document.addEventListener("pointerup", () => {
    shell.classList.remove("is-pressed");
  });

  document.addEventListener(
    "pointerover",
    (event) => {
      shell.classList.toggle("is-hover", Boolean(event.target.closest(interactiveSelector)));
    },
    true
  );

  window.addEventListener("blur", () => {
    shell.classList.remove("is-visible");
  });

  window.addEventListener("focus", () => {
    shell.classList.add("is-visible");
  });

  requestAnimationFrame(tick);
}

function setupHeroParallax() {
  const visual = elements.heroVisual;
  const frame = visual?.querySelector(".hero-visual-frame");
  const supportHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!visual || !frame || !supportHover) {
    return;
  }

  visual.addEventListener("pointermove", (event) => {
    const rect = frame.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    frame.style.setProperty("--parallax-x", x.toFixed(3));
    frame.style.setProperty("--parallax-y", y.toFixed(3));
  });

  visual.addEventListener("pointerleave", () => {
    frame.style.setProperty("--parallax-x", "0");
    frame.style.setProperty("--parallax-y", "0");
  });
}

function setupHeroVideo() {
  const videos = Array.from(document.querySelectorAll(".hero-video, .hero-visual-media"));

  if (!videos.length) {
    return;
  }

  videos.forEach((video) => {
    const tryPlay = () => {
      const promise = video.play();

      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    };

    video.muted = true;
    video.setAttribute("muted", "");
    tryPlay();
    video.addEventListener("canplay", tryPlay, { once: true });
  });
}

function detectInitialLanguage() {
  try {
    const stored = localStorage.getItem("smerthnix-lang");

    if (stored && translations[stored]) {
      return stored;
    }
  } catch {}

  const browserLang = (navigator.language || "ru").slice(0, 2).toLowerCase();
  return translations[browserLang] ? browserLang : "ru";
}

const initialLanguage = detectInitialLanguage();
applyTranslation(initialLanguage);
setupLanguageMenu(initialLanguage);
setupCursor();
setupHeroParallax();
setupHeroVideo();
registerReveals(document);
