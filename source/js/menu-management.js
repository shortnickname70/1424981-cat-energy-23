const burgerButton = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

mainNav.classList.add("main-nav--closed");

burgerButton.onclick = function()
{mainNav.classList.toggle("main-nav--closed");
mainNav.classList.toggle("main-nav--opened");

};


