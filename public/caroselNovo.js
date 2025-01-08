document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carousel-01");
    const track = carousel.querySelector(".carousel-track");
    const items = Array.from(track.children);
    const prevButton = document.querySelector("#prev-01");
    const nextButton = document.querySelector("#next-01");
  
    const itemWidth = items[0].getBoundingClientRect().width;
    const totalItems = items.length;
  
    let currentIndex = 0;
  
    // Clonar os itens no início e no final
    items.slice(0, 5).forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  
    items.slice(-5).forEach((item) => {
      const clone = item.cloneNode(true);
      track.prepend(clone);
    });
  
    const newItems = Array.from(track.children);
    const newTotalItems = newItems.length;
  
    // Reposicionar o carrossel para o início "real"
    track.style.transition = "none";
    track.style.transform = `translateX(-${5 * itemWidth}px)`;
  
    function moveCarousel() {
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(-${(currentIndex + 5) * itemWidth}px)`;
    }
  
    function nextSlide() {
      currentIndex++;
      moveCarousel();
  
      // Reiniciar para o início "real" sem animação
      if (currentIndex === totalItems) {
        setTimeout(() => {
          track.style.transition = "none";
          currentIndex = 0;
          track.style.transform = `translateX(-${5 * itemWidth}px)`;
        }, 500);
      }
    }
  
    function prevSlide() {
      currentIndex--;
      moveCarousel();
  
      // Reiniciar para o final "real" sem animação
      if (currentIndex < 0) {
        setTimeout(() => {
          track.style.transition = "none";
          currentIndex = totalItems - 1;
          track.style.transform = `translateX(-${(currentIndex + 5) * itemWidth}px)`;
        }, 500);
      }
    }
  
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  
    // Movimento automático
    let autoSlide = setInterval(nextSlide, 3000);
  
    // Pausar o movimento automático ao interagir com os botões
    [prevButton, nextButton].forEach((button) => {
      button.addEventListener("click", () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 3000);
      });
    });
  });
  