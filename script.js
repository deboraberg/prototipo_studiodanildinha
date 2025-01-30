const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carrossel-images img');
  const totalSlides = slides.length;

  // Atualiza o índice da imagem visível
  currentIndex += direction;

  // Garante que o índice não ultrapasse os limites
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Muda a posição das imagens para mostrar a imagem atual
  const offset = -currentIndex * 100;
  document.querySelector('.carrossel-images').style.transform = `translateX(${offset}%)`;
}
