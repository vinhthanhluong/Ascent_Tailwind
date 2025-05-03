var wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 100,
  mobile: true,
  live: true,

  scrollContainer: null,
  resetAnimation: true,
});
wow.init();

// header
const header = document.querySelector("header");
document.addEventListener("scroll", function (e) {
  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const btnHamburger = document.querySelector(".btn-hamburger");
const btnHamburgerClose = document.querySelector(".btn-hamburger-close");
btnHamburger.addEventListener("click", function () {
  const overplay = document.querySelector(".menu-overplay");
  const menu = document.querySelector(".menu-content");

  overplay.classList.remove("invisible");
  overplay.classList.add("visible");

  menu.classList.remove("-right-full");
  menu.classList.add("right-0");
});
btnHamburgerClose.addEventListener("click", function () {
  const overplay = document.querySelector(".menu-overplay");
  const menu = document.querySelector(".menu-content");

  overplay.classList.remove("visible");
  overplay.classList.add("invisible");

  menu.classList.remove("right-0");
  menu.classList.add("-right-full");
});

const dropdown = document.querySelectorAll(".dropdown a");
const dropdownItem = document.querySelectorAll(".dropdown .dropdown-item");

dropdown.forEach((drop) => {
  drop.addEventListener("click", function () {
    dropdownItem.forEach((item) =>
      item.classList.remove("opacity-100", "visible", "max-h-100")
    );
    dropdownItem.forEach((item) =>
      item.classList.add("opacity-0", "invisible", "max-h-0")
    );
    drop.nextElementSibling.classList.remove(
      "opacity-0",
      "invisible",
      "max-h-0"
    );
    drop.nextElementSibling.classList.add(
      "opacity-100",
      "visible",
      "max-h-100"
    );
  });
});

const portfolioHeads = document.querySelectorAll(".portfolio .target-tab");
const portfolioContents = document.querySelectorAll(
  ".portfolio [data-target]:not(.target-tab)"
);
portfolioHeads.forEach((button) => {
  button.addEventListener("click", function (e) {
    const data = button.getAttribute("data-target");
    portfolioHeads.forEach((btn) => btn.classList.remove("portfolio-active"));
    button.classList.add("portfolio-active");

    portfolioContents.forEach((content) => {
      if (content.getAttribute("data-target") === data) {
        content.classList.remove(
          "absolute",
          "invisible",
          "translate-y-10",
          "opacity-0"
        );
        content.classList.add(
          "relative",
          "visible",
          "translate-y-0",
          "opacity-100"
        );
      } else {
        content.classList.remove(
          "relative",
          "visible",
          "translate-y-0",
          "opacity-100"
        );
        content.classList.add(
          "absolute",
          "invisible",
          "translate-y-10",
          "opacity-0"
        );
      }
    });
  });
});

const service_swiper = new Swiper(".service-swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  pagination: {
    el: ".service-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    10240: {
      slidesPerView: 3,
    },
    1290: {
      slidesPerView: 3,
    },
  },
});

const faqAccording = document.querySelectorAll(".faq .according-btn");
faqAccording.forEach((el) => {
  el.addEventListener("click", function () {
    const data = el.parentElement.getAttribute("data-open");
    faqAccording.forEach((acd) =>
      acd.parentElement.setAttribute("data-open", "false")
    );
    el.parentElement.setAttribute("data-open", "true");
  });
});

$(".single-item").slick({
  autoplay: false,
});
