const burgerButton = document.querySelector('.main-navigation__toggle');
const mainNav = document.querySelector('.page-header__main-navigation');
const checkbox = document.querySelector('.navigation__toggle-checkbox');

burgerButton.addEventListener('click', function() {
  mainNav.classList.toggle('main-navigation--opened');
})

// checkbox.classList.add('navigation__toggle-checkbox--hidden');
// burgerButton.classList.add('main-navigation__toggle--show');
