/* ============================================================
   David Margaryan — Portfolio (Apple-style)
   i18n · reveal · counters · menu · copy
   ============================================================ */
(function () {
  'use strict';

  var $ = function (s, root) { return (root || document).querySelector(s); };
  var $$ = function (s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); };

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n ---------------- */
  var I18N = {
    ru: {
      'meta.title': 'Давид Маргарян — сайты, веб-приложения, UI/UX',
      'meta.desc': 'Веб-разработчик и дизайнер: сайты под ключ, веб-приложения и UI/UX. От идеи до запуска.',

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

      'fs.label': 'Fullstack',
      'fs.t1': 'Фронтенд и бэкенд.',
      'fs.t2': 'Одни руки.',
      'fs.sub': 'Не нужно собирать команду: я проектирую интерфейс, пишу код и поднимаю сервер. Меньше согласований — быстрее запуск.',
      'fs.s1': 'года в разработке',
      'fs.s2': 'проектов сделано',
      'fs.s3': 'доведено до конца',

      'proj.label': 'Проекты',
      'proj.title': 'Избранные работы.',
      'proj.sub': 'Пока это концепты: они показывают уровень и подход. Место для вашего проекта уже готово.',
      'proj.concept': 'Концепт',
      'p1.kind': 'Интернет-магазин',
      'p1.desc': 'Каталог, корзина, оплата и админ-панель.',
      'p2.kind': 'SaaS-аналитика',
      'p2.desc': 'Графики в реальном времени, отчёты и команды.',
      'p3.kind': 'Лендинг',
      'p3.desc': 'Кофейная сеть: меню, карта, бронь столиков.',
      'p4.kind': 'Командный канбан',
      'p4.desc': 'Доски, дедлайны и совместная работа.',
      'p5.kind': 'Мобильный дизайн',
      'p5.desc': '40+ экранов, дизайн-система, прототип в Figma.',
      'p6.kind': 'Недвижимость',
      'p6.desc': 'Каталог объектов, умные фильтры, заявки.',

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

      'state.title': 'Хороший сайт — это скорость, ясность и деталь, доведённая до конца.',
      'state.sub': 'Поэтому каждый проект я веду сам — от первого эскиза до продакшена.',

      'ct.title': 'Сделаем что-то отличное.',
      'ct.sub': 'Расскажите о задаче — отвечу в течение дня.',
      'ct.btn': 'Написать мне',
      'ct.copy': 'Скопировать email',

      'foot.open': 'Открыт к новым проектам и сотрудничеству.',
      'foot.rights': 'Все права защищены.',

      'toast.copied': 'Email скопирован.',
      'toast.copyFail': 'Не получилось скопировать — выделите адрес вручную.'
    },

    en: {
      'meta.title': 'David Margaryan — Websites, Web Apps, UI/UX',
      'meta.desc': 'Web developer and designer: end-to-end websites, web apps and UI/UX. From idea to launch.',

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

      'fs.label': 'Full stack',
      'fs.t1': 'Front end and back end.',
      'fs.t2': 'One pair of hands.',
      'fs.sub': 'No need to hire a team: I design the interface, write the code and run the server. Fewer handoffs — faster launch.',
      'fs.s1': 'years of coding',
      'fs.s2': 'projects completed',
      'fs.s3': 'delivered to the end',

      'proj.label': 'Projects',
      'proj.title': 'Selected work.',
      'proj.sub': 'These are concepts for now: they show the level and the approach. A spot for your project is ready.',
      'proj.concept': 'Concept',
      'p1.kind': 'E-commerce',
      'p1.desc': 'Catalog, cart, payments and an admin panel.',
      'p2.kind': 'SaaS analytics',
      'p2.desc': 'Real-time charts, reports and teams.',
      'p3.kind': 'Landing page',
      'p3.desc': 'Coffee chain: menu, map, table booking.',
      'p4.kind': 'Team kanban',
      'p4.desc': 'Boards, deadlines and collaboration.',
      'p5.kind': 'Mobile design',
      'p5.desc': '40+ screens, a design system, a Figma prototype.',
      'p6.kind': 'Real estate',
      'p6.desc': 'Property catalog, smart filters, lead forms.',

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

      'state.title': 'A good website is speed, clarity and detail — finished properly.',
      'state.sub': 'That is why I run every project myself — from the first sketch to production.',

      'ct.title': 'Let’s make something great.',
      'ct.sub': 'Tell me about your project — I’ll reply within a day.',
      'ct.btn': 'Email me',
      'ct.copy': 'Copy email',

      'foot.open': 'Open to new projects and collaborations.',
      'foot.rights': 'All rights reserved.',

      'toast.copied': 'Email copied.',
      'toast.copyFail': 'Couldn’t copy — please select the address manually.'
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
    document.title = dict['meta.title'];

    var metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    $$('.lang-toggle').forEach(function (btn) {
      var short = btn.classList.contains('lang-toggle--short');
      if (short) {
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
    nav.classList.toggle('scrolled', y > 8);
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

  /* ---------------- Misc ---------------- */
  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------------- Init ---------------- */
  applyLang(lang);
})();
