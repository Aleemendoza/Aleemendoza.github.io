
var circulo = document.getElementById("Circulo");
var imagenPerfil = document.getElementById("imagenPerfil");
var circulo3 = document.getElementById("Circulo3");
var lenguaje = document.getElementById("lenguajes");
var titulos = document.getElementsByClassName("titulos");

imagenPerfil.addEventListener("click",agregarClases);
function agregarClases(){

    circulo.classList.add("active");
    circulo3.classList.add("rotar2");

}
lenguaje.addEventListener("click",mostrarTitulo);
    function mostrarTitulo(){

        parrafoLenguaje.classList.add("visibilidad")
        
    }