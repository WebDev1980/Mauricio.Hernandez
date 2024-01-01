// CÓDIGO PARA CONTROLAR COMPORTAMIEMTO DE BARRA DE NAVEGACIÓN (OCULTAR Y APARECER)
var prevScrollpos = window.scrollY;
var hideTimer; // variable para guardar el temporizador de ocultar
var showTimer; // variable para guardar el temporizador de mostrar
var isTouching = false; // variable para saber si el usuario está tocando la pantalla o no
var startTime; // variable para guardar el tiempo inicial del scroll
var endTime; // variable para guardar el tiempo final del scroll
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    // si el scroll es hacia arriba, cancela el temporizador de ocultar si existe
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    // muestra la barra de navegación después de "n" milisegundos, solo si el usuario no está tocando la pantalla
    if (!isTouching) {
      showTimer = setTimeout(function(){
        document.getElementById("navbar").style.top = "0";
        showTimer = null;
      }, 100);
    }
  } else {
    // si el scroll es hacia abajo, cancela el temporizador de mostrar si existe
    if (showTimer) {
      clearTimeout(showTimer);
      showTimer = null;
    }
    // guarda el tiempo inicial del scroll hacia abajo
    startTime = new Date().getTime();
    // oculta la barra de navegación después de "n" milisegundos, solo si el usuario no está tocando la pantalla y el scroll hacia abajo ha durado al menos 150 milisegundos
    if (!isTouching) {
      hideTimer = setTimeout(function(){
        // guarda el tiempo final del scroll hacia abajo
        endTime = new Date().getTime();
        // calcula la diferencia entre el tiempo inicial y el final
        var duration = endTime - startTime;
        // si la duración es mayor o igual a 100 milisegundos, oculta la barra de navegación
        if (duration >= 50) {
          document.getElementById("navbar").style.top = "-100px";
        }
        hideTimer = null;
      }, 50);
    }
  }
  prevScrollpos = currentScrollPos;
}

// añade un evento para detectar cuando el usuario toca la pantalla
window.addEventListener("touchstart", function() {
  // cambia el valor de la variable a verdadero
  isTouching = true;
  // cancela los temporizadores si existen
  if (hideTimer) {
    clearTimeout(hideTimer);
    hideTimer = null;
  }
  if (showTimer) {
    clearTimeout(showTimer);
    showTimer = null;
  }
});

// añade un evento para detectar cuando el usuario deja de tocar la pantalla
window.addEventListener("touchend", function() {
  // cambia el valor de la variable a falso
  isTouching = false;
});

