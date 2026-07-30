const yearNode = document.querySelector("#year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const canvas = document.querySelector("#agent-canvas");
const ctx = canvas?.getContext("2d");

const nodes = Array.from({ length: 54 }, () => ({
  x: Math.random(),
  y: Math.random(),
  speed: 0.0015 + Math.random() * 0.0025,
  radius: 1.5 + Math.random() * 2.4,
  phase: Math.random() * Math.PI * 2,
}));

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.clientWidth * ratio);
  canvas.height = Math.floor(canvas.clientHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawNetwork() {
  if (!canvas || !ctx) return;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.clearRect(0, 0, width, height);

  nodes.forEach((node) => {
    node.phase += node.speed;
    const x = node.x * width + Math.sin(node.phase) * 20;
    const y = node.y * height + Math.cos(node.phase * 0.8) * 18;

    ctx.beginPath();
    ctx.arc(x, y, node.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(241, 209, 138, 0.72)";
    ctx.fill();

    nodes.forEach((other) => {
      const ox = other.x * width + Math.sin(other.phase) * 20;
      const oy = other.y * height + Math.cos(other.phase * 0.8) * 18;
      const distance = Math.hypot(x - ox, y - oy);
      if (distance < 145) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(ox, oy);
        ctx.strokeStyle = `rgba(125, 211, 199, ${0.18 - distance / 900})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(drawNetwork);
}

resizeCanvas();
drawNetwork();
window.addEventListener("resize", resizeCanvas);
