'use strict';

const reviewsText = document.querySelectorAll('.review');
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const sliderActive = document.querySelector('.slider-active');
const sliderPrev = document.querySelector('.slider-control-left');
const sliderNext = document.querySelector('.slider-control-right');
const slideIndicator = document.querySelectorAll('.slider-indicators li');

const activeItemWidth = parseFloat(getComputedStyle(sliderActive).width);
const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width);
const itemWidth = parseFloat(getComputedStyle(sliderItems[1]).width);
const startPosition = itemWidth * 2;
let currentIndex = 0;
let isInProgress = false;
let transform = 0;
let items = [];

initSlider();

// filling items
sliderItems.forEach(function (item, index) {
    items.push({ item: item, position: index});
});

// prev button event
sliderPrev.addEventListener('click', () => {
    if (isInProgress) return false;    
    const nextIndex = currentIndex <= 0 ? reviewsText.length - 1 : currentIndex - 1;
    
    slidePhotos(nextIndex);
    slideText(nextIndex);
});

// next button event
sliderNext.addEventListener('click', () => {
    if (isInProgress) return false; 
    const nextIndex = currentIndex >= reviewsText.length - 1 ? 0 : currentIndex + 1;
    
    slidePhotos(nextIndex);
    slideText(nextIndex);
});

// items event
sliderItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (currentIndex === items[index].position || isInProgress) return false;
   
        slidePhotos(items[index].position);
        slideText(items[index].position);     
    });
});

// indicators event
slideIndicator.forEach((item) => {
    item.addEventListener('click', () => {
        if (currentIndex === parseInt(item.dataset.slideTo) || isInProgress) return false;

        slidePhotos(parseInt(item.dataset.slideTo));
        slideText(parseInt(item.dataset.slideTo)); 
    });
});

function initSlider() {    
    document.querySelector('.slider-container').style.width = itemWidth * 4 + activeItemWidth + 'px';
    transform = startPosition;
    sliderWrapper.style.transform = 'translateX(' + transform + 'px)';
}

function slideText(nextIndex) {
    isInProgress = true;
    reviewsText[currentIndex].style.opacity = 0;       
    slideIndicator[currentIndex].classList.toggle('active');
    slideIndicator[nextIndex].classList.toggle('active');
    setTimeout(() => {
        // hide current
        reviewsText[currentIndex].style.opacity = '';
        reviewsText[currentIndex].classList.toggle('active');
        reviewsText[currentIndex].classList.toggle('hidden'); 

        // show next 
        reviewsText[nextIndex].classList.toggle('active');
        reviewsText[nextIndex].classList.toggle('hidden');    
        currentIndex = nextIndex;
        isInProgress = false;
    }, 500);
}

function slidePhotos(nextIndex) {
    transform = -nextIndex * itemWidth + startPosition;    
    sliderWrapper.style.transform = 'translateX(' + transform + 'px)';
    items[currentIndex].item.classList.toggle('slider-active');
    items[nextIndex].item.classList.toggle('slider-active');
}