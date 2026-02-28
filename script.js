const weddingDate = new Date('2026-06-07T16:00:00');

setInterval(() => {
  const now = new Date();
  const diff = weddingDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

  document.getElementById('timer').innerText =
    days + ' zile și ' + hours + ' ore rămase';
}, 1000);
