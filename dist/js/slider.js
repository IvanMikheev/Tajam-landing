function sliderInit(className, numToShow) {
    const centerSlide = Math.floor(numToShow / 2);
    const slides = document.querySelector(className);
    document.querySelector(className).classList.add('slider');
    //console.log(slides.children);
    
    updateSlider(slides, numToShow, centerSlide);

}

function slide() {

}

function updateSlider(slides, numToShow, centerSlide) {
    let i = 0;
    Array.from(slides.children).forEach(slide => {
        if (i < numToShow) {
            slide.classList.add('slider-show');
        } else {
            slide.classList.add('slider-hide');
        }

        if (i == centerSlide) {
            slide.classList.add('slider-active');
        }
        i++;
    });
}
