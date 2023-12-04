// Obtén una referencia a todas las imágenes
const images = document.querySelectorAll('img');

// Agrega el evento "mouseover" a cada imagen
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    // Aquí puedes realizar la acción que desees cuando ocurra el evento "mouseover"
    // Por ejemplo, podrías cambiar el tamaño, el color de fondo o mostrar un mensaje
    image.style.transform = 'scale(1.2)';
    image.style.transition = 'transform 0.3s ease';
  });

  // Agrega el evento "mouseout" para revertir los cambios cuando el cursor del mouse se aleje de la imagen
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});