/**
 * Language switching + preference
 * - Persists language in localStorage('lang')
 * - Computes counterpart route when switching (keeps section, hash, some params)
 * - Updates lang switch link(s) href on load for correct deep links
 */
(function () {
  var STORAGE_KEY = 'lang';

  function getDocLang() {
    var html = document.documentElement;
    var l = (html && html.getAttribute('lang')) || '';
    l = (l || '').toLowerCase();
    return l === 'en' ? 'en' : 'ar';
  }

  function parts() {
    // split('/').filter(Boolean) to ignore leading/trailing slashes
    return window.location.pathname.split('/').filter(Boolean);
  }

  function preserveParams(target) {
    try {
      var src = new URL(window.location.href);
      var dst = new URL(target, window.location.origin);
      // keep common campaign/navigation params
      var keep = ['utm_source','utm_medium','utm_campaign','ref'];
      keep.forEach(function(k){ if (src.searchParams.has(k)) dst.searchParams.set(k, src.searchParams.get(k)); });
      // keep fragment
      dst.hash = src.hash || '';
      return dst.pathname + (dst.search || '') + (dst.hash || '');
    } catch (e) {
      return target; // fallback
    }
  }

  function computeTarget(toLang) {
    var p = parts();
    var iEn = p.indexOf('en');
    var iAr = p.indexOf('ar');
    // project pages typically have repo name as first segment; keep it intact
    var repoPrefixLen = 0;
    if (p.length && /-pages$/.test(p[0])) repoPrefixLen = 1; // heuristic for GitHub Pages project site

    if (toLang === 'en') {
      if (iEn === -1) {
        // Insert 'en' after possible repo prefix or replace an 'ar' stub if present
        if (iAr > -1) { p.splice(iAr, 1, 'en'); }
        else { p.splice(repoPrefixLen, 0, 'en'); }
      }
    } else {
      // Arabic prefers flat structure (no /ar/)
      if (iEn > -1) p.splice(iEn, 1);
      // Drop /ar/ stub if user is on it
      iAr = p.indexOf('ar');
      if (iAr > -1) p.splice(iAr, 1);
    }

    // Ensure trailing slash for directory pages
    var trailingSlash = /\/$/.test(window.location.pathname) || window.location.pathname.split('/').pop() === '';
    var target = '/' + p.join('/') + (trailingSlash ? '/' : '');
    return preserveParams(target);
  }

  function updateLinks() {
    var currentLang = getDocLang();
    var links = document.querySelectorAll('nav.lang a[hreflang]:not([data-lang-static])');
    if (!links || !links.length) return;
    links.forEach(function(a) {
      var to = (a.getAttribute('hreflang') || '').toLowerCase();
      if (to === 'ar' || to === 'en') {
        a.setAttribute('href', computeTarget(to));
      }
    });
  }

  function bindClicks() {
    var links = document.querySelectorAll('nav.lang a[hreflang]:not([data-lang-static])');
    links.forEach(function(a) {
      a.addEventListener('click', function(ev){
        var to = (a.getAttribute('hreflang') || '').toLowerCase();
        if (to === 'ar' || to === 'en') {
          try { localStorage.setItem(STORAGE_KEY, to); } catch (e) {}
          var target = computeTarget(to);
          // Allow normal navigation if href already matches (still preserves state)
          ev.preventDefault();
          window.location.assign(target);
        }
      });
    });
  }

  function applyPreferenceRedirect() {
    // Optional: If user saved EN and lands on AR home (root), send them to EN home once.
    // Keep it conservative: only auto-redirect on homepage or language-root pages.
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (!saved) return;
    var p = parts();
    var atHome = (p.length === 0) || // /
                 (p.length === 1 && /-pages$/.test(p[0])) || // /repo/
                 (p.length === 1 && p[0] === 'en') ||
                 (p.length === 2 && /-pages$/.test(p[0]) && p[1] === 'en');
    if (!atHome) return;
    var docLang = getDocLang();
    if (saved !== docLang) {
      window.location.replace(computeTarget(saved));
    }
  }

  function init() {
    // Save current doc language as preference if nothing stored yet
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, getDocLang());
      }
    } catch (e) {}
    updateLinks();
    bindClicks();
    applyPreferenceRedirect();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
