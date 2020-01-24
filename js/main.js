const contenedor = document.getElementById("container");
const menuButton = document.getElementById("menu-button");

//Desplegar menú lateral.
menuButton.addEventListener("click", () => {
    contenedor.classList.toggle("active");        
});

//Desplegar menú lateral dependiendo del tamaño de la ventana.
const comprobarAncho = () =>{
    if(window.innerWidth <= 768){
        contenedor.classList.remove("active");
    }else{
        contenedor.classList.add("active")
    }
}

//Desplegar cuando el tamaño de la ventana esta siendo modificada.
window.addEventListener("resize",()=>{
    comprobarAncho();
})

//Llamada de la función al iniciar la pagina
comprobarAncho();