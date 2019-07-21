sliderInit('.review-slider', 5);

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
menuItem.forEach(item => item.addEventListener('click', toggleMenu));

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');

        showMenu = false;
    }
}