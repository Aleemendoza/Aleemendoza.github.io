
var circulo = document.getElementById("Circulo");
var imagenPerfil = document.getElementById("imagenPerfil");
var circulo3 = document.getElementById("Circulo3");
var lenguaje = document.getElementById("lenguajes");
var titulos = document.getElementsByClassName("titulos");
var contenidosCirculos = document.getElementById("contenidosCirculo");
var identificador =  document.getElementById("identificador")
var contenido = document.getElementById("contenido")
imagenPerfil.addEventListener("click",agregarClases);
function agregarClases(){

    circulo.classList.add("active");
    circulo3.classList.add("rotar2");
    imagenPerfil.classList.add("desaparecer");
    identificador.classList.add("ocultar")
    contenido.classList.add("aparecer")

}

