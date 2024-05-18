
function toggleMenu() {
    // Buscar el elemento HTML que tiene la clase 'toggle' y guardarlo en la variable menuToggle
    var menuToggle = document.querySelector('.toggle');
    // Buscar el elemento HTML que tiene la clase 'navegacion' y guardarlo en la variable navegacion
    var navegacion = document.querySelector('.navegacion');
    // Alternar la clase 'active' en el elemento menuToggle
    // Esto cambiará la apariencia visual del botón que activa el menú de navegación
    menuToggle.classList.toggle('active');
    // Alternar la clase 'active' en el elemento navegacion
    // Esto mostrará u ocultará el menú de navegación en la página web
    navegacion.classList.toggle('active');
}


function subir() {
    window.scrollTo(0, 0); // Desplazar la ventana a la posición (0, 0)
}

document.addEventListener("DOMContentLoaded", function() {
    // Se ejecuta cuando la página se carga por completo

    var botones = document.querySelectorAll('.boton-personajes');

    // Iterar sobre cada botón
    botones.forEach(function(boton) {
        // Agregar evento click al botón actual
        boton.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado del botón (llevar al principio de la página)
            event.preventDefault();

            // Obtener el contenedor padre del botón actual
            var contenedorPadre = boton.closest('.ficha');

            // Encontrar el elemento de texto de personajes dentro del contenedor padre
            var textoPersonajes = contenedorPadre.querySelector('.texto-personajes');

            // Alternar clase al texto de personajes asociado al botón actual
            if (textoPersonajes) {
                textoPersonajes.classList.toggle('active-personajes');
            }
        });
    });
});
