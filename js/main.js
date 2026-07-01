/* ============================================================
   David Margaryan — Portfolio (Apple-style, multi-page)
   i18n · reveal · counters · menu · photo fallback · parallax
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n ---------------- */
  var I18N = {
    ru: {
      'meta.title.home': 'Давид Маргарян — сайты, веб-приложения, UI/UX',
      'meta.desc.home': 'Веб-разработчик и дизайнер: сайты под ключ, веб-приложения и UI/UX. От идеи до запуска.',
      'meta.title.about': 'Обо мне — Давид Маргарян',
      'meta.desc.about': 'Давид Маргарян — веб-разработчик и дизайнер. Один человек — весь цикл: дизайн, код, запуск.',
      'meta.title.projects': 'Проекты — Давид Маргарян',
      'meta.desc.projects': 'Работы Давида Маргаряна: интернет-магазины, дашборды, лендинги и мобильный дизайн.',
      'meta.title.contact': 'Контакты — Давид Маргарян',
      'meta.desc.contact': 'Связаться с Давидом Маргаряном: обсудить проект, получить оценку и сроки. Ответ в течение дня.',
      'meta.title.404': 'Страница не найдена — Давид Маргарян',

      'nav.about': 'Обо мне',
      'nav.services': 'Услуги',
      'nav.projects': 'Проекты',
      'nav.process': 'Подход',
      'nav.contact': 'Контакты',
      'nav.cta': 'Связаться',

      'hero.eyebrow': 'Давид Маргарян · Веб-разработчик и дизайнер',
      'hero.title': 'Сайты, которые просто работают.',
      'hero.sub': 'Frontend. Fullstack. UI/UX. Один человек — весь цикл: от идеи и дизайна до запуска.',
      'hero.cta1': 'Обсудить проект',
      'hero.cta2': 'Смотреть работы',

      'svc.label': 'Услуги',
      'svc.title': 'Что я делаю.',
      'svc1.kind': 'Сайты',
      'svc1.title': 'Сайты под ключ.',
      'svc1.desc': 'Лендинги, корпоративные сайты и магазины — быстрые, аккуратные, продающие.',
      'svc2.kind': 'Приложения',
      'svc2.title': 'Веб-приложения.',
      'svc2.desc': 'Личные кабинеты, дашборды и SaaS — фронтенд, бэкенд и база данных.',
      'svc3.kind': 'Дизайн',
      'svc3.title': 'UI/UX-дизайн.',
      'svc3.desc': 'Прототипы и дизайн-системы в Figma, которые удобно использовать и легко собрать.',
      'ui.more': 'Подробнее',
      'ui.allProjects': 'Все проекты',
      'ui.aboutMore': 'Больше обо мне',
      'ui.photoSoon': 'Фото скоро здесь',

      'fs.label': 'Fullstack',
      'fs.t1': 'Фронтенд и бэкенд.',
      'fs.t2': 'Одни руки.',
      'fs.sub': 'Не нужно собирать команду: я проектирую интерфейс, пишу код и поднимаю сервер. Меньше согласований — быстрее запуск.',
      'fs.s1': 'года в разработке',
      'fs.s2': 'проектов сделано',
      'fs.s3': 'доведено до конца',

      'projHome.label': 'Проекты',
      'projHome.title': 'Избранное.',
      'proj.sub': 'Пока это концепты: они показывают уровень и подход. Место для вашего проекта уже готово.',
      'proj.concept': 'Концепт',

      'p1.kind': 'Интернет-магазин',
      'p1.desc': 'Каталог, корзина, оплата и админ-панель.',
      'p1.li1': 'Каталог с фильтрами и поиском',
      'p1.li2': 'Корзина и онлайн-оплата (Stripe)',
      'p1.li3': 'Админ-панель для товаров и заказов',
      'p2.kind': 'SaaS-аналитика',
      'p2.desc': 'Графики в реальном времени, отчёты и команды.',
      'p2.li1': 'Живые графики и метрики',
      'p2.li2': 'Отчёты и экспорт в CSV',
      'p2.li3': 'Роли и командный доступ',
      'p3.kind': 'Лендинг',
      'p3.desc': 'Кофейная сеть: меню, карта, бронь столиков.',
      'p3.li1': 'Анимации появления при скролле',
      'p3.li2': 'Интерактивное меню и карта',
      'p3.li3': 'Форма брони столика',
      'p4.kind': 'Командный канбан',
      'p4.desc': 'Доски, дедлайны и совместная работа.',
      'p4.li1': 'Доски и колонки с drag-and-drop',
      'p4.li2': 'Дедлайны и уведомления',
      'p4.li3': 'Совместная работа в реальном времени',
      'p5.kind': 'Мобильный дизайн',
      'p5.desc': '40+ экранов, дизайн-система, прототип в Figma.',
      'p5.li1': '40+ экранов под iOS',
      'p5.li2': 'Дизайн-система и UI-кит',
      'p5.li3': 'Кликабельный прототип в Figma',
      'p6.kind': 'Недвижимость',
      'p6.desc': 'Каталог объектов, умные фильтры, заявки.',
      'p6.li1': 'Каталог с умными фильтрами',
      'p6.li2': 'Карта объектов (Maps API)',
      'p6.li3': 'Формы заявок с валидацией',
      'p7.kind': 'Сайт-портфолио',
      'p7.desc': 'Минималистичный сайт фотографа: галерея, альбомы и приём заявок на съёмку.',
      'p7.li1': 'Masonry-галерея с лайтбоксом',
      'p7.li2': 'Альбомы и фильтры по жанрам',
      'p7.li3': 'Форма бронирования съёмки',
      'p8.kind': 'CRM-система',
      'p8.desc': 'Панель для отдела продаж: сделки, клиенты и отчёты в одном окне.',
      'p8.li1': 'Канбан сделок и статусы',
      'p8.li2': 'Карточки клиентов с историей',
      'p8.li3': 'Отчёты и график выручки',
      'p9.kind': 'Дизайн приложения',
      'p9.desc': 'Музыкальный плеер: тёмная тема, живые обложки и управление жестами.',
      'p9.li1': '30+ экранов в тёмной теме',
      'p9.li2': 'Анимации обложек и жесты',
      'p9.li3': 'Прототип с микровзаимодействиями',

      'pr.label': 'Процесс',
      'pr.title': 'Как идёт работа.',
      'pr1.t': 'Бриф',
      'pr1.d': 'Обсуждаем задачу, фиксируем объём, сроки и цену. Бесплатно.',
      'pr2.t': 'Дизайн',
      'pr2.d': 'Прототип в Figma — согласовываем каждый экран до кода.',
      'pr3.t': 'Разработка',
      'pr3.d': 'Чистый код и промежуточные демо каждые 2–3 дня.',
      'pr4.t': 'Запуск',
      'pr4.d': 'Деплой, тесты, исходники и 14 дней правок бесплатно.',

      'teaser.label': 'Кто за этим стоит',
      'teaser.title': 'За каждым пикселем — один человек.',
      'teaser.p': 'Меня зовут Давид. Я не агентство и не конструктор: каждый проект делаю сам — поэтому отвечаю за результат лично и довожу детали до конца.',
      'teaser.duck': 'Арт-директор одобрил',

      'cta.title': 'Есть задача? Обсудим.',
      'cta.proj': 'Здесь не хватает вашего проекта.',
      'cta.sub': 'Бриф и оценка — бесплатно. Отвечаю в течение дня.',

      'ab.eyebrow': 'Обо мне',
      'ab.title': 'Привет, я Давид.',
      'ab.sub': 'Веб-разработчик и дизайнер. Делаю сайты, которые приятно открывать — и неловко закрывать.',
      'ab.duck': 'Арт-директор одобрил',
      'ab.f1t': 'Удалённо',
      'ab.f1d': 'работаю с любым часовым поясом',
      'ab.f2t': 'Сроки',
      'ab.f2d': 'фиксирую заранее и соблюдаю',
      'ab.f3t': 'Связь',
      'ab.f3d': 'на связи каждый день, с отчётами',
      'ab.bioLabel': 'Коротко',
      'ab.bioTitle': 'О главном.',
      'ab.p1': 'Я пришёл в веб с двух сторон сразу: со стороны кода и со стороны дизайна. Поэтому не бывает ситуации «дизайнер нарисовал — разработчик не смог»: я сам рисую и сам собираю, без потерь по дороге.',
      'ab.p2': 'Для меня хороший сайт — это не «красивая картинка», а продукт: он быстро открывается, понятен с первого экрана и ведёт посетителя к цели. Я одинаково серьёзно отношусь к пикселям, миллисекундам и дедлайнам.',

      'sk.label': 'Стек',
      'sk.title': 'Чем я работаю.',
      'sk.design': 'Дизайн',
      'sk.proto': 'Прототипирование',
      'sk.ds': 'Дизайн-системы',
      'sk.tools': 'Инструменты',

      'state.title': 'Хороший сайт — это скорость, ясность и деталь, доведённая до конца.',
      'state.sub': 'Поэтому каждый проект я веду сам — от первого эскиза до продакшена.',

      'pj.label': 'Проекты',
      'pj.title': 'Работы.',

      'ct.title': 'Сделаем что-то отличное.',
      'ct.sub': 'Расскажите о задаче — отвечу в течение дня.',
      'ct.btn': 'Написать мне',
      'ct.copy': 'Скопировать email',
      'ct.avail': 'Сейчас открыт для новых заказов',

      'hint.label': 'Подсказка',
      'hint.title': 'Что написать в письме.',
      'hint1.t': 'Задача',
      'hint1.d': 'Что нужно сделать и зачем: сайт, приложение, дизайн.',
      'hint2.t': 'Ориентиры',
      'hint2.d': 'Примеры, которые нравятся, — или просто «сделай как чувствуешь».',
      'hint3.t': 'Сроки и бюджет',
      'hint3.d': 'Хотя бы примерно — так я сразу предложу реалистичный план.',

      'faq.title': 'Частые вопросы.',
      'faq.q1': 'Сколько стоит сайт?',
      'faq.a1': 'Зависит от объёма: лендинг, корпоративный сайт и веб-приложение — это разные задачи. После короткого брифа дам точную смету — бесплатно и без обязательств.',
      'faq.q2': 'Какие сроки?',
      'faq.a2': 'Лендинг — от одной недели, корпоративный сайт — две-три недели, веб-приложение — от месяца. Сроки фиксируем до старта, и я их соблюдаю.',
      'faq.q3': 'Как проходит оплата?',
      'faq.a3': 'Поэтапно: часть до старта, остальное — после сдачи. Так безопасно для обеих сторон.',
      'faq.q4': 'Что нужно от меня?',
      'faq.a4': 'Описание задачи и материалы, если они есть: тексты, логотип, примеры. Всё остальное — структуру, дизайн, тексты-заглушки — беру на себя.',
      'faq.q5': 'Будут ли правки после запуска?',
      'faq.a5': 'Да: 14 дней правок после сдачи — бесплатно. Дальше — поддержка по договорённости.',

      'nf.title': 'Страница не найдена.',
      'nf.sub': 'Такой страницы нет — зато есть много другого.',
      'nf.btn': 'На главную',

      'foot.open': 'Открыт к новым проектам и сотрудничеству.',
      'foot.made': 'Сайт сделан вручную — без шаблонов и конструкторов.',
      'foot.rights': 'Все права защищены.',

      'toast.copied': 'Email скопирован.',
      'toast.copyFail': 'Не получилось скопировать — выделите адрес вручную.',

      'spot.ph': 'Поиск по сайту…',
      'spot.empty': 'Ничего не нашлось',
      'spot.home': 'Главная',
      'spot.page': 'Страница',
      'spot.section': 'Раздел',
      'duck.toast': 'Кря! Одобрено. 🦆'
    },

    en: {
      'meta.title.home': 'David Margaryan — Websites, Web Apps, UI/UX',
      'meta.desc.home': 'Web developer and designer: end-to-end websites, web apps and UI/UX. From idea to launch.',
      'meta.title.about': 'About — David Margaryan',
      'meta.desc.about': 'David Margaryan — web developer and designer. One person, the whole cycle: design, code, launch.',
      'meta.title.projects': 'Projects — David Margaryan',
      'meta.desc.projects': 'Work by David Margaryan: e-commerce, dashboards, landing pages and mobile design.',
      'meta.title.contact': 'Contact — David Margaryan',
      'meta.desc.contact': 'Get in touch with David Margaryan: discuss a project, get an estimate and timeline. Reply within a day.',
      'meta.title.404': 'Page not found — David Margaryan',

      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.process': 'Approach',
      'nav.contact': 'Contact',
      'nav.cta': 'Get in touch',

      'hero.eyebrow': 'David Margaryan · Web developer & designer',
      'hero.title': 'Websites that just work.',
      'hero.sub': 'Front end. Full stack. UI/UX. One person — the whole cycle: from idea and design to launch.',
      'hero.cta1': 'Discuss a project',
      'hero.cta2': 'View my work',

      'svc.label': 'Services',
      'svc.title': 'What I do.',
      'svc1.kind': 'Websites',
      'svc1.title': 'Websites end-to-end.',
      'svc1.desc': 'Landing pages, business sites and stores — fast, polished and built to sell.',
      'svc2.kind': 'Apps',
      'svc2.title': 'Web applications.',
      'svc2.desc': 'Dashboards, accounts and SaaS — front end, back end and database.',
      'svc3.kind': 'Design',
      'svc3.title': 'UI/UX design.',
      'svc3.desc': 'Figma prototypes and design systems that are easy to use and easy to build.',
      'ui.more': 'Learn more',
      'ui.allProjects': 'All projects',
      'ui.aboutMore': 'More about me',
      'ui.photoSoon': 'Photo coming soon',

      'fs.label': 'Full stack',
      'fs.t1': 'Front end and back end.',
      'fs.t2': 'One pair of hands.',
      'fs.sub': 'No need to hire a team: I design the interface, write the code and run the server. Fewer handoffs — faster launch.',
      'fs.s1': 'years of coding',
      'fs.s2': 'projects completed',
      'fs.s3': 'delivered to the end',

      'projHome.label': 'Projects',
      'projHome.title': 'Highlights.',
      'proj.sub': 'These are concepts for now: they show the level and the approach. A spot for your project is ready.',
      'proj.concept': 'Concept',

      'p1.kind': 'E-commerce',
      'p1.desc': 'Catalog, cart, payments and an admin panel.',
      'p1.li1': 'Catalog with filters and search',
      'p1.li2': 'Cart and online payments (Stripe)',
      'p1.li3': 'Admin panel for products and orders',
      'p2.kind': 'SaaS analytics',
      'p2.desc': 'Real-time charts, reports and teams.',
      'p2.li1': 'Live charts and metrics',
      'p2.li2': 'Reports and CSV export',
      'p2.li3': 'Roles and team access',
      'p3.kind': 'Landing page',
      'p3.desc': 'Coffee chain: menu, map, table booking.',
      'p3.li1': 'Scroll-triggered animations',
      'p3.li2': 'Interactive menu and map',
      'p3.li3': 'Table booking form',
      'p4.kind': 'Team kanban',
      'p4.desc': 'Boards, deadlines and collaboration.',
      'p4.li1': 'Boards and drag-and-drop columns',
      'p4.li2': 'Deadlines and notifications',
      'p4.li3': 'Real-time collaboration',
      'p5.kind': 'Mobile design',
      'p5.desc': '40+ screens, a design system, a Figma prototype.',
      'p5.li1': '40+ iOS screens',
      'p5.li2': 'Design system and UI kit',
      'p5.li3': 'Clickable Figma prototype',
      'p6.kind': 'Real estate',
      'p6.desc': 'Property catalog, smart filters, lead forms.',
      'p6.li1': 'Catalog with smart filters',
      'p6.li2': 'Property map (Maps API)',
      'p6.li3': 'Lead forms with validation',
      'p7.kind': 'Portfolio website',
      'p7.desc': 'Minimal photographer site: gallery, albums and shoot booking.',
      'p7.li1': 'Masonry gallery with a lightbox',
      'p7.li2': 'Albums and genre filters',
      'p7.li3': 'Shoot booking form',
      'p8.kind': 'CRM system',
      'p8.desc': 'Sales team panel: deals, clients and reports in one place.',
      'p8.li1': 'Deal kanban and stages',
      'p8.li2': 'Client cards with history',
      'p8.li3': 'Reports and a revenue chart',
      'p9.kind': 'App design',
      'p9.desc': 'Music player: dark theme, living artwork and gesture controls.',
      'p9.li1': '30+ dark-theme screens',
      'p9.li2': 'Artwork animations and gestures',
      'p9.li3': 'Prototype with micro-interactions',

      'pr.label': 'Process',
      'pr.title': 'How the work goes.',
      'pr1.t': 'Brief',
      'pr1.d': 'We discuss the task and agree on scope, timeline and price. Free.',
      'pr2.t': 'Design',
      'pr2.d': 'A Figma prototype — every screen approved before any code.',
      'pr3.t': 'Build',
      'pr3.d': 'Clean code and interim demos every 2–3 days.',
      'pr4.t': 'Launch',
      'pr4.d': 'Deploy, testing, source handover and 14 days of free tweaks.',

      'teaser.label': 'Who is behind this',
      'teaser.title': 'One person behind every pixel.',
      'teaser.p': 'My name is David. I am not an agency and not a site builder: I craft every project myself — so I answer for the result personally and finish every detail.',
      'teaser.duck': 'Approved by the art director',

      'cta.title': 'Got a task? Let’s talk.',
      'cta.proj': 'Your project is missing here.',
      'cta.sub': 'Brief and estimate are free. I reply within a day.',

      'ab.eyebrow': 'About',
      'ab.title': 'Hi, I’m David.',
      'ab.sub': 'Web developer and designer. I make websites that are a pleasure to open — and hard to close.',
      'ab.duck': 'Approved by the art director',
      'ab.f1t': 'Remote',
      'ab.f1d': 'comfortable with any timezone',
      'ab.f2t': 'Deadlines',
      'ab.f2d': 'agreed upfront and respected',
      'ab.f3t': 'Communication',
      'ab.f3d': 'in touch daily, with updates',
      'ab.bioLabel': 'In short',
      'ab.bioTitle': 'What matters.',
      'ab.p1': 'I came to the web from two sides at once: code and design. So there is no “the designer drew it — the developer couldn’t build it”: I draw it and I build it, with nothing lost along the way.',
      'ab.p2': 'To me a good website is not a pretty picture — it is a product: it opens fast, makes sense from the first screen and leads visitors to the goal. I take pixels, milliseconds and deadlines equally seriously.',

      'sk.label': 'Stack',
      'sk.title': 'What I work with.',
      'sk.design': 'Design',
      'sk.proto': 'Prototyping',
      'sk.ds': 'Design systems',
      'sk.tools': 'Tools',

      'state.title': 'A good website is speed, clarity and detail — finished properly.',
      'state.sub': 'That is why I run every project myself — from the first sketch to production.',

      'pj.label': 'Projects',
      'pj.title': 'Work.',

      'ct.title': 'Let’s make something great.',
      'ct.sub': 'Tell me about your project — I’ll reply within a day.',
      'ct.btn': 'Email me',
      'ct.copy': 'Copy email',
      'ct.avail': 'Currently open for new projects',

      'hint.label': 'Hint',
      'hint.title': 'What to put in the email.',
      'hint1.t': 'The task',
      'hint1.d': 'What you need and why: a website, an app, a design.',
      'hint2.t': 'References',
      'hint2.d': 'Examples you like — or just say “do it as you feel”.',
      'hint3.t': 'Timeline & budget',
      'hint3.d': 'Even roughly — so I can suggest a realistic plan right away.',

      'faq.title': 'Common questions.',
      'faq.q1': 'How much does a website cost?',
      'faq.a1': 'It depends on the scope: a landing page, a business site and a web app are different jobs. After a short brief I’ll give you an exact quote — free, no strings attached.',
      'faq.q2': 'How long does it take?',
      'faq.a2': 'A landing page — from one week, a business site — two to three weeks, a web app — from a month. We lock the timeline before the start, and I keep it.',
      'faq.q3': 'How does payment work?',
      'faq.a3': 'In stages: a part upfront, the rest after delivery. Safe for both sides.',
      'faq.q4': 'What do you need from me?',
      'faq.a4': 'A description of the task and any materials you have: copy, logo, references. Everything else — structure, design, placeholder copy — is on me.',
      'faq.q5': 'Any tweaks after launch?',
      'faq.a5': 'Yes: 14 days of free tweaks after delivery. After that — support by agreement.',

      'nf.title': 'Page not found.',
      'nf.sub': 'This page doesn’t exist — but there’s plenty that does.',
      'nf.btn': 'Go home',

      'foot.open': 'Open to new projects and collaborations.',
      'foot.made': 'Hand-built — no templates, no site builders.',
      'foot.rights': 'All rights reserved.',

      'toast.copied': 'Email copied.',
      'toast.copyFail': 'Couldn’t copy — please select the address manually.',

      'spot.ph': 'Search the site…',
      'spot.empty': 'Nothing found',
      'spot.home': 'Home',
      'spot.page': 'Page',
      'spot.section': 'Section',
      'duck.toast': 'Quack! Approved. 🦆'
    }
  };

  var lang = localStorage.getItem('lang');
  if (lang !== 'ru' && lang !== 'en') {
    lang = (navigator.language || 'ru').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  }

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }

    var dict = I18N[lang];
    document.documentElement.lang = lang;

    var titleKey = document.body.getAttribute('data-title-key');
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    var descKey = document.body.getAttribute('data-desc-key');
    var metaDesc = $('meta[name="description"]');
    if (descKey && dict[descKey] && metaDesc) metaDesc.setAttribute('content', dict[descKey]);

    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    $$('.lang-toggle').forEach(function (btn) {
      if (btn.classList.contains('lang-toggle--short')) {
        btn.textContent = lang === 'ru' ? 'EN' : 'RU';
      } else {
        btn.textContent = lang === 'ru' ? 'English' : 'Русский';
      }
    });
  }

  $$('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(lang === 'ru' ? 'en' : 'ru');
    });
  });

  /* ---------------- Reveal on scroll ---------------- */
  $$('[data-stagger]').forEach(function (parent) {
    $$('.reveal', parent).forEach(function (el, i) {
      el.style.setProperty('--d', (i * 0.08).toFixed(2) + 's');
    });
  });

  var revealEls = $$('.reveal');
  if ('IntersectionObserver' in window && !prefersReduced) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------------- Counters ---------------- */
  var counters = $$('.spec__num');

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (prefersReduced) {
      el.textContent = target + suffix;
      return;
    }
    var dur = 1300;
    var t0 = null;
    function frame(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window) {
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { countIO.observe(el); });
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------------- Photo fallback ---------------- */
  $$('.js-photo').forEach(function (img) {
    function fallback() {
      var card = img.closest('.photo-card');
      if (card) card.classList.add('no-photo');
    }
    if (img.complete && img.naturalWidth === 0) {
      fallback();
    } else {
      img.addEventListener('error', fallback);
    }
  });

  /* ---------------- Hero shot parallax ---------------- */
  var heroWin = $('#heroWin');
  if (heroWin && !prefersReduced) {
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || 0;
        heroWin.style.transform = 'translateY(' + Math.min(y * 0.07, 64).toFixed(1) + 'px)';
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------------- Nav & mobile menu ---------------- */
  var nav = $('#navbar');
  var burger = $('#burger');

  function closeMenu() {
    document.body.classList.remove('menu-open', 'lock');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }

  if (burger) {
    burger.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      document.body.classList.toggle('lock', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('.menu__link').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle('scrolled', y > 8);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Toast & copy email ---------------- */
  var EMAIL = 'davidmargaryan200620@gmail.com';
  var toast = $('#toast');
  var toastTimer = null;

  function showToast(key) {
    if (!toast) return;
    toast.textContent = I18N[lang][key] || key;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
  }

  var copyBtn = $('#copyEmail');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(EMAIL).then(
          function () { showToast('toast.copied'); },
          function () { showToast('toast.copyFail'); }
        );
      } else {
        var tmp = document.createElement('textarea');
        tmp.value = EMAIL;
        tmp.style.position = 'fixed';
        tmp.style.opacity = '0';
        document.body.appendChild(tmp);
        tmp.select();
        try {
          document.execCommand('copy');
          showToast('toast.copied');
        } catch (err) {
          showToast('toast.copyFail');
        }
        document.body.removeChild(tmp);
      }
    });
  }

  /* ---------------- Theme toggle ---------------- */
  var themeMeta = $('meta[name="theme-color"]');

  function syncThemeMeta() {
    if (themeMeta) {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeMeta.setAttribute('content', dark ? '#000000' : '#ffffff');
    }
  }

  syncThemeMeta();

  $$('.js-theme').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
      syncThemeMeta();
    });
  });

  /* ---------------- Spotlight search (Cmd/Ctrl+K) ---------------- */
  var spot = document.createElement('div');
  spot.className = 'spot';
  spot.innerHTML =
    '<div class="spot__panel" role="dialog" aria-modal="true" aria-label="Поиск">' +
      '<div class="spot__head">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
        '<input class="spot__input" type="text" autocomplete="off" spellcheck="false">' +
        '<span class="spot__kbd">esc</span>' +
      '</div>' +
      '<div class="spot__list"></div>' +
    '</div>';
  document.body.appendChild(spot);

  var spotInput = $('.spot__input', spot);
  var spotList = $('.spot__list', spot);
  var spotItems = [];
  var spotSel = 0;

  function spotIndex() {
    var d = I18N[lang];
    var items = [
      { label: d['spot.home'], kind: d['spot.page'], href: 'index.html' },
      { label: d['nav.about'], kind: d['spot.page'], href: 'about.html' },
      { label: d['nav.projects'], kind: d['spot.page'], href: 'projects.html' },
      { label: d['nav.contact'], kind: d['spot.page'], href: 'contact.html' },
      { label: d['nav.services'], kind: d['spot.section'], href: 'index.html#services' },
      { label: d['nav.process'], kind: d['spot.section'], href: 'index.html#process' },
      { label: 'FAQ', kind: d['spot.section'], href: 'contact.html' }
    ];
    [
      ['Aurora Store', 'p1.kind'], ['Pulse Analytics', 'p2.kind'], ['Brew & Beans', 'p3.kind'],
      ['TaskFlow', 'p4.kind'], ['Fitly', 'p5.kind'], ['Estate One', 'p6.kind'],
      ['Lumo', 'p7.kind'], ['Orbit CRM', 'p8.kind'], ['Wave', 'p9.kind']
    ].forEach(function (p) {
      items.push({ label: p[0], kind: d[p[1]], href: 'projects.html' });
    });
    return items;
  }

  function spotRender(q) {
    var all = spotIndex();
    q = (q || '').trim().toLowerCase();
    spotItems = q ? all.filter(function (it) {
      return (it.label + ' ' + it.kind).toLowerCase().indexOf(q) !== -1;
    }) : all;
    if (spotSel >= spotItems.length) spotSel = 0;
    if (!spotItems.length) {
      spotList.innerHTML = '<div class="spot__empty">' + I18N[lang]['spot.empty'] + '</div>';
      return;
    }
    spotList.innerHTML = spotItems.map(function (it, i) {
      return '<div class="spot__item' + (i === spotSel ? ' sel' : '') + '" data-href="' + it.href + '">' +
        '<span>' + it.label + '</span><span class="spot__item-kind">' + it.kind + '</span></div>';
    }).join('');
    var sel = $('.spot__item.sel', spotList);
    if (sel && sel.scrollIntoView) sel.scrollIntoView({ block: 'nearest' });
  }

  function spotOpen() {
    spotSel = 0;
    spotInput.value = '';
    spotInput.setAttribute('placeholder', I18N[lang]['spot.ph']);
    spot.classList.add('open');
    document.body.classList.add('lock');
    spotRender('');
    setTimeout(function () { spotInput.focus(); }, 30);
  }

  function spotClose() {
    spot.classList.remove('open');
    document.body.classList.remove('lock');
  }

  $$('.js-spot-open').forEach(function (btn) {
    btn.addEventListener('click', spotOpen);
  });

  spot.addEventListener('click', function (e) {
    if (e.target === spot) spotClose();
  });

  spotList.addEventListener('click', function (e) {
    var item = e.target.closest ? e.target.closest('.spot__item') : null;
    if (item) window.location.href = item.getAttribute('data-href');
  });

  spotInput.addEventListener('input', function () {
    spotSel = 0;
    spotRender(spotInput.value);
  });

  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (spot.classList.contains('open')) { spotClose(); } else { spotOpen(); }
      return;
    }
    if (!spot.classList.contains('open')) return;
    if (e.key === 'Escape') {
      spotClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      spotSel = Math.min(spotSel + 1, spotItems.length - 1);
      spotRender(spotInput.value);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      spotSel = Math.max(spotSel - 1, 0);
      spotRender(spotInput.value);
    } else if (e.key === 'Enter') {
      if (spotItems[spotSel]) window.location.href = spotItems[spotSel].href;
    }
  });

  /* ---------------- Duck easter egg ---------------- */
  var duckBusy = false;
  $$('.photo-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      showToast('duck.toast');
      if (duckBusy || prefersReduced) return;
      duckBusy = true;
      var duck = document.createElement('div');
      duck.className = 'duck-run';
      duck.textContent = '🦆';
      duck.setAttribute('aria-hidden', 'true');
      document.body.appendChild(duck);
      duck.addEventListener('animationend', function () {
        duck.remove();
        duckBusy = false;
      });
    });
  });

  /* ---------------- Misc ---------------- */
  $$('.js-year').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------------- Init ---------------- */
  applyLang(lang);
})();
