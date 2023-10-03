//En esta pagina creo una menu y el tema de la pagina index.html, puede que despues guarde el tema en el localStorage para el resto de las paginas


//tema blanco o negro 
let blanco = document.querySelector(".boton1");
let negro = document.querySelector(".boton2");
const body = document.body;

negro.addEventListener("click", () => {
    body.className = "black"; // Reemplaza todas las clases del body con "black"
});

blanco.addEventListener("click", () => {
    body.className = "white"; // Reemplaza todas las clases del body con "white"
});


//Menu lateral 

let cerrar = document.querySelector(".cont-block-iz");
let main = document.querySelector(".cont-block-dr");
let main2 = document.querySelector(".cont-block-dr-all");

//para el futuro
let bot = document.querySelector(".cont-block-dr");
let dow = document.querySelector(".cont-block-dow");




cerrar.addEventListener("click",() => {
    //toggle es una forma de interaccion que quita o elimina el parametro no se si se puede usar ? 
    cerrar.classList.toggle("active");
    main.classList.toggle("active");
    main2.classList.toggle("active");

    //para el futuro, mientras no molesta 
    bot.classList.toggle("active");
    dow.classList.toggle("active");
});





//console.log('HTML completo:', document.documentElement.outerHTML);
s