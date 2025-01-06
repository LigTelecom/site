document.addEventListener('DOMContentLoaded', function() {
  // Primeiro Carrossel (Slides)
  const slides1 = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevButton1 = document.getElementById('prev');
  const nextButton1 = document.getElementById('next');

  let currentIndex1 = 0;
  const totalSlides = images.length;

  // Duplicando a primeira imagem para criar o loop infinito
  slides1.innerHTML += slides1.innerHTML;

  function updateSlide(position) {
    slides1.style.transition = 'transform 0.5s ease';
    slides1.style.transform = `translateX(-${position * 100}%)`;
  }

  function showNextSlide1() {
    currentIndex1++;
    if (currentIndex1 >= totalSlides) {
      setTimeout(() => {
        slides1.style.transition = 'none'; // Remove a transição ao voltar para a primeira imagem
        currentIndex1 = 0;
        updateSlide(currentIndex1);
      }, 500); // Aguarda o tempo da animação para voltar ao começo
    } else {
      updateSlide(currentIndex1);
    }
  }

  function showPrevSlide1() {
    currentIndex1--;
    if (currentIndex1 < 0) {
      setTimeout(() => {
        slides1.style.transition = 'none';
        currentIndex1 = totalSlides - 1;
        updateSlide(currentIndex1);
      }, 500);
    } else {
      updateSlide(currentIndex1);
    }
  }

  nextButton1.addEventListener('click', showNextSlide1);
  prevButton1.addEventListener('click', showPrevSlide1);

  // Auto-slide para o primeiro carrossel
  setInterval(showNextSlide1, 5000); // Muda a imagem a cada 5 segundos
});

// Segundo Carrossel (Carrousel Track)
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton2 = document.querySelector('.next-01');
const prevButton2 = document.querySelector('.prev-01');
const indicators = document.querySelectorAll('.indicator');

let currentIndex2 = 2; // Começa com o terceiro item (do meio)

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        const offset = i - index;
        if (offset === 0) {
            item.classList.add('active');
        }
    });

    // Manter o carrossel em loop contínuo
    const offsetPercentage = -20 * (index); // Desloca os itens para a esquerda
    track.style.transform = `translateX(${offsetPercentage}%)`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function showNextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % items.length; // Volta para o começo se chegar ao final
    updateCarousel(currentIndex2);
}

function showPrevSlide2() {
    currentIndex2 = (currentIndex2 - 1 + items.length) % items.length; // Volta ao final se voltar ao começo
    updateCarousel(currentIndex2);
}

nextButton2.addEventListener('click', showNextSlide2);
prevButton2.addEventListener('click', showPrevSlide2);

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex2 = i;
        updateCarousel(currentIndex2);
    });
});

// Loop contínuo para o segundo carrossel
setInterval(() => {
    showNextSlide2();
}, 3000);

// Atualiza o carrossel na inicialização
updateCarousel(currentIndex2);

