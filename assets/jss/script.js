/* TOOLTIP */
document.addEventListener("DOMContentLoaded", function() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function(tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


/* SMOTH SCROLL */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

/* Carrusel */
$(document).ready(function() {
    // Iniciar el carrusel automáticamente
    $('.carousel').carousel({
      interval: 2000 // Intervalo en milisegundos (2 segundos en este caso)
    });
});