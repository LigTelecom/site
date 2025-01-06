// Referência ao botão
const pageUpButton = document.getElementById('pageUpButton');

// Exibir o botão após rolar 300px
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    pageUpButton.classList.add('show'); // Adiciona a classe para exibir o botão com efeito
  } else {
    pageUpButton.classList.remove('show'); // Remove a classe para esconder o botão
  }
});

// Scroll para o topo ao clicar no botão
pageUpButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});