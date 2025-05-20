function showSurprise() {
  document.getElementById('surprise-content').classList.remove('hidden');
  document.getElementById('reaction-buttons').classList.remove('hidden');
  generateConfetti();
}

function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);

    let left = Math.random() * window.innerWidth;
    let duration = Math.random() * 3 + 2;
    let delay = Math.random() * 2;

    confetti.style.left = `${left}px`;
    confetti.style.animationDuration = `${duration}s`;
    confetti.style.animationDelay = `${delay}s`;

    setTimeout(() => {
      confetti.remove();
    }, (duration + delay) * 1000);
  }
}