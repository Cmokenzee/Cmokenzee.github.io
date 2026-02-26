// === i18n ===
var L = {
  cs: {
    nav_about:"O mn\u011b", nav_projects:"Projekty", nav_experience:"Zku\u0161enosti", nav_contact:"Kontakt",
    hero_badge:"Hled\u00e1m nov\u00e9 projekty",
    hero_title:'Firmware developer<br><span class="muted">&amp; web developer.</span>',
    hero_desc:'D\u011bl\u00e1m v\u011bci, co b\u011b\u017e\u00ed na <strong>mikrokontrol\u00e9rech</strong> i v <strong>prohl\u00ed\u017ee\u010di</strong>. Embedded syst\u00e9my, .NET backend, modern\u00ed weby \u2014 od hardware po cloud.',
    hero_btn:"Projekty",
    about_label:"// o mn\u011b", about_title:"Kdo jsem",
    about_desc:"Student IT z \u010ceska. P\u0159es den firmware, ve\u010der weby.",
    a1t:"Embedded syst\u00e9my", a1d:"Pracuju s STM32, \u010dipy Nordic Semiconductor (nRF52/nRF91) a Zephyr RTOS. P\u00ed\u0161u firmware, co b\u011b\u017e\u00ed m\u011bs\u00edce na baterku. Denn\u011b \u0159e\u0161\u00edm registry, p\u0159eru\u0161en\u00ed a n\u00edzko\u00farov\u0148ovou komunikaci.",
    a2t:"Webov\u00fd v\u00fdvoj", a2d:"Modern\u00ed weby a webov\u00e9 aplikace. React, Next.js, ale i klasick\u00fd HTML/CSS. D\u011bl\u00e1m weby pro firmy i vlastn\u00ed projekty \u2014 od landing page po full-stack appky.",
    a3t:".NET ekosyst\u00e9m", a3d:"C# je m\u016fj hlavn\u00ed jazyk. WPF desktopov\u00e9 aplikace, .NET backend API, Entity Framework. Um\u00edm cel\u00fd stack od datab\u00e1ze po UI.",
    a4t:"Hardware prototypy", a4d:"Arduino, ESP32, Raspberry Pi \u2014 navrhuju a bastl\u00edm prototypy IoT za\u0159\u00edzen\u00ed. Od senzor\u016f p\u0159es WiFi/BLE komunikaci po cloudov\u00e9 dashboardy.",
    stack_title:"\u010c\u00edm pracuju", stack_desc:"N\u00e1stroje a technologie, kter\u00e9 pou\u017e\u00edv\u00e1m denn\u011b.",
    stack_langs:"Jazyky", stack_tools:"N\u00e1stroje",
    proj_label:"// projekty", proj_title:"Vybran\u00e9 projekty", proj_desc:"N\u011bkter\u00e9 v\u011bci, na kter\u00fdch jsem pracoval.",
    wip_label:"// brzy", wip_desc:"Pracuju na tom. Brzy tady bude.",
    p1d:"End-to-end IoT \u0159e\u0161en\u00ed. Firmware na \u010dipech Nordic Semiconductor (nRF52840) \u010dte senzory a pos\u00edl\u00e1 data p\u0159es LoRaWAN. .NET backend zpracov\u00e1v\u00e1 a ukl\u00e1d\u00e1. React frontend zobrazuje real-time grafy a ovl\u00e1d\u00e1n\u00ed.",
    p2d:"WiFi meteostanice s vestav\u011bn\u00fdm web serverem. M\u011b\u0159\u00ed teplotu, vlhkost, tlak. Data p\u0159\u00edstupn\u00e1 lok\u00e1ln\u011b i p\u0159es MQTT.",
    p3d:"WPF aplikace pro komunikaci s embedded za\u0159\u00edzen\u00edmi p\u0159es UART. Hex/ASCII zobrazen\u00ed, logov\u00e1n\u00ed, makra.",
    p4t:"Web pro autoservis", p4d:"Responzivn\u00ed web pro lok\u00e1ln\u00ed autoservis. Rezervace online, cen\u00edk slu\u017eeb, galerie. Optimalizov\u00e1no pro SEO.",
    p5d:"Uk\u00e1zkov\u00fd .NET backend s CQRS, MediatR, EF Core. JWT autentizace, role-based access, Swagger docs.",
    p6t:"RFID p\u0159\u00edstupov\u00fd syst\u00e9m", p6d:"Arduino + RC522 \u010dte\u010dka. Odemyk\u00e1n\u00ed elektoz\u00e1mku, logov\u00e1n\u00ed p\u0159\u00edstup\u016f na SD kartu, admin rozhran\u00ed p\u0159es s\u00e9riov\u00fd port.",
    p7type:"n\u00e1stroj", p7d:"GitHub Actions workflow pro build Zephyr firmware, unit testy, generov\u00e1n\u00ed bin\u00e1rky a release artifacts.",
    exp_label:"// zku\u0161enosti", exp_title:"Kde jsem pracoval",
    exp_d1:"2025 \u2014 te\u010f", exp_c1:"Brig\u00e1da \u2014 Embedded",
    exp_p1:"V\u00fdvoj firmware pro IoT za\u0159\u00edzen\u00ed. Pr\u00e1ce s \u010dipy Nordic Semiconductor (nRF52/nRF91), STM32, Zephyr RTOS a LoRaWAN. Implementace n\u00edzko\u00farov\u0148ov\u00fdch driver\u016f, OTA updatey, optimalizace spot\u0159eby energie.",
    exp_d2:"2022 \u2014 te\u010f", exp_r2:"Student", exp_c2:"St\u0159edn\u00ed \u0161kola \u2014 IT",
    exp_p2:"Studium informa\u010dn\u00edch technologi\u00ed. Programov\u00e1n\u00ed, s\u00edt\u011b, datab\u00e1ze. Paraleln\u011b vlastn\u00ed projekty a vzd\u011bl\u00e1v\u00e1n\u00ed v embedded a webov\u00e9m v\u00fdvoji.",
    contact_label:"// kontakt", contact_title:"Poj\u010fme spolupracovat", contact_desc:"Hled\u00e1\u0161 v\u00fdvoj\u00e1\u0159e na projekt? Ozvi se.",
    footer:'Postaveno ru\u010dn\u011b s <a href="#">&#9749;</a>',
  },
  en: {
    nav_about:"About", nav_projects:"Projects", nav_experience:"Experience", nav_contact:"Contact",
    hero_badge:"Open to new projects",
    hero_title:'Firmware developer<br><span class="muted">&amp; web developer.</span>',
    hero_desc:'I build things that run on <strong>microcontrollers</strong> and in the <strong>browser</strong>. Embedded systems, .NET backend, modern web &mdash; from hardware to cloud.',
    hero_btn:"Projects",
    about_label:"// about me", about_title:"Who I am",
    about_desc:"IT student from Czechia. Firmware by day, websites by night.",
    a1t:"Embedded systems", a1d:"I work with STM32, Nordic Semiconductor chips (nRF52/nRF91), and Zephyr RTOS. I write firmware that runs for months on a battery. Daily I deal with registers, interrupts and low-level communication.",
    a2t:"Web development", a2d:"Modern websites and web applications. React, Next.js, but also classic HTML/CSS. I build sites for businesses and personal projects &mdash; from landing pages to full-stack apps.",
    a3t:".NET ecosystem", a3d:"C# is my main language. WPF desktop applications, .NET backend APIs, Entity Framework. I handle the full stack from database to UI.",
    a4t:"Hardware prototypes", a4d:"Arduino, ESP32, Raspberry Pi &mdash; I design and build IoT device prototypes. From sensors through WiFi/BLE communication to cloud dashboards.",
    stack_title:"What I work with", stack_desc:"Tools and technologies I use daily.",
    stack_langs:"Languages", stack_tools:"Tools",
    proj_label:"// projects", proj_title:"Selected projects", proj_desc:"Some things I've been working on.",
    wip_label:"// coming soon", wip_desc:"Working on something. Will be here soon.",
    p1d:"End-to-end IoT solution. Firmware on Nordic Semiconductor chips (nRF52840) reads sensors and sends data via LoRaWAN. .NET backend processes and stores. React frontend displays real-time charts and controls.",
    p2d:"WiFi weather station with a built-in web server. Measures temperature, humidity, pressure. Data accessible locally and via MQTT.",
    p3d:"WPF application for communicating with embedded devices over UART. Hex/ASCII display, logging, macros.",
    p4t:"Auto repair shop website", p4d:"Responsive website for a local auto repair shop. Online booking, service pricing, gallery. SEO optimized.",
    p5d:"Reference .NET backend with CQRS, MediatR, EF Core. JWT authentication, role-based access, Swagger docs.",
    p6t:"RFID Access System", p6d:"Arduino + RC522 reader. Electric lock control, access logging to SD card, admin interface via serial port.",
    p7type:"tool", p7d:"GitHub Actions workflow for building Zephyr firmware, unit tests, generating binaries and release artifacts.",
    exp_label:"// experience", exp_title:"Where I've worked",
    exp_d1:"2025 &mdash; now", exp_c1:"Part-time &mdash; Embedded",
    exp_p1:"Firmware development for IoT devices. Working with Nordic Semiconductor chips (nRF52/nRF91), STM32, Zephyr RTOS and LoRaWAN. Implementing low-level drivers, OTA updates, power consumption optimization.",
    exp_d2:"2022 &mdash; now", exp_r2:"Student", exp_c2:"High school &mdash; IT",
    exp_p2:"Studying information technology. Programming, networking, databases. Alongside school, working on personal projects and learning embedded and web development.",
    contact_label:"// contact", contact_title:"Let's work together", contact_desc:"Looking for a developer? Get in touch.",
    footer:'Handcrafted with <a href="#">&#9749;</a>',
  }
};

