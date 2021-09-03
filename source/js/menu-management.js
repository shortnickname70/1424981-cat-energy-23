const burgerButton = document.querySelector('.main-navigation__toggle');
const mainNav = document.querySelector('.page-header__main-navigation');

burgerButton.addEventListener('click', function() {
  mainNav.classList.toggle('main-navigation--opened');
})
