let btnMenu = document.getElementById('btncno'); // Botão de abrir o menu
let Menu = document.getElementById('trb_conosco'); // Menu principal
let overlay = document.getElementById('overflow6'); // Overlay para fechar o menu

// Abrir o menu ao clicar no botão
btnMenu.addEventListener('click', () => {
    Menu.classList.add('abrir-tbr-conosco');
});

// Fechar o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    Menu.classList.remove('abrir-tbr-conosco');
});

