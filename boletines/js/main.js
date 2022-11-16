//DOM
//let container = document.querySelector(".container");
/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
})
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    })
})
*/

//Obtener los elementos de la clase .close
let lnks = document.querySelectorAll(".close");
//Recorrerlos
lnks.forEach(function(link){
    //Agregar un evento click a cada uno de ellos - case sensitive
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
        //Quitar la clase de animación
        content.classList.remove("fadeInDown");
        content.classList.remove("animate");

        //Agregar clases para animación
        content.classList.add("fadeInDown");
        content.classList.add("animate");
        
        setTimeout(function(){
            location.href = "/boletines/";
        },600)         
        return false;
    })
})

/*
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star-o");
    icono.classList.add("fa-star");
})
*/