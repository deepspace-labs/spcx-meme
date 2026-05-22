/* SPCX i18n — script-injection loader.
   Works equally well from file:// (no fetch — blocked by browser security) and
   from a real HTTP server. Each language lives in i18n/<lang>.js as a script
   that assigns to window.SPCX_I18N[<lang>]. */

const SUPPORTED = ['en', 'es'];
const DEFAULT_LANG = 'en';
const STORAGE_KEY = 'spcx_lang';

window.SPCX_I18N = window.SPCX_I18N || {};

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;

  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
  const short = nav.split('-')[0];
  if (SUPPORTED.includes(short)) return short;

  return DEFAULT_LANG;
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined, obj);
}

function loadDict(lang) {
  return new Promise((resolve, reject) => {
    if (window.SPCX_I18N[lang]) return resolve(window.SPCX_I18N[lang]);

    const existing = document.querySelector(`script[data-i18n-lang="${lang}"]`);
    if (existing) {
      existing.addEventListener('load', () => resolve(window.SPCX_I18N[lang]));
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${lang}`)));
      return;
    }

    const s = document.createElement('script');
    s.src = `i18n/${lang}.js`;
    s.dataset.i18nLang = lang;
    s.async = true;
    s.onload = () => {
      if (window.SPCX_I18N[lang]) resolve(window.SPCX_I18N[lang]);
      else reject(new Error(`Loaded ${lang}.js but no data found`));
    };
    s.onerror = () => reject(new Error(`Failed to load ${lang}.js`));
    document.head.appendChild(s);
  });
}

function apply(dict, lang) {
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getByPath(dict, key);
    if (typeof value === 'string') el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s.trim());
      const value = getByPath(dict, key);
      if (attr && typeof value === 'string') el.setAttribute(attr, value);
    });
  });

  document.documentElement.lang = lang;
}

function markActive(lang) {
  document.querySelectorAll('.lang-switcher button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

async function setLang(lang, persist = true) {
  if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
  if (persist) localStorage.setItem(STORAGE_KEY, lang);
  markActive(lang);

  try {
    const dict = await loadDict(lang);
    apply(dict, lang);
  } catch (e) {
    console.error('SPCX i18n:', e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang, true));
  });
  setLang(detectInitialLang(), false);
});
