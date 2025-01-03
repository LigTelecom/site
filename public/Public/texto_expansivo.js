function toggleTexto(id) {
  // Fecha todos os textos abertos
  const textos = document.querySelectorAll('.texto');
  textos.forEach((texto) => {
    if (texto.id !== id) {
      texto.style.display = 'none';
    }
  });

  // Alterna o texto clicado
  const textoAtual = document.getElementById(id);
  textoAtual.style.display = textoAtual.style.display === 'block' ? 'none' : 'block';
}

