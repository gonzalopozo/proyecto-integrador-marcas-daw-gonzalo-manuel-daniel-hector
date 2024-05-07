function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navegacion = document.querySelector('.navegacion');
    menuToggle.classList.toggle('active');
    navegacion.classList.toggle('active');
}

function subir() {
    window.scrollTo(0, 0);
}