const canvas = document.getElementById('clockCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '25vw monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  const x = canvas.width / 2;
  const y = canvas.height / 2;

  // Draw hours and minutes
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 15;
  ctx.strokeText(`${hours} ${minutes}`, x, y);
  ctx.fillText(`${hours} ${minutes}`, x, y);
  ctx.strokeText(':', x, y);
  ctx.fillText(':', x, y);
}

setInterval(updateClock, 1000);
updateClock(); // 初回実行

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  updateClock();
});

