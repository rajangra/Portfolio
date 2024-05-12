// $(document).ready(function () {
//   Fancybox.bind('[data-fancybox="gallery"]', {
//     animated: true,
//     dragToClose: true,
//     Image: {
//       zoom: false,
//     },
//     Toolbar: {
//       display: [{ id: "counter", position: "center" }, "close"],
//     },
//     // Custom animations
//     showClass: "fancybox-zoomIn",
//     hideClass: "fancybox-zoomOut",
//   });
// });

// trigger tooltip
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip();
// });

// set time of day on homepage
let hour = new Date().getHours();
const newHour =
  (hour < 12 && "morning") || (hour < 18 && "afternoon") || "evening";

// document.getElementById("timeOfDay").textContent = newHour;

// toggle accordion chevron
// $(".btn-accordion").click(function () {
//   $(".icon-chevron").toggleClass("la-angle-up");
//   $(".icon-chevron").toggleClass("la-angle-down");
// });
