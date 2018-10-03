$(function () {
  count = 0;
  wordsArray = [" who cares."," loves good design."," who gets sh*t done."];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 5000);
});

$('#work, #work1').click(function(){
    $("html, body").animate({ scrollTop: 400 }, 500);
    return false;
 });

 $(document).ready(function(){
  //  Tooltip heart
   $('[data-toggle="tooltip"]').tooltip();

 });

 $('.owl-carousel').owlCarousel({
     loop:true,
     margin:50,
     responsiveClass:true,
     responsive:{
         0:{
             items:1,
             nav:true
         },
         600:{
             items:2,
             nav:true
         },
         1000:{
             items:3,
             nav:true,
             loop:true
         }
     }
 });
