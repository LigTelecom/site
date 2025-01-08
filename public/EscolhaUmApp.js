const modal = document.getElementById('appModal');
const openButtons = document.querySelectorAll('.modal-button'); // Seleciona todos os botões
const closeButton = document.querySelector('.close-button');

// Adiciona evento de clique a cada botão
openButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Fecha o modal ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora dele
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
