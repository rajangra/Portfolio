// Word changer

// $(function () {
//   count = 0;
//   wordsArray = ["UX","Product","experience"];
//   setInterval(function () {
//     count++;
//     $("#word").fadeOut(400, function () {
//       $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
//     });
//   }, 5000);
// });



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


    $('#work, #work1').click(function(){
        $("html, body").animate({ scrollTop: 600 }, 500);
        return false;
     });

     //
    //  $('.owl-carousel').owlCarousel({
    //      loop:true,
    //      margin:50,
    //      responsiveClass:true,
    //      responsive:{
    //          0:{
    //              items:1,
    //              nav:true
    //          },
    //          600:{
    //              items:2,
    //              nav:true
    //          },
    //          1000:{
    //              items:3,
    //              nav:true,
    //              loop:true
    //          }
    //      }
    //  });


    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y < 150) {
        $('#navbar').fadeIn();
      } else {
        $('#navbar').fadeOut();
      }
    });

// Alternative W3school method

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function() {
    //   var currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    //   } else {
    //     document.getElementById("navbar").style.top = "-75px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }




});
