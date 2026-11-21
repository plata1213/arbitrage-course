(function(){
  var bar=document.querySelector('.progress');
  if(!bar)return;
  function upd(){
    var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
    bar.style.width=(max>0?Math.min(100,h.scrollTop/max*100):0)+'%';
  }
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
})();

document.querySelectorAll('[data-car]').forEach(function(c){
 var t=c.querySelector('.car-track'),s=t.children,d=c.querySelector('.car-dots');
 for(var i=0;i<s.length;i++){d.appendChild(document.createElement('i'))}
 function cur(){var k=0,m=1e9,cx=t.scrollLeft+t.clientWidth/2;for(var i=0;i<s.length;i++){var x=Math.abs(s[i].offsetLeft+s[i].offsetWidth/2-cx);if(x<m){m=x;k=i}}return k}
 function up(){var k=cur();[].forEach.call(d.children,function(e,i){e.className=i==k?'on':''})}
 t.addEventListener('scroll',up);up();
 c.querySelectorAll('.car-b').forEach(function(b){b.addEventListener('click',function(){var k=Math.max(0,Math.min(s.length-1,cur()+ +b.dataset.d));t.scrollTo({left:s[k].offsetLeft-(t.clientWidth-s[k].offsetWidth)/2,behavior:'smooth'})})})
});
