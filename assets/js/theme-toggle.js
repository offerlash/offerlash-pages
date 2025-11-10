/**
 * Theme toggle: light (default) / dark
 * - Saves preference in localStorage('theme')
 * - Applies data-theme on <html>
 * - Updates a dynamic theme-color meta if present
 */
(function () {
  var STORAGE_KEY = 'theme';
  var LIGHT = 'light';
  var DARK = 'dark';

  function setTheme(theme) {
    var root = document.documentElement;
    var t = theme === DARK ? DARK : LIGHT;
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"][data-dynamic]');
    if (meta) meta.setAttribute('content', t === DARK ? '#B4A8FF' : '#6B5BFF');
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', String(t === DARK));
    if (btn) btn.textContent = t === DARK ? '☀️' : '🌙';
    if (btn) {
      var nextLabel = t === DARK ? (btn.getAttribute('data-label-light') || '')
                                 : (btn.getAttribute('data-label-dark') || '');
      if (nextLabel) btn.setAttribute('aria-label', nextLabel);
    }
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    // default to light if not set
    setTheme(saved === DARK ? DARK : LIGHT);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        setTheme(current === DARK ? LIGHT : DARK);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
