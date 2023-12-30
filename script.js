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
      }, 300);
    }
  } else {
    // si el scroll es hacia abajo, cancela el temporizador de mostrar si existe
    if (showTimer) {
      clearTimeout(showTimer);
      showTimer = null;
    }
    // oculta la barra de navegación después de 1500 milisegundos, solo si el usuario no está tocando la pantalla
    if (!isTouching) {
      hideTimer = setTimeout(function(){
        document.getElementById("navbar").style.top = "-100px";
        hideTimer = null;
      }, 1500);
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



