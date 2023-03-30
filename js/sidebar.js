const toggleFilter = document.querySelector('.toggleFilter');
const filter = document.querySelector('.filter');

toggleFilter.addEventListener('click', () => {
  $(filter).fadeToggle();
});

const search = document.querySelector('input.search');
const items = document.querySelectorAll('div.itembox');

search.addEventListener('keyup',function(e){
  const word=(e.target.value).toLowerCase();
  for(var i = 0;i<items.length;i++){
      if(items[i].id.toLowerCase().includes(word)||word.length==0){
        items[i].style.setProperty('order',i);
        items[i].style.webkitFilter='blur(0)';
      }
      else {
        items[i].style.setProperty('order',i+999);
        items[i].style.webkitFilter ='blur(2px)';

      }

  }
})

