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
  const deviceValue = calculateDeviceImpact(Number(devices.value));
  let total = 0;

  if (socialMedia.checked) total += deviceValue.socialMedia;
  if (work.checked) total += deviceValue.work;
  if (videos.checked) total += deviceValue.videos;
  if (games.checked) total += deviceValue.games;

  // Aplica o limite máximo para a soma total
  const maxLimit = getMaxLimit(Number(devices.value));
  const adjustedSpeed = Math.min(total, maxLimit);

  // Atualiza a visualização
  speedDisplay.textContent = `${adjustedSpeed}MEGA`;
  updateNeedle(adjustedSpeed);
}

document.getElementById("socialMedia").checked = true;
document.getElementById("socialMedia").disabled = true;

// Função para calcular impacto baseado no número de dispositivos
function calculateDeviceImpact(deviceCount) {
  if (deviceCount >= 1 && deviceCount <= 4) {
    return { socialMedia: 200, work: 200, videos: 100, games: 100 };
  } else if (deviceCount >= 5 && deviceCount <= 7) {
    return { socialMedia: 300, work: 100, videos: 100, games: 100 };
  } else if (deviceCount > 7) {
    return { socialMedia: 500, work: 300, videos: 300, games: 300 };
  } else {
    return { socialMedia: 0, work: 0, videos: 0, games: 0 };
  }
}

// Função para retornar o limite máximo baseado na faixa de dispositivos
function getMaxLimit(deviceCount) {
  if (deviceCount >= 1 && deviceCount <= 4) return 400;
  if (deviceCount >= 5 && deviceCount <= 7) return 500;
  if (deviceCount > 7) return 800;
  return 0;
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
