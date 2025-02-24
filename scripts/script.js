const sliderElement = document.querySelector('.slider__container');
const prevButtonElement = document.querySelector('.slider__button_prev');
const nextButtonElement = document.querySelector('.slider__button_next');
const slideElements = Array.from(sliderElement.querySelectorAll('img'));

const slideCount = slideElements.length;
let slideIndex = 0;


function onShowPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function onShowNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slideElements.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slider__img_active');
    } else {
      slide.classList.remove('slider__img_active');
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    onShowPreviousSlide();
  } else if (event.key === 'ArrowRight') {
    onShowNextSlide();
  }
});

updateSlider();

prevButtonElement.addEventListener('click', onShowPreviousSlide);
nextButtonElement.addEventListener('click', onShowNextSlide);