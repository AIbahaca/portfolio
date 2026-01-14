const btn = document.getElementById('btnAnimar');

btn.addEventListener('click', () => {
  document.body.animate([
    { backgroundColor: '#e8f5e9' },
    { backgroundColor: '#c8e6c9' },
    { backgroundColor: '#e8f5e9' }
  ], {
    duration: 3000,
    iterations: 1
  });
});
