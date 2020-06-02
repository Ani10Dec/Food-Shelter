/*============ Animation on Burger =============*/
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navSlideX = () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
};
burger.addEventListener(`click`, navSlideX);


/*============ Click on Menu Links =============*/
var navLinks_li_a = document.querySelectorAll(".nav-links li a");
navLinks_li_a.forEach(el => {
    el.addEventListener("click", () => {
        nav.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
    })
});


/*============ Animation on Scroll =============*/
const navBar = document.querySelector("nav");
const navSlideY = () => {
    navBar.classList.toggle('active-navbar', window.scrollY > 0);
};
window.addEventListener("scroll", navSlideY);