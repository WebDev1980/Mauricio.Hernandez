// CODIGO PARA CAMBIAR EL BACKGROUND DE "DIV's" DE FORMA SECUENCIAL
let boxes = document.querySelectorAll('.serv-content .card');
let index = 0;
let intervalId;
let firstStart = true;

// Añadir transición suave a las cajas
boxes.forEach(box => {
    box.style.transition = 'background 1s';
});

function changeBackground() {
    // Remover el color de fondo de todas las cajas e iconos
    boxes.forEach(box => {
        box.style.background = '';
        let icon = box.querySelector('.change');
        if (icon) {
            icon.style.color = '';
        }
    });

    // Añadir el color de fondo a la caja actual y cambiar el color del icono a blanco
    boxes[index].style.background = 'crimson';
    let icon = boxes[index].querySelector('.change');
    if (icon) {
        icon.style.color = 'white';
    }

    // Incrementar el índice
    index = (index + 1) % boxes.length;
}

// Función para iniciar el cambio de color de fondo
function startChange() {
    // Reiniciar el índice
    index = 0;
    // Iniciar el intervalo con un retraso de "n" segundos si es la primera vez
    if (firstStart) {
        setTimeout(() => {
            intervalId = setInterval(changeBackground, 2000);
            // Agregar los eventos de hover a las cajas
            boxes.forEach(box => {
                box.addEventListener('mouseover', function() {
                    if (!firstStart) {
                        stopChange();
                        let icon = this.querySelector('.change');
                        if (icon) {
                            icon.style.color = 'white';
                        }
                    }
                });
                box.addEventListener('mouseout', function() {
                    if (!firstStart) {
                        startChange();
                        let icon = this.querySelector('.change');
                        if (icon) {
                            icon.style.color = '';
                        }
                    }
                });
            });
        }, 2000);
        firstStart = false;
    } else {
        intervalId = setInterval(changeBackground, 2000);
    }
}

// Función para detener el cambio de color de fondo
function stopChange() {
    // Detener el intervalo
    clearInterval(intervalId);
    // Remover el color de fondo de todas las cajas e iconos
    boxes.forEach(box => {
        box.style.background = '';
        let icon = box.querySelector('.change');
        if (icon) {
            icon.style.color = 'crimson';
        }
    });
}

// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Agregar el evento de scroll al window
window.addEventListener('scroll', function() {
    // Si el primer elemento está en el viewport
    if (isInViewport(boxes[0])) {
        // Iniciar el cambio de color de fondo
        startChange();
        // Remover el evento de scroll
        window.removeEventListener('scroll', arguments.callee);
    }
});
