// Unfckwithable. — shared site JS
(function(){
  // Mobile nav toggle
  var t = document.querySelector('.navtoggle');
  var links = document.querySelector('.nav-links');
  if (t && links){
    t.addEventListener('click', function(){ links.classList.toggle('open'); });
  }

  // Graceful image fallback for hero portraits + methodology tiles
  document.querySelectorAll('.portrait img, .read .rimg img').forEach(function(img){
    function fail(){ var box = img.closest('.portrait') || img.closest('.rimg'); if(box) box.classList.add('noimg'); }
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });

  // Video lightbox (click a thumbnail -> play the Vimeo video in a popup)
  var lb = document.getElementById('lb');
  if (lb){
    var inner = document.getElementById('lbInner');
    var frame = document.getElementById('lbFrame');
    var closeBtn = document.getElementById('lbClose');
    function open(url, portrait){
      inner.className = 'lb-inner' + (portrait ? ' portrait' : '');
      frame.className = 'lb-frame' + (portrait ? ' portrait' : '');
      frame.innerHTML = '<iframe src="'+url+'" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
      lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
    }
    function close(){
      lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); frame.innerHTML = ''; document.body.style.overflow = '';
    }
    document.querySelectorAll('.media[data-embed]').forEach(function(m){
      var url = m.getAttribute('data-embed');
      var portrait = m.getAttribute('data-orient') === 'portrait';
      m.addEventListener('click', function(){ open(url, portrait); });
      m.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); open(url, portrait); } });
    });
    closeBtn.addEventListener('click', close);
    lb.addEventListener('click', function(e){ if(e.target===lb) close(); });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') close(); });
  }
})();
