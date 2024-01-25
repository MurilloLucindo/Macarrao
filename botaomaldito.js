let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function mover(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

window.onload = function() {
  mover(0);
}