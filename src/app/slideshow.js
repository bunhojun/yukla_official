let slideIndex = 1;

function showOneSlide(n) {
  const slides = document.getElementsByClassName('js-slides');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].classList.add('hide');
  }
  slides[slideIndex - 1].classList.remove('hide');
}

function plusSlides() {
  showOneSlide(slideIndex += 1);
}

function minusSlides() {
  showOneSlide(slideIndex -= 1);
}

export default function initSlideShow() {
  showOneSlide(slideIndex);
  const prevButton = document.querySelector('.js-prev-button');
  const nextButton = document.querySelector('.js-next-button');
  prevButton.addEventListener('click', minusSlides);
  nextButton.addEventListener('click', plusSlides);
}
