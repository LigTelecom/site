// Script para gerenciar o primeiro modal
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.open-modal1'); // Seleciona todos os botões com a classe "open-modal1"
    const closeModal1 = document.getElementById('closeModal1');
    const modal1 = document.getElementById('appModal');

    // Verificar se os elementos necessários existem
    if (modal1 && closeModal1) {
        // Adicionar evento de clique a cada botão que abre o Modal 1
        openButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal1.style.display = 'flex';
            });
        });

        // Fechar o Modal 1 ao clicar no botão de fechar
        closeModal1.addEventListener('click', () => {
            modal1.style.display = 'none';
        });

        // Fechar o Modal 1 ao clicar fora do conteúdo
        window.addEventListener('click', (e) => {
            if (e.target === modal1) {
                modal1.style.display = 'none';
            }
        });
    } else {
        console.error('O modal ou o botão de fechamento não foram encontrados no DOM.');
    }
});
