let btnMenu = document.getElementById('btnmenu'); // Botão para abrir o menu geral
let btnMenuflut = document.getElementById('itemFixo');
let Menu = document.getElementById('menumobile'); // Menu geral
let overlay = document.getElementById('overflow'); // Overlay para fechar o menu geral
let submenuToggle = document.querySelector('.toggle-submenu'); // Botão "Sobre nós"


// Abrir o menu geral
btnMenu.addEventListener('click', () => {
    Menu.classList.add('abrir-menu');
});

// btnMenuflut.addEventListener('click', () => {
//     Menu.classList.add('abrir-menu');
// });

// Fechar o menu geral ao clicar no overlay
overlay.addEventListener('click', () => {
    Menu.classList.remove('abrir-menu');
});

// Fechar o menu geral ao clicar em qualquer botão que não seja "Sobre nós"
Menu.addEventListener('click', (event) => {
    if (!event.target.classList.contains('toggle-submenu')) {
        Menu.classList.remove('abrir-menu');
    }
});
