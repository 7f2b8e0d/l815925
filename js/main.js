/* ============ CK PowerTech — main.js ============ */
(function () {
  'use strict';

  /* ---------- i18n bootstrap ---------- */
  var langList = document.getElementById('langList');
  var langBtn = document.getElementById('langBtn');
  var langPanel = document.getElementById('langPanel');
  var langSearch = document.getElementById('langSearch');

  function buildLangList(filter) {
    var q = (filter || '').toLowerCase();
    langList.innerHTML = '';
    CKI18N.LANGS.forEach(function (l) {
      var code = l[0], name = l[1];
      if (q && name.toLowerCase().indexOf(q) === -1 && code.toLowerCase().indexOf(q) === -1) return;
      var b = document.createElement('button');
      b.className = 'lang-item' + (CKI18N.current === code ? ' active' : '');
      b.setAttribute('data-code', code);
      b.setAttribute('role', 'option');
      b.innerHTML = '<span>' + name + '</span><small>' + code + '</small>';
      b.addEventListener('click', function () {
        CKI18N.setLang(code, true);
        closePanel();
      });
      langList.appendChild(b);
    });
  }

  function openPanel() {
    langPanel.classList.add('open');
    langBtn.setAttribute('aria-expanded', 'true');
    buildLangList('');
    langSearch.value = '';
    langSearch.focus();
  }
  function closePanel() {
    langPanel.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
  }

  langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langPanel.classList.contains('open') ? closePanel() : openPanel();
  });
  langSearch.addEventListener('input', function () { buildLangList(this.value); });
  langPanel.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', closePanel);

  CKI18N.init();

  /* ---------- header scroll state ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', function () {
    mainNav.classList.toggle('open');
  });
  mainNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') mainNav.classList.remove('open');
  });

  /* ---------- product filter tabs ---------- */
  var tabs = document.querySelectorAll('#prodTabs .tab');
  var cards = document.querySelectorAll('#prodGrid .prod-card');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var f = tab.getAttribute('data-filter');
      cards.forEach(function (c) {
        c.classList.toggle('hidden', f !== 'all' && c.getAttribute('data-brand') !== f);
      });
    });
  });

  /* ---------- reveal on scroll ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.style.opacity = '1';
          en.target.style.transform = 'none';
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.why-card,.prod-card,.contact-card,.proc-steps li,.split-text,.split-media,.stat')
      .forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(26px)';
        el.style.transition = 'opacity .7s ease, transform .7s ease';
        io.observe(el);
      });
  }
})();
