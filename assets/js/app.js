// OrAgri — App JS global

// Language switcher
const LANG_KEY = 'oragri-lang';

const translations = {
  fr: {},
  ar: {}
};

function applyLang() {
  const lang = localStorage.getItem(LANG_KEY) || 'fr';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

document.querySelectorAll('[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    localStorage.setItem(LANG_KEY, btn.dataset.lang);
    applyLang();
  });
});

applyLang();
