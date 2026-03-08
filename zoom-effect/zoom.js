/**
 * Smooth Zoom Logic using GSAP Flip
 * Usage: Initialize by calling initZoom('.your-selector')
 */

function initZoom(selector = ".video-stack-item") {
  if (typeof gsap === "undefined" || typeof Flip === "undefined") {
    console.error("GSAP and Flip plugin are required for zoom logic.");
    return;
  }

  gsap.registerPlugin(Flip);

  const zoomItems = document.querySelectorAll(selector);
  const overlay = document.createElement("div");
  overlay.className = "zoom-overlay";
  document.body.appendChild(overlay);

  let isZoomed = false;
  let currentZoomItem = null;
  let originalParent = null;
  let originalSib = null;

  zoomItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (isZoomed && currentZoomItem === item) {
        zoomOut();
      } else if (!isZoomed) {
        zoomIn(item);
      }
    });
  });

  overlay.addEventListener("click", zoomOut);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") zoomOut();
  });

  // Reset as user scrolls
  window.addEventListener(
    "scroll",
    () => {
      if (isZoomed) zoomOut();
    },
    { passive: true },
  );

  function zoomIn(item) {
    if (isZoomed) return;
    isZoomed = true;
    currentZoomItem = item;
    originalParent = item.parentNode;
    originalSib = item.nextSibling;

    // Create placeholder to maintain layout
    const placeholder = item.cloneNode(true);
    placeholder.classList.add("placeholder-item");
    originalParent.insertBefore(placeholder, item);
    item.placeholderNode = placeholder;

    // Record state
    const state = Flip.getState(item);

    // Show overlay and zoom item
    overlay.classList.add("active");
    item.classList.add("zoomed-content");
    document.body.appendChild(item);

    Flip.from(state, {
      duration: 0.3,
      ease: "circ.out",
      scale: true,
    });
  }

  function zoomOut() {
    if (!isZoomed || !currentZoomItem) return;

    const state = Flip.getState(currentZoomItem);

    overlay.classList.remove("active");
    currentZoomItem.classList.remove("zoomed-content");

    // Put back in place and remove placeholder
    if (currentZoomItem.placeholderNode) {
      originalParent.replaceChild(
        currentZoomItem,
        currentZoomItem.placeholderNode,
      );
      currentZoomItem.placeholderNode = null;
    } else if (originalSib) {
      originalParent.insertBefore(currentZoomItem, originalSib);
    } else {
      originalParent.appendChild(currentZoomItem);
    }

    Flip.from(state, {
      duration: 0.3,
      ease: "circ.out",
      absolute: true,
      clearProps: "all",
      onComplete: () => {
        isZoomed = false;
        currentZoomItem = null;
      },
    });
  }
}

// Auto-init if we're in this specific project
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".video-stack-item")) {
    initZoom(".video-stack-item");
  }
});
