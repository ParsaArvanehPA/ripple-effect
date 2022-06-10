const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
   const posX = e.offsetX;
   const posY = e.offsetY;

   btn.style.setProperty('--x', `${posX}px`);
   btn.style.setProperty('--y', `${posY}px`);

   btn.classList.add('pulse');

   btn.addEventListener('animationend', () => {
       btn.classList.remove('pulse');
   })
});
