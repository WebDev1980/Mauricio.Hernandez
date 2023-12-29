// Code for Text Animation
const ids = ["escritura1", "escritura2", "escritura3", "escritura4", "escritura5"];
let i = 0;

function animarEscritura(id) {
  const escritura = document.getElementById(id);
  const texto = escritura.textContent;
  escritura.textContent = "";
  escritura.classList.remove("oculto");

  let j = 0;
  const intervalID = setInterval(function() {
    if (j < texto.length) {
      escritura.textContent += texto.charAt(j);
      escritura.style.color = window.getComputedStyle(escritura).getPropertyValue('color');
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

