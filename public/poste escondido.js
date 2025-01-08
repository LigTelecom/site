const postContent = document.getElementById('postContent');
const toggleButton = document.getElementById('toggleButton');
const gradientOverlay = document.getElementById('gradientOverlay');

toggleButton.addEventListener('click', () => {
    const isExpanded = postContent.classList.toggle('expanded');
    toggleButton.textContent = isExpanded ? 'Fechar' : 'Ver mais';
    gradientOverlay.style.opacity = isExpanded ? '0' : '1';
});