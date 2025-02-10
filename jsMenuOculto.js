document.addEventListener("DOMContentLoaded", function() {
    let menu = document.getElementById("menuOculto");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) { // Altera para a altura desejada
            menu.classList.add("mostrarMenu");
        } else {
            menu.classList.remove("mostrarMenu");
        }
    });
});
