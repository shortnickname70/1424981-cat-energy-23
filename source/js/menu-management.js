const burgerButton = document.querySelector('.main-navigation__toggle');
const mainNav = document.querySelector('.page-header__main-navigation');

mainNav.classList.remove('.page-header__main-navigation');

burgerButton.onclick = function()
{mainNav.classList.toggle("main-navigation--closed");
mainNav.classList.toggle("main-navigation--opened");

};

// checkbox.classList.add('navigation__toggle-checkbox--hidden');
// burgerButton.classList.add('main-navigation__toggle--show');
