    // Função para controlar o slider individual
    function initializeSlider(sliderId) {
        let currentIndex = 0;
        const slides = document.querySelectorAll(`#${sliderId} .slide`);

        function showNextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }

        setInterval(showNextSlide, 5000); // Troca de slide a cada 3 segundos
    }

    // Inicializa cada slider
    initializeSlider('slider1');
    initializeSlider('slider2');
    initializeSlider('slider3');