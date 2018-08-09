// slider

$(function(){
  $('.line-news-slider-content').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
  });
});

// summer-winter


$(document).ready(function(){
 
   $("#summer").click(function(){
      $(".chk-summer").css("display","block");
      $(".chk-winter").css("display","none");
   });

   $("#winter").click(function(){
      $(".chk-summer").css("display","none");
      $(".chk-winter").css("display","block");
   });
  

}); 
