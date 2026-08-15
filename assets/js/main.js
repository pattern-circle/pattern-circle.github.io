document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-ready");

  // Smooth-scroll all in-page anchor links with live header-height offset
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();

      // Reset animation so it replays on arrival
      const animEl = target.hasAttribute("data-animate") ? target : target.querySelector("[data-animate]");
      if (animEl) {
        animEl.classList.remove("is-visible");
      }

      const header = document.querySelector(".site-header");
      const offset = header ? header.offsetHeight + 16 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });

      // Close mobile nav if open
      const nav = document.getElementById("mainNav");
      if (nav && nav.classList.contains("show")) {
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) toggler.click();
      }
    });
  });
});
