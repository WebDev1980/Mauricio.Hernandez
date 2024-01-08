$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    const createTypedAnimation = (selector, strings, typeSpeed, backSpeed, startDelay, showCursor) => {
        let typed;
        $(selector).waypoint(() => {
            if (!typed) {
                typed = new Typed(selector, {
                    strings,
                    typeSpeed,
                    backSpeed,
                    loop: false,
                    startDelay,
                    showCursor,  // Muestra el cursor durante la animación si showCursor es true
                    onComplete: function(self) { 
                        if (showCursor) {  // Si showCursor es true, oculta el cursor al final de la animación
                            $(self.cursor).hide(); 
                        }
                    }
                });
            }
        }, { offset: '100%' });
    }
    
    // createTypedAnimation(".typing-2", ["Hola, soy"], 50, 30, 7000, false);
    // createTypedAnimation(".typing-3", ["Mauricio Hernández"], 40, 20, 9000, false);
    // createTypedAnimation(".typing-4", ["Aspiro a la Coordinación en defensa de la 4T"], 20, 10, 11000, false);
    // createTypedAnimation(".typing-5", ["en Silao de la Victoria"], 30, 15, 13500, false);
    createTypedAnimation(".typing-1", ["Conóceme"], 45, 25, 11000, false);

    createTypedAnimation(".typing-5", ["Sobre mí"], 40, 20, 0, false);
    createTypedAnimation(".typing-6", ["Mauricio Hernández"], 50, 30, 0, true);  // Muestra el cursor durante la animación y lo oculta al final
    createTypedAnimation(".typing-7", ["a la Coordinación en defensa de la 4T"], 35, 15, 0, true); 
    createTypedAnimation(".typing-8", ["Mi Trayectoria y Perfil"], 40, 20, 0, false);
    createTypedAnimation(".typing-9", ["Planeación Estratégica"], 40, 20, 0, false);
    createTypedAnimation(".typing-10", ["Mi enfoque"], 45, 30, 0, false);
    createTypedAnimation(".typing-11", ["Enfoque de cambio"], 40, 20, 0, false);
    createTypedAnimation(".typing-12", ["Cuarta Transformación"], 40, 20, 0, false);
    createTypedAnimation(".typing-13", ["La 4T"], 40, 25, 0, false);
    createTypedAnimation(".typing-14", ["La 4T en Silao de la Victoria"], 30, 20, 1000, false);
    createTypedAnimation(".typing-15", ["Mis Galerías"], 45, 30, 0, false);
    createTypedAnimation(".typing-16", ["Con el Pueblo todo"], 45, 30, 0, false);
    createTypedAnimation(".typing-17", ["Amor con amor se paga"], 45, 30, 0, false);
    createTypedAnimation(".typing-18", ["Contáctame"], 45, 30, 0, false);
    createTypedAnimation(".typing-19", ["En contacto contigo"], 30, 20, 1000, false);

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
