jQuery(function($){
  $(".menu-toggle-btn").click(function(){
      $(".main_nav").stop().slideToggle("fast");
  });
});