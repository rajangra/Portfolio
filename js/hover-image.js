document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".hover-image-trigger");
  if (triggers.length === 0) return;

  // Create a shared container for the hover images
  let container = document.getElementById("hover-image-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "hover-image-container";
    container.className = "hover-image-container";
    document.body.appendChild(container);
  }

  triggers.forEach((trigger) => {
    const imageUrl = trigger.getAttribute("data-image-url");
    const imageWidth = trigger.getAttribute("data-image-width") || "250px";

    trigger.addEventListener("mouseenter", () => {
      container.innerHTML = `<img src="${imageUrl}" alt="Preview" style="width: 100%; height: auto; display: block;">`;
      container.style.width = imageWidth;
      gsap.to(container, {
        opacity: 1,
        duration: 0.1,
        ease: "power2.out",
      });
    });

    trigger.addEventListener("mouseleave", () => {
      gsap.to(container, {
        opacity: 0,
        duration: 0.1,
        ease: "power2.in",
      });
    });

    trigger.addEventListener("mousemove", (e) => {
      gsap.to(container, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
});
