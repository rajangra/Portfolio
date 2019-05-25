$(function () {
  count = 0;
  wordsArray = ["UX","Product","experience"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(400, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
    });
  }, 5000);
});

$('#work, #work1').click(function(){
    $("html, body").animate({ scrollTop: 700 }, 500);
    return false;
 });

 $(document).ready(function(){
  //  Tooltip heart
   $('[data-toggle="tooltip"]').tooltip();


    $(document).click(function (event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $navbar.collapse('toggle');
        }
    });

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
