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

/* CARRUSEL */
$(document).ready(function() {
    
    $('.carousel').carousel({
    interval: 2000 
    });
});

/* NABVAR OSCURO CON TRANSPARENCIA */
window.onscroll = () => scrollNavbar();

const scrollNavbar = () =>{

    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        console.log('scroll 1')
        document.getElementById("navbar").style.backgroundColor ="#00000060";
    }else{
        document.getElementById("navbar").style.backgroundColor ="transparent";
        console.log('scroll2')
    }
}