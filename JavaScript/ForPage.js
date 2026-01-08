
alert("¡Bienvenido a la página de The Legend of Zelda!");

const titulo = document.querySelector("h1");
const subtitulo = document.querySelector("h2");
const sub = document.querySelector("h2");

titulo.addEventListener("mouseover", function () {
    titulo.style.color = "#0e572ec9"; 
});

titulo.addEventListener("mouseout", function () {
    titulo.style.color = ""; 
});


titulo.addEventListener("click", function () {
    alert("Buen Viaje");
});

const enlacesMenu = document.querySelectorAll(".navBar a");

enlacesMenu.forEach(function (enlace) {
    
    
    enlace.addEventListener("mouseover", function () {
        enlace.style.transition = "0.3s";
        enlace.style.color = "#0b4625c9";
        enlace.style.transform = "scale(1.2)"; 
    });

    
    enlace.addEventListener("mouseout", function () {
        enlace.style.transform = "scale(1)";
        enlace.style.color = "";
    });
});





subtitulo.addEventListener("mouseover", function () {
subtitulo.style.color = "#0e572ec9"; 

});

 subtitulo.addEventListener("mouseout", function () {
        subtitulo.style.transform = "scale(1)";
        subtitulo.style.color = "";
 });

subtitulo.addEventListener("click", function () {
    alert("La historia y origen");
});

const modoOscuroBtn = document.getElementById("modoOscuroBtn");
modoOscuroBtn.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
});

