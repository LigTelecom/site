const socialMedia = document.getElementById('socialMedia');
const work = document.getElementById('work');
const videos = document.getElementById('videos');
const games = document.getElementById('games');
const devices = document.getElementById('devices');
const deviceCount = document.getElementById('deviceCount');
const speedDisplay = document.querySelector('.speed-display');
const needle = document.querySelector('.meter-needle');

// Função para calcular velocidade
function calculateSpeed() {
  let speed = 0; // Velocidade base

  // Valores agregados baseados na quantidade de dispositivos conectados
  const deviceValue = calculateDeviceImpact(devices.value);

  if (socialMedia.checked) speed += deviceValue.socialMedia;
  if (work.checked) speed += deviceValue.work;
  if (videos.checked) speed += deviceValue.videos;
  if (games.checked) speed += deviceValue.games;

  // Aumenta com a quantidade de dispositivos
  // speed += devices.value * 10;

  // Ajusta visualização
  if (speed > 1000) speed = 1000; // Limite de 1000 MEGA

  speedDisplay.textContent = `${speed}MEGA`;
  updateNeedle(speed);
}

document.getElementById("socialMedia").checked = true;
document.getElementById("socialMedia").disabled = true;

// Função para calcular impacto baseado no número de dispositivos
function calculateDeviceImpact(deviceCount) {
  let values = { socialMedia: 20, work: 50, videos: 100, games: 150 };

  if (deviceCount <= 4) {
    values = { socialMedia: 200, work: 200, videos: 100, games: 200 };
  } else if (deviceCount > 4 && deviceCount <= 7) {
    values = { socialMedia: 300, work: 100, videos: 100, games: 300 };
  } else if (deviceCount > 7) {
    values = { socialMedia: 350, work: 100, videos: 100, games: 250 };
  }

  return values;
}

// Atualiza a agulha do velocímetro
function updateNeedle(speed) {
  const angle = (speed / 1000) * 180 - 45;
  needle.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
}

// Atualiza contagem de dispositivos
devices.addEventListener('input', () => {
  deviceCount.textContent = devices.value;
  calculateSpeed();
});

// Adiciona eventos aos switches
[socialMedia, work, videos, games].forEach((input) => {
  input.addEventListener('change', calculateSpeed);
});

// Inicializa a velocidade
calculateSpeed();
