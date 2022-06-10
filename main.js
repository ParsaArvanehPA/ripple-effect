const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
   btn.addEventListener('mousedown', (e) => {
      const posX = e.offsetX;
      const posY = e.offsetY;

      btn.style.setProperty('--x', `${posX}px`);
      btn.style.setProperty('--y', `${posY}px`);

      btn.classList.add('pulse');

      btn.addEventListener('animationend', () => {
         btn.classList.remove('pulse');
      })
   });
})
