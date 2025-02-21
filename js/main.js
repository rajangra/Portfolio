document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = document.querySelectorAll(".case-study-section");

  sections.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "center top",
        end: "bottom bottom",
        scrub: true,
        snap: 0.75,
        onEnter: () => gsap.to(section, { scale: 0.95, duration: 0.3 }),
        onLeaveBack: () => gsap.to(section, { scale: 1, duration: 0.3 }),
      },
    });
  });
});

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

// toggle accordion chevron
// $(".btn-accordion").click(function () {
//   $(".icon-chevron").toggleClass("la-angle-up");
//   $(".icon-chevron").toggleClass("la-angle-down");
// });
