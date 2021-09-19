const burgerButton = document.querySelector(".main-nav__toggle");
const mainNav = document.querySelector(".main-nav");

// mainNav.classList.remove('.page-header__main-navigation');

// document.querySelector('.page-header__main-navigation').classList.remove('.page-header__main-navigation');
mainNav.classList.add("main-nav--closed");

burgerButton.onclick = function()
{mainNav.classList.toggle("main-nav--closed");
mainNav.classList.toggle("main-nav--opened");

};

// checkbox.classList.add('navigation__toggle-checkbox--hidden');
// burgerButton.classList.add('main-navigation__toggle--show');
