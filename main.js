const button = document.querySelector('.button');
const letterSpan = button.querySelector('.letter');

button.addEventListener('click', () => {
  letterSpan.textContent = 'B';
});


const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', () => {
  downloadBtn.disabled = true; // Desactiva
  downloadBtn.style.backgroundColor = '#cccccc'; // Cambia el color
  downloadBtn.textContent = 'en progreso...'; // Cambia el texto
});

//lista

const selector = document.getElementById('selector');
  const optionsList = document.getElementById('optionsList');
  const textSpan = selector.querySelector('.text');

  // Mostrar u ocultar la lista de opciones
  selector.onclick = function() {
    optionsList.classList.toggle('open');
  };

  // Cambiar el texto del botón al seleccionar una opción
  const options = document.querySelectorAll('.option');
  options.forEach(function(option) {
    option.onclick = function() {
      textSpan.textContent = option.textContent;
      optionsList.classList.remove('open');
    };
  });