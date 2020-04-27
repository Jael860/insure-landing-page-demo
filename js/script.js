const openNav = document.querySelector("#open-icon");
const closeNav = document.querySelector("#close-icon");
const mobileNav = document.querySelector("#mobile-navigation");
const main = document.querySelector(".main");
const information = document.querySelector(".information");
const howWeWork = document.querySelector(".how-we-work");
const footer = document.querySelector(".footer");

function showMobileNav() {
  [openNav, main, information, howWeWork, footer].forEach((el) => {
    el.setAttribute("style", "display: none");
  });
  closeNav.setAttribute("style", "display: block");
  mobileNav.classList.add("display-mobile-navigation");
  mobileNav.classList.remove("hide-mobile-navigation");
}

const widthMediaQuery = window.matchMedia("(max-width: 800px)");

function hideMobileNav() {
  [main, information, howWeWork, footer].forEach((el) => {
    el.setAttribute("style", "display: block");
  });
  closeNav.setAttribute("style", "display: none");
  mobileNav.classList.remove("display-mobile-navigation");
  mobileNav.classList.add("hide-mobile-navigation");
  if (widthMediaQuery.matches) {
    openNav.setAttribute("style", "display: block");
  } else {
    openNav.setAttribute("style", "display: none");
  }
}

openNav.addEventListener("click", showMobileNav);
closeNav.addEventListener("click", hideMobileNav);

widthMediaQuery.addListener(hideMobileNav);
