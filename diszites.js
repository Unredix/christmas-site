document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      document.getElementById("disz").classList.add("animation2");
      document.getElementById("disz-text").classList.add("animation2");
      document.getElementById("disz-img").classList.add("animation2");
    }
    if (window.scrollY > 300) {
      document.getElementById("disz-1").classList.add("animation2");
      document.getElementById("disz-text-1").classList.add("animation2");
      document.getElementById("disz-img-1").classList.add("animation2");
    }
    if (window.scrollY > 700) {
      document.getElementById("disz-2").classList.add("animation2");
      document.getElementById("disz-text-2").classList.add("animation2");
      document.getElementById("disz-img-2").classList.add("animation2");
    }
    if (window.scrollY > 1100) {
      document.getElementById("disz-3").classList.add("animation2");
      document.getElementById("disz-text-3").classList.add("animation2");
      document.getElementById("disz-img-3").classList.add("animation2");
    }
  });
});
