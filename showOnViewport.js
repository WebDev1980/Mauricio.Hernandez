// CÓDIGO PARA EFECTO DE APARICIÓN SUAVE DE ELEMENTOS HTML - OPACITY 0 A 1
const images = Array.from(document.querySelectorAll(".aparecer"));

function applyTransition(img) {
  img.style.transition = "opacity 2.5s ease-in-out";
  img.style.opacity = "1";
  img.classList.add("revealed"); // Marcar la imagen como revelada
}

window.addEventListener("scroll", () => {
  images.forEach((img) => {
    if (!img.classList.contains("revealed")) { // Solo aplicar el efecto a las imágenes no reveladas
      const { top, bottom } = img.getBoundingClientRect();
      const { innerHeight } = window;
      if (top < innerHeight && bottom > 0) {
        applyTransition(img);
      }
    }
  });
});