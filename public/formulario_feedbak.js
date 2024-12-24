const button = document.getElementById('bt_feedebeck');
const content = document.getElementById('elemte_feedebck');

button.addEventListener('click', () => {
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden'); // Mostra o conteúdo
    button.textContent = 'Esconder';
  } else {
    content.classList.add('hidden'); // Esconde o conteúdo
    button.textContent = 'Envie seu feedebeck';
  }
});