document.addEventListener("DOMContentLoaded", function(){
document.getElementById("boton").addEventListener("click", function () {
     alert("¡Hola! Soy el div");
  });
});

function hola(event){
    event.stopPropagation();
    alert("¡Hola!")
}