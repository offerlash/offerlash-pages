/**
 * Lightweight client-side i18n for shared UI strings only.
 * - Uses data-i18n for textContent
 * - Uses data-i18n-attr="attr:key,attr2:key2" for attributes
 * - Does NOT alter SEO-critical body copy or meta; only shared chrome (nav, CTA, aria)
 */
(function(){
  var lang = (document.documentElement.getAttribute('lang')||'ar').toLowerCase() === 'en' ? 'en' : 'ar';
  var T = {
    en: {
      nav: { home: 'Home', shoppers: 'For Shoppers', marketers: 'For Marketers', menu: 'Menu', lang: { ar: 'العربية', en: 'English' } },
      cta: { play: 'Get it on Google Play', appstore: 'Download on the App Store', openApp: 'Open the app' },
      footer: { privacy: 'Privacy Policy', terms: 'Terms of Use' },
      aria: { toggle: { dark: 'Switch to dark mode', light: 'Switch to light mode' } }
    },
    ar: {
      nav: { home: 'الصفحة الرئيسية', shoppers: 'أنا متسوق', marketers: 'أنا مسوق', menu: 'القائمة', lang: { ar: 'العربية', en: 'English' } },
      cta: { play: 'تنزيل من Google Play', appstore: 'تنزيل من App Store', openApp: 'فتح التطبيق' },
      footer: { privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام' },
      aria: { toggle: { dark: 'تفعيل الوضع الداكن', light: 'تفعيل الوضع الفاتح' } }
    }
  };

  function get(path){
    try{
      var segs = path.split('.');
      var v = T[lang];
      for (var i=0;i<segs.length;i++) v = v[segs[i]];
      return (v==null? '': String(v));
    }catch(e){ return ''; }
  }

  function apply(){
    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = get(key);
      if (val) el.textContent = val;
    });
    // attributes
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      var map = el.getAttribute('data-i18n-attr');
      if (!map) return;
      map.split(',').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var val = get(key);
        if (val) el.setAttribute(attr, val);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
