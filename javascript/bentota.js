   // JavaScript to handle hover zoom effect
   const images = document.querySelectorAll('.gallery img');

   images.forEach((image) => {
     image.addEventListener('mouseenter', () => {
       image.classList.add('zoomed');
     });

     image.addEventListener('mouseleave', () => {
       image.classList.remove('zoomed');
     });
   });