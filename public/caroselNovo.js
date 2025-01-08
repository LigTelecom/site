document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel');
    const track = carouselContainer.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevButton = document.getElementById('prev-01');
    const nextButton = document.getElementById('next-01');

    const itemsVisible = 5; // Quantidade de itens visíveis
    let currentIndex = 0;
    const totalItems = items.length;

    // Configura a largura do track e dos itens
    track.style.display = 'flex';
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.width = `${(100 * totalItems) / itemsVisible}%`;

    items.forEach((item) => {
        item.style.flex = `0 0 ${100 / itemsVisible}%`; // Cada item ocupa 1/5 da largura visível
    });

    function updateCarousel(index) {
        track.style.transform = `translateX(-${(index * 100) / itemsVisible}%)`;
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex > totalItems - itemsVisible) {
            currentIndex = 0; // Reinicia no início
        }
        updateCarousel(currentIndex);
    }

    function showPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalItems - itemsVisible; // Vai para o último conjunto visível
        }
        updateCarousel(currentIndex);
    }

    // Navegação manual
    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Navegação automática
    setInterval(showNextSlide, 3000); // Muda automaticamente a cada 3 segundos
});
