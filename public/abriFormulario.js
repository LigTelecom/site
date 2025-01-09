// Seleciona os elementos do DOM
const openFormBtn = document.getElementById("openFormBtn");
// const openFormBtnmobi = document.getElementById("openFormBtnmobi");
const cardContainer = document.getElementById("cardContainer");
const closeCard = document.getElementById("closeCard");

// Exibe o card ao clicar no botão "Trabalhe Conosco"
openFormBtn.addEventListener("click", () => {
    cardContainer.style.display = "flex"; // Torna o card visível
});

// openFormBtnmobi.addEventListener("click", () => {
//     cardContainer.style.display = "flex"; // Torna o card visível
// });

// Fecha o card ao clicar no botão de fechar (&times;)
closeCard.addEventListener("click", () => {
    cardContainer.style.display = "none"; // Esconde o card
});

// Fecha o card ao clicar fora dele (na área escura)
cardContainer.addEventListener("click", (event) => {
    if (event.target === cardContainer) {
        cardContainer.style.display = "none"; // Esconde o card
    }
});
