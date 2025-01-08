document.addEventListener('DOMContentLoaded', function () {
  // Função genérica para configurar sliders
  function setupSlider(sliderContainer, prevButtonId, nextButtonId) {
    const slides = sliderContainer.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);

    let currentIndex = 0;
    const totalSlides = images.length;

    // Duplicando a primeira imagem para criar o loop infinito
    slides.innerHTML += slides.innerHTML;

    function updateSlide(position) {
      slides.style.transition = 'transform 0.5s ease';
      slides.style.transform = `translateX(-${position * 100}%)`;
    }

    function showNextSlide() {
      currentIndex++;
      if (currentIndex >= totalSlides) {
        setTimeout(() => {
          slides.style.transition = 'none';
          currentIndex = 0;
          updateSlide(currentIndex);
        }, 500);
      } else {
        updateSlide(currentIndex);
      }
    }

    function showPrevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
        setTimeout(() => {
          slides.style.transition = 'none';
          currentIndex = totalSlides - 1;
          updateSlide(currentIndex);
        }, 500);
      } else {
        updateSlide(currentIndex);
      }
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Auto-slide
    setInterval(showNextSlide, 5000);
  }

  // Configurar sliders separadamente
  const desktopSlider = document.querySelector('.org_slid');
  const mobileSlider = document.querySelector('.org_slid_mobile');

  setupSlider(desktopSlider, 'prev-desktop', 'next-desktop');
  setupSlider(mobileSlider, 'prev-mobile', 'next-mobile');
});
