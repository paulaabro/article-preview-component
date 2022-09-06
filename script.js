const info = document.querySelector('.info');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  info.classList.toggle('active');
});