/* ============================================================
   David Margaryan — Portfolio
   i18n · typing · reveal · counters · filters · form
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n ---------------- */
  var I18N = {
    ru: {
      'meta.title': 'Давид Маргарян — Frontend & Fullstack разработчик',
      'meta.desc': 'Портфолио Давида Маргаряна: разработка сайтов и веб-приложений под ключ, UI/UX-дизайн. Быстро, аккуратно, в срок.',
      roles: ['Frontend-разработчик', 'Fullstack-разработчик', 'UI/UX-дизайнер'],

      'nav.about': 'Обо мне',
      'nav.services': 'Услуги',
      'nav.skills': 'Навыки',
      'nav.projects': 'Проекты',
      'nav.contact': 'Контакты',
      'nav.cta': 'Обсудить проект',

      'hero.badge': 'Открыт для новых проектов',
      'hero.eyebrow': 'Привет, меня зовут',
      'hero.name': 'Давид Маргарян',
      'hero.sub': 'Помогаю бизнесу и стартапам превращать идеи в быстрые, удобные и красивые веб-продукты — от прототипа до запуска.',
      'hero.cta1': 'Обсудить проект',
      'hero.cta2': 'Смотреть работы',
      'hero.scroll': 'Листай вниз',
      'hero.stat1': 'года в разработке',
      'hero.stat2': 'реализованных проектов',
      'hero.stat3': 'направления работы',

      'about.label': '01 · Обо мне',
      'about.title': 'Разработчик, который думает как дизайнер',
      'about.p1': 'Меня зовут Давид. Я занимаюсь веб-разработкой и дизайном интерфейсов: умею не только написать чистый код, но и продумать логику, структуру и внешний вид продукта.',
      'about.p2': 'Для меня хороший сайт — это не просто «красиво». Это скорость загрузки, удобство на телефоне, понятный путь пользователя и дизайн, который работает на цель бизнеса. Поэтому каждый проект я веду от идеи до результата.',
      'about.f1t': 'Удалённо',
      'about.f1d': 'работаю с любым часовым поясом',
      'about.f2t': 'Сроки',
      'about.f2d': 'фиксирую заранее и соблюдаю',
      'about.f3t': 'Связь',
      'about.f3d': 'на связи каждый день, отчёты о прогрессе',
      'about.cta': 'Написать мне',

      'services.label': '02 · Услуги',
      'services.title': 'Чем я могу быть полезен',
      'svc1.title': 'Сайты под ключ',
      'svc1.desc': 'Лендинги, корпоративные сайты и магазины: от структуры и дизайна до публикации в интернете.',
      'svc1.li1': 'Адаптивная вёрстка под все экраны',
      'svc1.li2': 'Анимации и интерактив',
      'svc1.li3': 'SEO-база и быстрая загрузка',
      'svc2.title': 'Веб-приложения',
      'svc2.desc': 'Личные кабинеты, дашборды и SaaS-сервисы: фронтенд, бэкенд и база данных в одних руках.',
      'svc2.li1': 'REST API и интеграции',
      'svc2.li2': 'Авторизация и роли пользователей',
      'svc2.li3': 'База данных и админ-панель',
      'svc3.title': 'UI/UX-дизайн',
      'svc3.desc': 'Дизайн, которым удобно пользоваться и который легко превратить в код.',
      'svc3.li1': 'Прототипы и вайрфреймы в Figma',
      'svc3.li2': 'Дизайн-системы и UI-киты',
      'svc3.li3': 'Редизайн и аудит юзабилити',

      'skills.label': '03 · Навыки',
      'skills.title': 'Мой стек',
      'skills.design': 'Дизайн',
      'skills.proto': 'Прототипирование',
      'skills.ds': 'Дизайн-системы',
      'skills.tools': 'Инструменты',

      'projects.label': '04 · Проекты',
      'projects.title': 'Избранные работы',
      'projects.note': 'Это демо-кейсы: концепты, которые показывают мой подход и качество. Скоро здесь появятся боевые проекты — возможно, ваш.',
      'projects.concept': 'Концепт',
      'projects.more': 'Подробнее',
      'filters.all': 'Все',
      'filters.site': 'Сайты',
      'filters.app': 'Приложения',
      'filters.design': 'UI/UX',

      'p1.kind': 'Интернет-магазин',
      'p1.desc': 'Магазин электроники: каталог с фильтрами, корзина, онлайн-оплата и админ-панель.',
      'p2.kind': 'SaaS-дашборд',
      'p2.desc': 'Аналитика в реальном времени: графики, отчёты, экспорт данных и командный доступ.',
      'p3.kind': 'Лендинг',
      'p3.desc': 'Сайт сети кофеен: сочные анимации, меню, карта и онлайн-бронирование столиков.',
      'p4.kind': 'Веб-приложение',
      'p4.desc': 'Канбан для команд: доски, дедлайны, уведомления и совместная работа в реальном времени.',
      'p5.kind': 'Мобильный UI/UX',
      'p5.desc': 'Дизайн фитнес-приложения: 40+ экранов, дизайн-система и кликабельный прототип.',
      'p6.kind': 'Корпоративный сайт',
      'p6.desc': 'Сайт агентства недвижимости: каталог объектов, умные фильтры и формы заявок.',

      'process.label': '05 · Процесс',
      'process.title': 'Как мы будем работать',
      'st1.t': 'Бриф и оценка',
      'st1.d': 'Обсуждаем задачу и цели, фиксируем объём, сроки и стоимость. Бесплатно.',
      'st2.t': 'Прототип и дизайн',
      'st2.d': 'Собираю прототип в Figma и согласовываю с вами каждый экран до старта кода.',
      'st3.t': 'Разработка',
      'st3.d': 'Пишу чистый код и показываю промежуточный результат каждые 2–3 дня.',
      'st4.t': 'Запуск и поддержка',
      'st4.d': 'Деплой, тесты на всех устройствах, передача исходников и 14 дней правок бесплатно.',

      'contact.label': '06 · Контакты',
      'contact.title': 'Есть идея? Обсудим!',
      'contact.sub': 'Расскажите о проекте — отвечу в течение дня, помогу с оценкой и предложу решение.',
      'contact.or': 'или напишите напрямую',
      'contact.copy': 'Скопировать email',
      'contact.avail': 'Сейчас открыт для заказов',
      'form.name': 'Ваше имя',
      'form.namePh': 'Иван',
      'form.msg': 'О проекте',
      'form.msgPh': 'Коротко о проекте: что нужно, сроки, бюджет…',
      'form.send': 'Отправить',
      'form.hint': 'Кнопка откроет ваш почтовый клиент с готовым письмом.',
      'mail.subject': 'Заявка с сайта-портфолио',
      'mail.name': 'Имя',
      'mail.msg': 'О проекте',
      'toast.fill': 'Пожалуйста, заполните все поля',
      'toast.email': 'Проверьте, правильно ли указан email',
      'toast.copied': 'Email скопирован!',
      'toast.copyFail': 'Не удалось скопировать — выделите вручную',

      'footer.tagline': 'Открыт к интересным проектам и сотрудничеству',
      'footer.rights': 'Все права защищены',
      'footer.top': 'Наверх'
    },

    en: {
      'meta.title': 'David Margaryan — Frontend & Fullstack Developer',
      'meta.desc': 'Portfolio of David Margaryan: websites and web apps built end-to-end, plus UI/UX design. Fast, polished, on time.',
      roles: ['Frontend Developer', 'Fullstack Developer', 'UI/UX Designer'],

      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.cta': 'Start a project',

      'hero.badge': 'Open to new projects',
      'hero.eyebrow': 'Hi, my name is',
      'hero.name': 'David Margaryan',
      'hero.sub': 'I help businesses and startups turn ideas into fast, useful and beautiful web products — from prototype to launch.',
      'hero.cta1': 'Discuss a project',
      'hero.cta2': 'View my work',
      'hero.scroll': 'Scroll down',
      'hero.stat1': 'years of coding',
      'hero.stat2': 'projects completed',
      'hero.stat3': 'areas of expertise',

      'about.label': '01 · About',
      'about.title': 'A developer who thinks like a designer',
      'about.p1': 'My name is David. I build for the web and design interfaces: I can write clean code and also think through the logic, structure and look of a product.',
      'about.p2': 'To me a good website is not just “pretty”. It is loading speed, mobile comfort, a clear user journey and design that serves the business goal. That is why I drive every project from idea to result.',
      'about.f1t': 'Remote',
      'about.f1d': 'comfortable with any timezone',
      'about.f2t': 'Deadlines',
      'about.f2d': 'agreed upfront and respected',
      'about.f3t': 'Communication',
      'about.f3d': 'in touch daily with progress updates',
      'about.cta': 'Get in touch',

      'services.label': '02 · Services',
      'services.title': 'How I can help',
      'svc1.title': 'Websites end-to-end',
      'svc1.desc': 'Landing pages, business sites and online stores: from structure and design to going live.',
      'svc1.li1': 'Responsive on every screen',
      'svc1.li2': 'Animations & interactions',
      'svc1.li3': 'SEO basics & fast loading',
      'svc2.title': 'Web applications',
      'svc2.desc': 'Dashboards, user accounts and SaaS: frontend, backend and database — all in one pair of hands.',
      'svc2.li1': 'REST APIs & integrations',
      'svc2.li2': 'Authentication & user roles',
      'svc2.li3': 'Database & admin panel',
      'svc3.title': 'UI/UX design',
      'svc3.desc': 'Design that is easy to use and easy to turn into code.',
      'svc3.li1': 'Prototypes & wireframes in Figma',
      'svc3.li2': 'Design systems & UI kits',
      'svc3.li3': 'Redesign & usability audit',

      'skills.label': '03 · Skills',
      'skills.title': 'My toolbox',
      'skills.design': 'Design',
      'skills.proto': 'Prototyping',
      'skills.ds': 'Design systems',
      'skills.tools': 'Tools',

      'projects.label': '04 · Projects',
      'projects.title': 'Selected work',
      'projects.note': 'These are concept cases that show my approach and quality. Real client projects are coming soon — yours could be next.',
      'projects.concept': 'Concept',
      'projects.more': 'Case study',
      'filters.all': 'All',
      'filters.site': 'Websites',
      'filters.app': 'Web apps',
      'filters.design': 'UI/UX',

      'p1.kind': 'E-commerce',
      'p1.desc': 'Electronics store: filterable catalog, cart, online payments and an admin panel.',
      'p2.kind': 'SaaS dashboard',
      'p2.desc': 'Real-time analytics: charts, reports, data export and team access.',
      'p3.kind': 'Landing page',
      'p3.desc': 'Coffee chain website: juicy animations, menu, map and online table booking.',
      'p4.kind': 'Web app',
      'p4.desc': 'Team kanban: boards, deadlines, notifications and real-time collaboration.',
      'p5.kind': 'Mobile UI/UX',
      'p5.desc': 'Fitness app design: 40+ screens, a design system and a clickable prototype.',
      'p6.kind': 'Business website',
      'p6.desc': 'Real-estate agency site: property catalog, smart filters and lead forms.',

      'process.label': '05 · Process',
      'process.title': 'How we will work together',
      'st1.t': 'Brief & estimate',
      'st1.d': 'We discuss the task and goals, agree on scope, timeline and price. Free of charge.',
      'st2.t': 'Prototype & design',
      'st2.d': 'I build a Figma prototype and approve every screen with you before any code.',
      'st3.t': 'Development',
      'st3.d': 'I write clean code and show intermediate results every 2–3 days.',
      'st4.t': 'Launch & support',
      'st4.d': 'Deploy, cross-device testing, source handover and 14 days of free tweaks.',

      'contact.label': '06 · Contact',
      'contact.title': 'Got an idea? Let’s talk!',
      'contact.sub': 'Tell me about your project — I will reply within a day with an estimate and a plan.',
      'contact.or': 'or reach me directly',
      'contact.copy': 'Copy email',
      'contact.avail': 'Currently available for work',
      'form.name': 'Your name',
      'form.namePh': 'John',
      'form.msg': 'About the project',
      'form.msgPh': 'A few words about the project: goals, timeline, budget…',
      'form.send': 'Send',
      'form.hint': 'This opens your mail app with a pre-filled message.',
      'mail.subject': 'Project inquiry from portfolio website',
      'mail.name': 'Name',
      'mail.msg': 'About the project',
      'toast.fill': 'Please fill in all the fields',
      'toast.email': 'Please check your email address',
      'toast.copied': 'Email copied!',
      'toast.copyFail': 'Could not copy — please select it manually',

      'footer.tagline': 'Open to exciting projects and collaborations',
      'footer.rights': 'All rights reserved',
      'footer.top': 'Back to top'
    }
  };

  var lang = localStorage.getItem('lang');
  if (lang !== 'ru' && lang !== 'en') {
    lang = (navigator.language || 'ru').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  }

  var langBtn = $('#langBtn');

  function applyLang(next) {
    lang = next;
    try { localStorage.setItem('lang', lang); } catch (e) { /* private mode */ }

    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.title = dict['meta.title'];

    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    startTyping();
  }

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(lang === 'ru' ? 'en' : 'ru');
    });
  }

  /* ---------------- Typing effect ---------------- */
  var typedEl = $('#typed');
  var typeTimer = null;

  function startTyping() {
    if (!typedEl) return;
    clearTimeout(typeTimer);

    var roles = I18N[lang].roles;
    if (prefersReduced) {
      typedEl.textContent = roles[0];
      return;
    }

    var ri = 0;
    var ci = roles[0].length; // start from the prerendered word, erase it first
    var deleting = true;
    typedEl.textContent = roles[0];

    (function tick() {
      var word = roles[ri];
      ci += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, ci);

      var delay = deleting ? 42 : 88;
      if (!deleting && ci === word.length) {
        delay = 1700;
        deleting = true;
      } else if (deleting && ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
        delay = 420;
      }
      typeTimer = setTimeout(tick, delay);
    })();
  }

  /* ---------------- Reveal on scroll ---------------- */
  $$('[data-stagger]').forEach(function (parent) {
    $$('.reveal', parent).forEach(function (el, i) {
      el.style.setProperty('--d', (i * 0.09).toFixed(2) + 's');
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
  var counters = $$('.stat__num');

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

  /* ---------------- Project filters ---------------- */
  var filterBtns = $$('.filter-btn');
  var projects = $$('.project');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');

      var f = btn.getAttribute('data-filter');
      projects.forEach(function (card) {
        var show = f === 'all' || card.getAttribute('data-cat') === f;
        card.classList.toggle('hide', !show);
      });
    });
  });

  /* ---------------- Tilt on project cards ---------------- */
  var fineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (fineHover && !prefersReduced) {
    projects.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
        card.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ---------------- Nav: burger, scroll state, active link ---------------- */
  var nav = $('#navbar');
  var burger = $('#burger');

  function closeMenu() {
    nav.classList.remove('open');
    document.body.classList.remove('lock');
    burger.setAttribute('aria-expanded', 'false');
  }

  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('lock', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('.nav__links a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  var progressBar = $('#progressBar');
  var toTop = $('#toTop');

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    var max = document.documentElement.scrollHeight - window.innerHeight;

    nav.classList.toggle('scrolled', y > 10);
    if (toTop) toTop.classList.toggle('show', y > 600);
    if (progressBar) progressBar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  // Active section highlighting
  var sections = $$('main section[id]');
  var navLinks = $$('.nav__link');

  if ('IntersectionObserver' in window) {
    var activeIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { activeIO.observe(s); });
  }

  /* ---------------- Toast ---------------- */
  var toast = $('#toast');
  var toastTimer = null;

  function showToast(key) {
    if (!toast) return;
    toast.textContent = I18N[lang][key] || key;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
  }

  /* ---------------- Contact form (mailto) ---------------- */
  var EMAIL = 'davidmargaryan200620@gmail.com';
  var form = $('#contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameEl = $('#cName');
      var emailEl = $('#cEmail');
      var msgEl = $('#cMsg');

      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var msg = msgEl.value.trim();

      [nameEl, emailEl, msgEl].forEach(function (el) { el.classList.remove('invalid'); });

      var missing = [];
      if (!name) missing.push(nameEl);
      if (!email) missing.push(emailEl);
      if (!msg) missing.push(msgEl);

      if (missing.length) {
        missing.forEach(function (el) { el.classList.add('invalid'); });
        showToast('toast.fill');
        missing[0].focus();
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        emailEl.classList.add('invalid');
        showToast('toast.email');
        emailEl.focus();
        return;
      }

      var dict = I18N[lang];
      var subject = dict['mail.subject'] + ' — ' + name;
      var body = dict['mail.name'] + ': ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        dict['mail.msg'] + ':\n' + msg;

      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------------- Copy email ---------------- */
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

  /* ---------------- Misc ---------------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------------- Init ---------------- */
  applyLang(lang);
})();
