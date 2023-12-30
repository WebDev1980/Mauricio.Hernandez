$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Mauricio Hernández"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["a la Coordinación en defensa de la 4T"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Código para controlar el comportamiento de la barra de navegación (ocultar y aparecer")
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
        if (duration >= 100) {
          document.getElementById("navbar").style.top = "-100px";
        }
        hideTimer = null;
      }, 500);
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

// CÓDIGO PARA EL MENÚ FLOTANTE
// selecciona el div con el id "menu"
var flotante = document.getElementById("menu0");
// añade un evento para detectar cuando el usuario pasa el cursor o toca el div
flotante.addEventListener("mouseover", function() {
  // cambia la opacidad a 1 (completamente opaco)
  flotante.style.opacity = 1;
});
// añade un evento para detectar cuando el usuario deja de pasar el cursor o tocar el div
flotante.addEventListener("mouseout", function() {
  // cambia la opacidad a 0.5 (translúcido)
  flotante.style.opacity = 0.5;
});
// selecciona el elemento con el id "close"
var close = document.getElementById("close");
// selecciona el div con el id "menu0"
var menu = document.getElementById("menu0");
// añade un evento para detectar cuando el usuario hace clic o toca el elemento
close.addEventListener("click", function() {
  // cambia el display a "none" para ocultar el div
  menu.style.display = "none";
});

// selecciona el div con el id "menu0"
var menu = document.getElementById("menu0");
// establece un temporizador que se ejecute cada minuto
var timer = setInterval(function() {
  // cambia el display a "block" para mostrar el div
  menu.style.display = "block";
}, 60000);
// selecciona todas las imágenes dentro del div
var images = menu.querySelectorAll("img");
// recorre las imágenes
for (var i = 0; i < images.length; i++) {
  // añade un evento para detectar cuando el usuario pasa el cursor o toca la imagen
  images[i].addEventListener("mouseover", function() {
    // cambia la escala a 1.1 para agrandar la imagen
    this.style.transform = "scale(1.2)";
  });
  // añade un evento para detectar cuando el usuario deja de pasar el cursor o tocar la imagen
  images[i].addEventListener("mouseout", function() {
    // cambia la escala a 1 para restaurar la imagen
    this.style.transform = "scale(1)";
  });
}