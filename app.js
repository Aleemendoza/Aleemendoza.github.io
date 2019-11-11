
var circulo = document.getElementById("Circulo");

var circulo3 = document.getElementById("Circulo3");

var imagenPerfil = document.getElementById("imagenPerfil");

var identificador =  document.getElementById("identificador")

var lenguaje = document.getElementById("lenguajes");

var titulos = document.getElementsByClassName("titulos");

var contenidosCirculos = document.getElementById("contenidosCirculo");

var contenido = document.getElementById("contenido")

imagenPerfil.addEventListener("click",agregarClases);

function agregarClases(){

    circulo.classList.add("active");
    circulo3.classList.add("rotar2");
    imagenPerfil.classList.add("desaparecer");
    identificador.classList.add("ocultar")
    contenido.classList.add("aparecer")

}

