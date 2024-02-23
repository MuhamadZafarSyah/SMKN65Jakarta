var swiper = new Swiper(".mySwiper3", {
  effect: "cards",
  grabCursor: true,
});

let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}
document.addEventListener("DOMContentLoaded", function () {
  subMenu.classList.remove("open-menu");
});
AOS.init();
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

feather.replace();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
AOS.init();
