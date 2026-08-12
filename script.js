// Unfckwithable. — shared site JS
(function(){
  // Mobile nav toggle
  var t = document.querySelector('.navtoggle');
  var links = document.querySelector('.nav-links');
  if (t && links){
    t.addEventListener('click', function(){ links.classList.toggle('open'); });
  }
  // Graceful image fallback: if a brand photo fails to load, show the gradient tile instead of a broken image
  document.querySelectorAll('.portrait img, .read .rimg img').forEach(function(img){
    function fail(){ var box = img.closest('.portrait') || img.closest('.rimg'); if(box) box.classList.add('noimg'); }
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });
})();
