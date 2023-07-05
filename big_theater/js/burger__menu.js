const mobileMenuId = document.querySelector('#mobileMenuId');
const btnBurger = document.querySelector('#btnBurger');
const btnBurgerClose = document.querySelector('#btnBurgerClose');

btnBurger.onclick = () => {
    mobileMenuId.classList.add('mobile__menu-active');
}
btnBurgerClose.onclick = () => {
    mobileMenuId.classList.remove('mobile__menu-active');
}
