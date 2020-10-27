let slideIndex = 1;

function showDiv(n) {
  const x = document.getElementsByClassName('js-slides');
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (let i = 0; i < x.length; i += 1) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

function plusSlides() {
  showDiv(slideIndex += 1);
}

function minusSlides() {
  showDiv(slideIndex -= 1);
}
export default function initSlideShow() {
  showDiv(slideIndex);
  const prevButton = document.querySelector('.js-prev-button');
  const nextButton = document.querySelector('.js-next-button');
  prevButton.addEventListener('click', minusSlides);
  nextButton.addEventListener('click', plusSlides);
}
