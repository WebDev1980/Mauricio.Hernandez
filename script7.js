//  CÓDIGO PARA INYECTAR UN LIENZO TRANSLÜCIDO QUE ABARCA EL VIEWPORT CON ELEMENTO HTML CENTRADO AL HACER CLICK
// Obtener la imagen
let img = document.querySelector('#myimage');

// Crear el lienzo negro translúcido
let overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.background = 'rgba(0, 0, 0, .93)';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.visibility = 'hidden';
overlay.style.zIndex = '1000'; // Asegurarse de que el lienzo esté encima de otros elementos
overlay.style.transition = 'visibility 0.5s, opacity 0.5s linear'; // Suavizar la aparición y desaparición
overlay.style.opacity = '0';

// Crear una nueva imagen para mostrar en el lienzo
let overlayImg = new Image();
overlayImg.src = img.src;
overlayImg.alt = img.alt || 'Imagen'; // Agregar texto alternativo
overlayImg.style.maxWidth = '95%'; // Controlar el tamaño de la imagen
overlayImg.style.maxHeight = '95%'; // Controlar el tamaño de la imagen

// Ajustar el tamaño de la imagen en función del ancho del viewport
window.addEventListener('resize', function() {
    if (window.innerWidth < 600) {
        overlayImg.style.maxWidth = '85%';
        overlayImg.style.maxHeight = '85%';
    } else {
        overlayImg.style.maxWidth = '95%';
        overlayImg.style.maxHeight = '95%';
    }
});

// Agregar la imagen al lienzo
overlay.appendChild(overlayImg);

// Agregar el lienzo al cuerpo del documento
document.body.appendChild(overlay);

// Cambiar el cursor a pointer cuando pase sobre la imagen
img.style.cursor = 'pointer';

// Función para ocultar el lienzo
function hideOverlay() {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

// Mostrar el lienzo cuando se haga click en la imagen
img.addEventListener('click', function() {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    // Ocultar el lienzo después de "n" segundos
    setTimeout(hideOverlay, 7000);
});

// Ocultar el lienzo cuando se haga clic en él
overlay.addEventListener('click', hideOverlay);

