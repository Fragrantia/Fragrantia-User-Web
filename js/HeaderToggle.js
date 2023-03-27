// 수정 전 : 위아래 슬라이드
// jQuery(function($){
//   $(".menu-toggle-btn").click(function(){
//       $(".main_nav").stop().slideToggle("fast");
//   });
// }); 

// 수정 후 : 좌우 슬라이드
$(document).ready(function(){
	$('.menu-toggle-btn').click(function(){
   		$('.main_nav').animate({width:"toggle"},200);
	});
});