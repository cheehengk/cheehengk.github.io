/** @format */

(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("nav-toggle");
  var mobile = document.getElementById("nav-mobile");

  /* Sticky nav border on scroll */
  function onScroll() {
    if (window.scrollY > 8) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  function closeMobile() {
    mobile.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = mobile.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  Array.prototype.forEach.call(
    mobile.querySelectorAll(".nav__mobile-link"),
    function (link) {
      link.addEventListener("click", closeMobile);
    }
  );

  /* Scrollspy — highlight active nav link */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  var sections = links
    .map(function (l) {
      return document.getElementById(l.getAttribute("data-nav"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.toggle(
              "is-active",
              l.getAttribute("data-nav") === e.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      spy.observe(s);
    });
  }

  /* Scroll reveal */
  var revealTargets = document.querySelectorAll(
    ".entry, .skills__group, .hero__inner"
  );
  Array.prototype.forEach.call(revealTargets, function (el) {
    el.classList.add("reveal");
  });
  if ("IntersectionObserver" in window) {
    var revealer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    Array.prototype.forEach.call(revealTargets, function (el) {
      revealer.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealTargets, function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Footer year */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
