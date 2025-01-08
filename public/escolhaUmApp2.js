// Script para gerenciar o segundo modal
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.open-modal2'); // Seleciona todos os botões com a classe "open-modal2"
    const closeModal2 = document.getElementById('closeModal2');
    const modal2 = document.getElementById('modal2');

    // Verificar se os elementos necessários existem
    if (modal2 && closeModal2) {
        // Adicionar evento de clique a cada botão que abre o Modal 2
        openButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal2.style.display = 'flex';
            });
        });

        // Fechar o Modal 2 ao clicar no botão de fechar
        closeModal2.addEventListener('click', () => {
            modal2.style.display = 'none';
        });

        // Fechar o Modal 2 ao clicar fora do conteúdo
        window.addEventListener('click', (e) => {
            if (e.target === modal2) {
                modal2.style.display = 'none';
            }
        });
    } else {
        console.error('O modal ou o botão de fechamento não foram encontrados no DOM.');
    }
});
