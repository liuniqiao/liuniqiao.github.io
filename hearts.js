function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  
  heart.style.top = "3px";
  heart.style.left = Math.random() * 100 + 'vw';
  
  const size = Math.random() * 1.7 + 0.8;
  heart.style.fontSize = size + 'rem';

  const duration = Math.random() * 5+1;
  heart.style.animationDuration = duration + 's';

  heart.style.animationDelay = Math.random() * 2 + 's';

  const drift = Math.random() * 80 - 40;
  heart.style.setProperty('--drift', drift + 'vw');

  heart.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (duration + 2) * 1000);
}

setInterval(() => {
  for (let i = 0; i < 3; i++) {  // 3 hearts per interval for denser rain
    createHeart();
  }
}, 300);

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    createHeart();
  }, i * 30);
}

document.addEventListener('click', (e) => {
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});
