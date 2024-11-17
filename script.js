// Comportamiento de la carta
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const triangleTop = document.querySelector('.triangle');
const letter = document.querySelector('.letter');
const heart = document.querySelector('.heart');

openBtn.addEventListener('click', () => {
  triangleTop.style.display = 'none'; // Esconde el triángulo superior
  letter.style.display = 'flex'; // Muestra la hoja
  heart.style.display = 'none'; // Esconde el corazón
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

closeBtn.addEventListener('click', () => {
  triangleTop.style.display = 'block'; // Vuelve a mostrar el triángulo superior
  letter.style.display = 'none'; // Esconde la hoja
  heart.style.display = 'block'; // Vuelve a mostrar el corazón
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline-block';
});

// Lluvia de corazones
const heartContainer = document.getElementById('heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-fall');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartContainer.appendChild(heart);

  // Elimina el corazón después de que caiga
  setTimeout(() => {
    heart.remove();
  }, 5000);
}