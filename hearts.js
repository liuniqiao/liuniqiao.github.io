const hearts = ["💗", "🥝", "😽", "😘", "💖", "💘", "💕", "💝", "❤️", "❣️"];
function createHeart(manual) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = manual ? "🤌" : hearts[Math.floor(Math.random() * hearts.length)];
  
  heart.style.top = "2px";
  heart.style.left = Math.random() * 100 + 'vw';
  
  const size = Math.random() * 1.7 + 0.8;
  heart.style.fontSize = size + 'rem';

  const duration = Math.random() * 5+1;
  heart.style.animationDuration = duration + 's';

  heart.style.animationDelay = Math.random() * 2 + 's';

  const drift = Math.random() * 80 - 40;
  heart.style.setProperty('--drift', drift + 'vw');

  heart.style.transform = `rotate(${Math.random() * 180 - 15}deg)`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (duration + 1) * 1000);
}

setInterval(createHeart, 100);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    createHeart();
  }, i * 30);
}

document.addEventListener('click', (e) => {
  for (let i = 0; i < 15; i++) {
    createHeart(true);
  }
});
