const boton = document.querySelector(".sidebar-toggle")
const barralat = document.querySelector(".sidebar")
const cerrar = document.querySelector(".close-btn")


boton.addEventListener("click",function(){
    barralat.classList.toggle("show-sidebar");
});

cerrar.addEventListener("click",function(){
    barralat.classList.remove("show-sidebar");
});