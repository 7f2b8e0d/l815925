/* ============ CK PowerTech — i18n core ============ */
(function () {
  'use strict';

  /* Supported languages: code, native name, rtl */
  var LANGS = [
    ['en', 'English'], ['zh-CN', '简体中文'], ['zh-TW', '繁體中文'], ['ja', '日本語'], ['ko', '한국어'],
    ['es', 'Español'], ['fr', 'Français'], ['de', 'Deutsch'], ['ru', 'Русский'], ['ar', 'العربية', 1],
    ['pt', 'Português'], ['it', 'Italiano'], ['tr', 'Türkçe'], ['nl', 'Nederlands'], ['pl', 'Polski'],
    ['uk', 'Українська'], ['ro', 'Română'], ['el', 'Ελληνικά'], ['cs', 'Čeština'], ['hu', 'Magyar'],
    ['sv', 'Svenska'], ['da', 'Dansk'], ['fi', 'Suomi'], ['no', 'Norsk'], ['sk', 'Slovenčina'],
    ['bg', 'Български'], ['hr', 'Hrvatski'], ['sr', 'Srpski'], ['lt', 'Lietuvių'], ['lv', 'Latviešu'],
    ['et', 'Eesti'], ['sl', 'Slovenščina'], ['id', 'Bahasa Indonesia'], ['ms', 'Bahasa Melayu'], ['vi', 'Tiếng Việt'],
    ['th', 'ไทย'], ['hi', 'हिन्दी'], ['bn', 'বাংলা'], ['ur', 'اردو', 1], ['fa', 'فارسی', 1],
    ['he', 'עברית', 1], ['sw', 'Kiswahili'], ['am', 'አማርኛ'], ['az', 'Azərbaycanca'], ['kk', 'Қазақша'],
    ['uz', 'Oʻzbekcha'], ['ka', 'ქართული'], ['hy', 'Հայերեն'], ['mn', 'Монгол'], ['my', 'မြန်မာ'],
    ['km', 'ខ្មែរ'], ['ne', 'नेपाली'], ['si', 'සිංහල'], ['ta', 'தமிழ்'], ['tl', 'Filipino']
  ];

  /* Ordered key list — every language pack array must follow this exact order */
  var KEYS = [
    'nav_home', 'nav_products', 'nav_process', 'nav_factory', 'nav_shipping', 'nav_contact',
    'hero_badge', 'hero_title1', 'hero_title2', 'hero_sub', 'hero_cta1', 'hero_cta2', 'hero_brands',
    'stat_years', 'stat_engines', 'stat_countries', 'stat_tested',
    'why_kicker', 'why_title', 'why_sub',
    'why1_t', 'why1_d', 'why2_t', 'why2_d', 'why3_t', 'why3_d', 'why4_t', 'why4_d',
    'prod_kicker', 'prod_title', 'prod_sub', 'tab_all',
    'badge_reman', 'badge_used', 'desc_reman', 'desc_used', 'prod_inquire', 'prod_note',
    'proc_kicker', 'proc_title', 'proc_sub',
    'proc1_t', 'proc1_d', 'proc2_t', 'proc2_d', 'proc3_t', 'proc3_d', 'proc4_t', 'proc4_d',
    'fac_kicker', 'fac_title', 'fac_desc', 'fac_li1', 'fac_li2', 'fac_li3', 'fac_cta',
    'ship_kicker', 'ship_title', 'ship_desc', 'ship_li1', 'ship_li2', 'ship_li3', 'ship_routes',
    'band_title', 'band_sub', 'band_cta',
    'ct_kicker', 'ct_title', 'ct_sub', 'ct_wa_hint', 'ct_phone', 'ct_tel_hint', 'ct_phone2', 'ct_tel2_hint',
    'f_tagline', 'f_nav', 'f_contact', 'f_rights'
  ];

  /* English base (fallback) */
  var EN = {
    nav_home: 'Home', nav_products: 'Engines', nav_process: 'Remanufacturing', nav_factory: 'Factory',
    nav_shipping: 'Global Shipping', nav_contact: 'Contact',
    hero_badge: 'Factory-Direct · Since 2009',
    hero_title1: 'Precision Reborn.',
    hero_title2: 'Power Delivered Worldwide.',
    hero_sub: 'Premium remanufactured & newly assembled engines for Toyota, Land Rover and Audi — built at our own factory, dyno-tested, and shipped to every corner of the globe.',
    hero_cta1: 'Explore Engines', hero_cta2: 'Get a Quote', hero_brands: 'Specialists in',
    stat_years: 'Years of Expertise', stat_engines: 'Engines Delivered',
    stat_countries: 'Countries Served', stat_tested: 'Dyno-Tested Output',
    why_kicker: 'Why CK PowerTech',
    why_title: 'Engineered to Outperform Expectations',
    why_sub: 'From our production lines in China to your workshop — no middlemen, no compromises.',
    why1_t: 'Factory Source',
    why1_d: 'We own the remanufacturing plant. Every engine is rebuilt in-house on OE-grade equipment — you buy directly from the source at factory pricing.',
    why2_t: 'Global Delivery',
    why2_d: 'Sea, air or express — reinforced steel-frame crating and DDP options to 120+ countries. Your engine arrives safe, documented and on time.',
    why3_t: 'Proven Quality',
    why3_d: 'Every unit passes cold-run and hot-run dyno testing, leak-down and compression checks — verified and sealed before it leaves the factory.',
    why4_t: 'Expert Support',
    why4_d: 'Engine-code matching, fitment verification and after-sales guidance from engineers who rebuild these units every day.',
    prod_kicker: 'Our Engines',
    prod_title: 'Remanufactured & Newly Assembled Engine Range',
    prod_sub: 'Complete assemblies and long blocks for the platforms we know best — Toyota first, followed by Land Rover and Audi.',
    tab_all: 'All',
    badge_reman: 'Remanufactured · Tested', badge_used: 'Newly Assembled · Tested',
    desc_reman: 'Fully remanufactured to OE specification. Complete assembly, 100% hot-run dyno-tested before shipment.',
    desc_used: 'Low-mileage original unit, compression & leak-down tested, cleaned and sealed — ready to install.',
    prod_inquire: 'Inquire Now →',
    prod_note: "Can't find your engine code? We stock hundreds more Toyota, Land Rover and Audi units — send us your VIN or engine code for instant matching.",
    proc_kicker: 'The CK Standard',
    proc_title: 'Our Remanufacturing Process',
    proc_sub: 'Every engine is stripped to the last bolt and rebuilt to factory tolerances — not repaired, remanufactured.',
    proc1_t: 'Full Teardown & Inspection',
    proc1_d: 'Complete disassembly, ultrasonic cleaning and magnetic-particle crack detection on every core component.',
    proc2_t: 'Precision Machining',
    proc2_d: 'Blocks decked, cylinders honed, crankshafts ground and balanced on CNC equipment to OE tolerances of ±0.01 mm.',
    proc3_t: 'Assembly with New Parts',
    proc3_d: 'New pistons, rings, bearings, gaskets, seals and timing components fitted in a dust-controlled assembly hall.',
    proc4_t: 'Dyno Testing & Sealing',
    proc4_d: 'Cold-run and hot-run dynamometer validation of compression, oil pressure and noise — then sealed and crated for export.',
    fac_kicker: 'Factory Direct',
    fac_title: 'Built in Our Own Plant — Not a Trading Desk',
    fac_desc: 'CK PowerTech operates a 12,000 m² remanufacturing facility in China with dedicated Toyota, Land Rover and Audi production lines. Owning the factory means we control quality, cost and lead time on every single unit.',
    fac_li1: 'OE-grade CNC machining & dyno-test benches',
    fac_li2: 'Strict IATF-16949-aligned quality system',
    fac_li3: 'Monthly capacity of 800+ engines with stable export stock',
    fac_cta: 'Visit or Video-Tour the Factory',
    ship_kicker: 'Worldwide Logistics',
    ship_title: 'From Our Dock to Your Door — Anywhere on Earth',
    ship_desc: 'A decade of engine-export experience means bulletproof packaging and paperwork. Steel-frame crates, moisture sealing, and complete customs documentation for smooth clearance in your country.',
    ship_li1: 'Sea freight (FCL/LCL), air freight and door-to-door express',
    ship_li2: 'Reinforced steel-frame crating with shock protection',
    ship_li3: 'Full export docs: invoice, packing list, COO, BL/AWB',
    ship_routes: 'Frequent lanes:',
    band_title: 'Send Your Engine Code. Get a Quote in Hours.',
    band_sub: 'Tell us the vehicle model, year and engine code — our team replies with stock, price and shipping cost the same day.',
    band_cta: 'Chat on WhatsApp',
    ct_kicker: 'Contact Us',
    ct_title: 'Talk to an Engine Specialist',
    ct_sub: 'Available 7 days a week. English, Russian, Arabic and Spanish-speaking sales engineers.',
    ct_wa_hint: 'Fastest response — usually within 1 hour',
    ct_phone: 'Phone / WeChat',
    ct_tel_hint: 'Sales hotline — Mon–Sun 8:00–22:00 (GMT+8)',
    ct_phone2: 'Export Department',
    ct_tel2_hint: 'Shipping, documents & after-sales support',
    f_tagline: 'Factory-direct remanufactured & newly assembled engines for Toyota, Land Rover and Audi. Precision reborn, power delivered worldwide.',
    f_nav: 'Navigate', f_contact: 'Contact', f_rights: 'All rights reserved.'
  };

  var PACKS = { en: EN };

  /* Called by language pack files. data = object of key -> translated string
     (missing keys fall back to English at apply time) */
  window.registerLang = function (code, data) {
    PACKS[code] = data || {};
  };

  var STORAGE_KEY = 'ck_lang';

  function normalize(code) {
    if (!code) return null;
    var lc = code.toLowerCase();
    if (lc === 'zh-cn' || lc === 'zh-sg' || lc === 'zh-hans' || lc === 'zh') return 'zh-CN';
    if (lc === 'zh-tw' || lc === 'zh-hk' || lc === 'zh-mo' || lc === 'zh-hant') return 'zh-TW';
    if (lc === 'nb' || lc === 'nn') return 'no';
    if (lc === 'fil') return 'tl';
    if (lc === 'iw') return 'he';
    if (lc === 'in') return 'id';
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0].toLowerCase() === lc) return LANGS[i][0];
    var base = lc.split('-')[0];
    for (var j = 0; j < LANGS.length; j++) if (LANGS[j][0].toLowerCase() === base) return LANGS[j][0];
    return null;
  }

  function detect() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && PACKS[normalize(saved)] !== undefined) return normalize(saved);
    var prefs = navigator.languages || [navigator.language || navigator.userLanguage];
    for (var i = 0; i < prefs.length; i++) {
      var m = normalize(prefs[i]);
      if (m) return m;
    }
    return 'en';
  }

  function isRTL(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === code) return !!LANGS[i][2];
    return false;
  }

  function nativeName(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0] === code) return LANGS[i][1];
    return code;
  }

  var current = 'en';

  function apply(code) {
    var dict = PACKS[code] || EN;
    current = code;
    document.documentElement.lang = code;
    document.documentElement.dir = isRTL(code) ? 'rtl' : 'ltr';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      var val = dict[key] != null ? dict[key] : EN[key];
      if (val != null) nodes[i].innerHTML = val;
    }
    var label = document.getElementById('langBtnLabel');
    if (label) label.textContent = nativeName(code);
    var items = document.querySelectorAll('.lang-item');
    for (var j = 0; j < items.length; j++) {
      items[j].classList.toggle('active', items[j].getAttribute('data-code') === code);
    }
  }

  window.CKI18N = {
    LANGS: LANGS,
    get current() { return current; },
    setLang: function (code, persist) {
      code = normalize(code) || 'en';
      apply(code);
      if (persist !== false) { try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {} }
    },
    init: function () { apply(detect()); }
  };
})();
