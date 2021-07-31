// trigger tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});


// set time of day on homepage
let hour = new Date().getHours();
const newHour = ((hour<12 && "morning" || hour<18 && "afternoon" || "evening"));

document.getElementById("timeOfDay").innerHTML = newHour;


// toggle accordion chevron
$('.btn-accordion').click(function() {
  $(".icon-chevron").toggleClass('la-angle-up');
  $(".icon-chevron").toggleClass('la-angle-down');
});