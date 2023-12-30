const ids = ["escritura1", "escritura2", "escritura3", "escritura4"];
let i = 0;

function animarEscritura(id) {
  const escritura = document.getElementById(id);
  const texto = escritura.textContent;
  escritura.textContent = "";
  escritura.classList.remove("oculto");

  function cambiarColor() {
    if (window.innerWidth >= 600 && window.innerWidth <= 2024 && window.innerWidth !== 810 && window.innerHeight !== 1080 && window.innerWidth !== 800 && window.innerHeight !== 1280) {
      document.getElementById("escritura1").style.color = "crimson";
      document.getElementById("escritura3").style.color = "crimson";
    } else {
      document.getElementById("escritura1").style.color = "";
      document.getElementById("escritura3").style.color = "";
    }
  }

  cambiarColor(); // Llamamos a la función para que se ejecute al cargar la página

  window.addEventListener("resize", cambiarColor); // Agregamos el evento resize

  let j = 0;
  const intervalID = setInterval(function() {
    if (j < texto.length) {
      escritura.textContent += texto.charAt(j);
      j++;
    } else {
      clearInterval(intervalID);
      i++;
      if (i < ids.length) {
        setTimeout(function() {
          animarEscritura(ids[i]);
        }, 400);
      }
    }
  }, 40);
}

setTimeout(function() {
  animarEscritura(ids[i]);
}, 7000);

// Código para aparecer suavemente un elemento html al estar en el viewport (usando una clase)
const images = document.querySelectorAll(".aparecer");
window.addEventListener("scroll", () => {
  images.forEach((img) => {
    const { top, bottom } = img.getBoundingClientRect();
    const { innerHeight } = window;
    if (top < innerHeight && bottom > 0) {
      img.style.transition = "opacity 4s ease-in-out";
      img.style.opacity = "1";
    }
  });
});

// Código para aparecer suavemente un elemento html al estar en el viewport (usando un ID)
// const img = document.getElementById("myimage");
// window.addEventListener("scroll", () => {
//   const { top, bottom } = img.getBoundingClientRect();
//   const { innerHeight } = window;
//   if (top < innerHeight && bottom > 0) {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "1";
//   }
// });

// Código para aparecer suavemente un elemento html al estar en el viewport y desaparezca fuera del viewport (usando un ID)
// const img = document.getElementById("myimage");
// window.addEventListener("scroll", () => {
//   const { top, bottom } = img.getBoundingClientRect();
//   const { innerHeight } = window;
//   if (top < innerHeight && bottom > 0) {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "1";
//   } else {
//     img.style.transition = "opacity 3s ease-in-out";
//     img.style.opacity = "0";
//   }
// });

// Código para aparecer suavemente un elemento html al estar en el viewport y desaparezca fuera del viewport (usando una)
// const images = document.querySelectorAll(".aparecer");
// window.addEventListener("scroll", () => {
//   images.forEach((img) => {
//     const { top, bottom } = img.getBoundingClientRect();
//     const { innerHeight } = window;
//     if (top < innerHeight && bottom > 0) {
//       img.style.transition = "opacity 3s ease-in-out";
//       img.style.opacity = "1";
//     } else {
//       img.style.transition = "opacity 3s ease-in-out";
//       img.style.opacity = "0";
//     }
//   });
// });

