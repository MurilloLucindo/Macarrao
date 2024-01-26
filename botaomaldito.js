let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function mover(n) {
  slideIndex += n; // slideIndex = slideIndex + n
  if (slideIndex >= slides.length) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = slides.length - 1}

  // for (let i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }

  // slides[slideIndex].style.display = "block";

  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// document.getElementById('modeSelect').addEventListener('change', function() {
//   // Remova todas as classes de tema existentes
//   document.documentElement.className = '';
//   // Adicione a classe de tema selecionada
//   document.documentElement.classList.add(this.value + '-mode');
// });

document.querySelector('.hamburger').addEventListener('click', function() {
  document.getElementById('themePanel').style.display = 'block';
});

document.querySelector('.hamburger').addEventListener('click', function() {
  document.getElementById('themePanel').classList.toggle('show');
});

document.getElementById('themePanel').addEventListener('click', function(e) {
  if (e.target.tagName === 'A') {
      // Remova todas as classes de tema existentes
      document.documentElement.className = '';
      // Adicione a classe de tema selecionada
      document.documentElement.classList.add(e.target.dataset.theme + '-mode');
      // Oculte o painel de temas
      this.classList.remove('show');
      e.preventDefault();
  }
});

window.onload = function() {
  mover(0);
}