var lang = 'en';

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.getElementById('lang-en').className = l === 'en' ? 'lang-active' : '';
  document.getElementById('lang-cs').className = l === 'cs' ? 'lang-active' : '';
  var d = L[l];
  document.querySelectorAll('[data-t]').forEach(function(el) {
    var k = el.getAttribute('data-t');
    if (d[k] !== undefined) el.textContent = d[k];
  });
  document.querySelectorAll('[data-th]').forEach(function(el) {
    var k = el.getAttribute('data-th');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
}

document.getElementById('langbtn').addEventListener('click', function() {
  setLang(lang === 'en' ? 'cs' : 'en');
});

// === Fade-in ===
function initFadeIn() {
  var items = document.querySelectorAll('.fi');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    items.forEach(function(el) { obs.observe(el); });
  } else {
    items.forEach(function(el) { el.classList.add('vis'); });
  }
}

// === Mobile menu ===
document.getElementById('ham').addEventListener('click', function() {
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('#navlinks a').forEach(function(a) {
  a.addEventListener('click', function() {
    document.getElementById('navlinks').classList.remove('open');
  });
});

// === Active nav on scroll ===
var secs = document.querySelectorAll('section[id]');
var navAs = document.querySelectorAll('#navlinks a');
window.addEventListener('scroll', function() {
  var cur = '';
  secs.forEach(function(s) {
    if (window.scrollY >= s.offsetTop - 100) cur = s.getAttribute('id');
  });
  navAs.forEach(function(a) {
    a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--text)' : '';
  });
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFadeIn);
} else {
  initFadeIn();
}
