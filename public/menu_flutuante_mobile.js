// Seleciona o item que ficará fixo
const itemFixo = document.getElementById('itemFixo');


// Função que verifica a posição de rolagem
window.onscroll = function() {
  if (window.scrollY > 300) {
    itemFixo.classList.add('fixed'); // Adiciona a classe para torná-lo fixo e visível
  } else {
    itemFixo.classList.remove('fixed'); // Remove a classe se estiver no topo
  }
};


