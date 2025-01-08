const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next-01');
const prevButton = document.querySelector('.prev-01');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 2; // Começa com o terceiro item (do meio)

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

function showNextSlide() {
    currentIndex = (currentIndex + 1) % items.length; // Volta para o começo se chegar ao final
    updateCarousel(currentIndex);
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Volta ao final se voltar ao começo
    updateCarousel(currentIndex);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(currentIndex);
    });
});

// Loop contínuo - sem intervalo para não parar
setInterval(() => {
    showNextSlide();
}, 3000);

// Atualiza o carrossel na inicialização
updateCarousel(currentIndex);
