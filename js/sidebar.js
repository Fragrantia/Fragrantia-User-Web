// $(function(){
//     $('#sidebarFlower').load('../module/sidebarF.html');
// })//최종 사용하는 html기준으로 로그 경로 지정

const toggleFilter = document.querySelector('.toggleFilter');
const filter = document.querySelector('.filter');

toggleFilter.addEventListener('click', () => {
  filter.classList.toggle('show');
});

