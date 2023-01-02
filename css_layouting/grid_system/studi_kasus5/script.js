const hamburgerMenu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menu ul');

hamburgerMenu.addEventListener('click', function () {
    nav.classList.toggle('slide');
});