function toggleMenu() {
    // Buscar el elemento HTML con la clase 'toggle' y guardarlo en la variable menuToggle
    var menuToggle = document.querySelector('.toggle');
    
    // Buscar el elemento HTML con la clase 'navegacion' y guardarlo en la variable navegacion
    var navegacion = document.querySelector('.navegacion');
    
    // Alternar la clase 'active' en el elemento menuToggle
    // Esto cambiará la apariencia visual del botón que activa el menú de navegación
    menuToggle.classList.toggle('active');
    
    // Alternar la clase 'active' en el elemento navegacion
    // Esto mostrará u ocultará el menú de navegación en la página web
    navegacion.classList.toggle('active');
}

function subir() {
    // Desplazar la ventana a la posición (0, 0)
    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function() {
    // Se ejecuta cuando la página se carga por completo

    // Seleccionar todos los elementos con la clase 'boton-personajes' y guardarlos en la variable botones
    var botones = document.querySelectorAll('.boton-personajes');

    // Iterar sobre cada botón
    botones.forEach(function(boton) {
        // Agregar un evento de click al botón actual
        boton.addEventListener("click", function(event) {
            // Prevenir el comportamiento predeterminado del botón (por ejemplo, el envío de un formulario)
            event.preventDefault();

            // Obtener el contenedor padre del botón actual con la clase 'ficha'
            var contenedorPadre = boton.closest('.ficha');

            // Encontrar el elemento con la clase 'texto-personajes' dentro del contenedor padre
            var textoPersonajes = contenedorPadre.querySelector('.texto-personajes');

            // Si el elemento de texto de personajes existe, alternar la clase 'active-personajes'
            if (textoPersonajes) {
                textoPersonajes.classList.toggle('active-personajes');
            }
        });
    });
});
