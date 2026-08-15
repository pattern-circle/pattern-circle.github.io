/**
 * Scroll-reveal animation
 * Adds .is-visible when a [data-animate] element enters the viewport,
 * removes it when it leaves — so the animation replays every time.
 */
(function () {
  "use strict";

  const THRESHOLD = 0.15;

  function buildObserver() {
    return new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: THRESHOLD }
    );
  }

  function init() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-animate]").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = buildObserver();
    document.querySelectorAll("[data-animate]").forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

