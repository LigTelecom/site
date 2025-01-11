document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tabs-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove a classe ativa de todos os botões
        tabButtons.forEach((btn) => btn.classList.remove("active"));
  
        // Adiciona a classe ativa ao botão clicado
        button.classList.add("active");
  
        // Mostra o conteúdo correspondente
        const targetTab = button.dataset.tab;
        tabContents.forEach((content) => {
          if (content.id === targetTab) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  });
  