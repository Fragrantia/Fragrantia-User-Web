const toggleFilter = document.querySelector('.toggleFilter');
const filter = document.querySelector('.filter');

toggleFilter.addEventListener('click', () => {
  $(filter).fadeToggle();
});

const search = document.querySelector('input.search');
const items = document.querySelectorAll('div.itembox');
var itemsXY = [];
var ease  = Power1.easeInOut;

// 초기 위치 저장
for (var i = 0; i < items.length; i++) {
  items[i].style.setProperty('order',i);
  var node = items[i];
  
  // Initialize transforms on node
  TweenLite.set(node, { x: 0 });
   
  itemsXY[i] = {
    transform: node._gsTransform,
    x: node.offsetLeft,
    y: node.offsetTop,
    node
  };
  
} 
search.addEventListener('keyup',function(e){
  const word=(e.target.value).toLowerCase();
  for(var i = 0;i<items.length;i++){
      if(items[i].id.toLowerCase().includes(word)||word.length==0){
        items[i].style.setProperty('order',i);
        items[i].style.setProperty('opacity',1);
      }
      else {
        items[i].style.setProperty('order',i+999);
        items[i].style.setProperty('opacity',0.3);

      }

     /*  var box = itemsXY[i];
      //i,box.x,box.y,box.node.offsetLeft,box.node.offsetTop
      console.log(`${box.node.id}:${box.x}=>${box.node.offsetLeft} | ${box.y}=>${box.node.offsetTop}:${box.transform.x + box.x - box.node.offsetLeft},${box.transform.y + box.y - box.node.offsetTop}`);
      var lastX = box.x;
      var lastY = box.y;
      box.x = box.node.offsetLeft;
      box.y = box.node.offsetTop;
      if (lastX === box.x && lastY === box.y) continue;

      var x = box.transform.x + lastX - box.x;
      var y = box.transform.y + lastY - box.y;  
      
      TweenLite.fromTo(box.node, 1, { x, y, }, { x: 0, y: 0, ease }); */
  }
})

