(function(){
  function init(){
    document.querySelectorAll('.menu-toggle').forEach(function(btn){
      btn.addEventListener('click', function(){
        var header = btn.closest('header.nav');
        if (!header) return;
        var open = header.getAttribute('data-open') === 'true';
        header.setAttribute('data-open', String(!open));
        btn.setAttribute('aria-expanded', String(!open));
      });
    });
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

