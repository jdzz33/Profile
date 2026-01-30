tombolKirim.addEventListener('click', () => {
  ucapan.classList.add('show');
  setTimeout(() => {
    ucapan.classList.remove('show');
  }, 2000);
});