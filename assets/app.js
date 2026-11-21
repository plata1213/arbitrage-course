(function(){
  var bar=document.querySelector('.progress');
  if(!bar)return;
  function upd(){
    var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
    bar.style.width=(max>0?Math.min(100,h.scrollTop/max*100):0)+'%';
  }
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
})();
