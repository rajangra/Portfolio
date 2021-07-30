$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

let hour = new Date().getHours();
const newHour = ((hour<12 && "morning" || hour<18 && "afternoon" || "evening"));

document.getElementById("timeOfDay").innerHTML = newHour;