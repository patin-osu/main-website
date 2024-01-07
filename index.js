

const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused || audioPlayer.ended) {
    audioPlayer.play();
    playButton.textContent = 'Pause a song!';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play a song!';
  }
});

const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

setCanvasSize(); // Set initial canvas size

window.addEventListener('resize', setCanvasSize); // Adjust canvas size on window resize

class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetX = this.x;
    this.targetY = Math.random() * canvas.height / 2;
    this.distanceToTarget = Math.sqrt(
      Math.pow(this.targetX - this.x, 2) +
      Math.pow(this.targetY - this.y, 2)
    );
    this.distanceTraveled = 0;
    this.explosionRadius = 3;
  }

  update() {
    if (this.distanceTraveled >= this.distanceToTarget) {
      fireworks.splice(fireworks.indexOf(this), 1);
      this.explode();
    } else {
      this.distanceTraveled += 4;
      const angle = Math.atan2(this.targetY - this.y, this.targetX - this.x);
      this.x += Math.cos(angle) * 4;
      this.y += Math.sin(angle) * 4;
    }
  }

  explode() {
    for (let i = 0; i < 100; i++) {
      const particle = new Particle(this.x, this.y);
      particles.push(particle);
    }
  }

  draw() {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = this.getRandomColor(); // Get random color for each particle
    this.life = 50;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; // Add more colors as needed
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

const fireworks = [];
const particles = [];

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for each frame

  fireworks.forEach((firework, index) => {
    firework.draw();
    firework.update();
  });

  particles.forEach((particle, index) => {
    particle.draw();
    particle.update();

    if (particle.life <= 0) {
      particles.splice(index, 1);
    }
  });

  if (Math.random() < 0.05) {
    const firework = new Firework();
    fireworks.push(firework);
  }

  requestAnimationFrame(animate);
}

animate();