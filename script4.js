// CÓDIGO PARA MAGNIFICAR ELEMENTO HTML Y VOLVERLO DESCARGABLE
// const img = document.getElementById("tarjeta");
// img.addEventListener("mouseover", () => {
//   img.style.transform = "scale(2.5) translate(-60px, 0px)";
// });
// img.addEventListener("mouseout", () => {
//   img.style.transform = "scale(1) translate(0px, 0px)";
// });
// img.addEventListener("click", () => {
//   const a = document.createElement("a");
//   a.href = img.src;
//   a.download = "Mauricio_Hernández.png";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// });

// CÓDIGO PARA MOSTRAR ELEMENTO HTML Y VOLVERLO DESCARGABLE
const img = document.getElementById("tarjeta");
img.addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = img.src;
  a.download = "nombre_de_archivo.png";
  a.textContent = "Haz clic aquí para descargar la imagen";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

const userIcon = document.querySelector(".fa-user");
const tarjeta = document.querySelector(".tarjeta");

let timer;

userIcon.addEventListener("click", () => {
  tarjeta.classList.add("visible");
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (!tarjeta.matches(":hover")) {
      tarjeta.classList.remove("visible");
    }
  }, 8500);
});

tarjeta.addEventListener("mouseleave", () => {
  timer = setTimeout(() => {
    if (!tarjeta.matches(":hover")) {
      tarjeta.classList.remove("visible");
    }
  }, 8500);
});

// document.addEventListener('click', function(event) {
//   if (!event.target.closest('.tarjeta')) {
//     tarjeta.classList.remove('visible');
//   }
// });

