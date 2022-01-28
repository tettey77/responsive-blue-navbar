document.addEventListener('DOMContentLoaded', () => {

  const hMenuBtn = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.close');

  const navbar = document.querySelector('#navbar');
  // navbar.style.animationPlayState = 'paused';

  closeBtn.style.display = 'none';
  hMenuBtn.onclick = evt => {
    evt.preventDefault();
    hMenuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    navbar.style.animationPlayState = 'running';
    navbar.addEventListener('animationstart', evt => {
      setTimeout(() => {navbar.style.animationPlayState === 'paused'}, 2500)
    }, false);
  }

  closeBtn.onclick = evt => {
    evt.preventDefault();
    hMenuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    navbar.style.animationPlayState = 'running';
  }

});
