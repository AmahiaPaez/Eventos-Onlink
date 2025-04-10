const botonSesion = document.querySelector(".iniciarSesion");
const botonOcultar = document.querySelector(".agregar");
const conteoMeGusta = document.querySelectorAll(".meGusta");

function cambiarTexto(){
    if (botonSesion.textContent === "Iniciar sesión"){
        botonSesion.textContent = "Cerrar sesión"
    }else {
        botonSesion.textContent= "Iniciar sesión"
    }
}

function ocultarBoton(event){
    event.target.remove();
}

function sumarLikes(event) {
    const boton = event.target;
    const spanLikes = boton.querySelector("span");
    
    let cantidad = parseInt(spanLikes.textContent); // textp a numero
    cantidad++;
    spanLikes.textContent = cantidad;}

function alertaMeGusta() {
    alert("Te ha gustado la publicación");
}

function sumarLikes(event){
    const boton = event.target;
    let pLike= boton.querySelector("span");
    let cantLikes= parseInt(pLike.textContent);
    cantLikes++;
    pLikes.textContent= cantLikes
}
botonSesion.addEventListener("click", cambiarTexto);
botonOcultar.addEventListener("click", ocultarBoton);
conteoMeGusta.forEach(boton => { // todos me gusta 
    boton.addEventListener("click", alertaMeGusta);
    boton.addEventListener("click", sumarLikes);
});