// En esta pagina busco crear una lista de objetos y ordenarlos en funcion de los megusta, despues llarar al Json para poder enviarlo al LocalStorage

// Función para ordenar la lista de libros por "megusta" utilizando if
function ordenarPorMegusta(listaDeLibros) {
    
    for (var i = 0; i < listaDeLibros.length - 1; i++) {
        for (var j = i + 1; j < listaDeLibros.length; j++) {
            if (listaDeLibros[i].megusta < listaDeLibros[j].megusta) {
                // Intercambiar los libros si el "megusta" del libro i es mayor que el del libro j
                var temp = listaDeLibros[i];
                listaDeLibros[i] = listaDeLibros[j];
                listaDeLibros[j] = temp;
            }
        }
    }

}

// Lista de libros antes de ordenar
var listaDeLibros = [
    {
        id: 1,
        nombre: "El señor de los Anillos",
        imagen: "./assert/libros/1.jpg",
        megusta: 50
    },
    {
        id: 2,
        nombre: "Don Quijote de la mancha ",
        imagen: "./assert/libros/2.jpeg",
        megusta: 5
    },
    {
        id: 3,
        nombre: "Sandman",
        imagen: "./assert/libros/3.jpeg",
        megusta: 9
    },
    {
        id: 4,
        nombre: "Sherlock",
        imagen: "./assert/libros/4.jpeg",
        megusta: 8
    },
    {
        id: 5,
        nombre: "El Faro del fin del Mundo",
        imagen: "./assert/libros/5.jpeg",
        megusta: 3
    },
    {
        id: 6,
        nombre: "Muerte en el nilo",
        imagen: "./assert/libros/7.jpeg",
        megusta: 7
    },
    {
        id: 7,
        nombre: "Stardust",
        imagen: "./assert/libros/12.png",
        megusta: 11
    },
    {
        id: 8,
        nombre: "El simarillo",
        imagen: "./assert/libros/16.jpeg",
        megusta: 14
    },
    {
        id: 9,
        nombre: "Lovecraft",
        imagen: "./assert/libros/15.jpeg",
        megusta: 10
    },
    {
        id: 10,
        nombre: "Rayuela",
        imagen: "./assert/libros/17.jpg",
        megusta: 10
    },
    {
        id: 11,
        nombre: "Horus",
        imagen: "./assert/libros/13.jpg",
        megusta: 10
    },
    {
        id: 12,
        nombre: "Ladrilleros",
        imagen: "./assert/libros/14.jpg",
        megusta: 10
    },
];

// Llama a la función para ordenar la lista por "megusta"
ordenarPorMegusta(listaDeLibros);

// Crear un objeto JSON que contiene la lista ordenada de libros

var listaOrdenadaJSON = JSON.stringify(listaDeLibros);

// Guarda la cadena JSON en el localStorage con una clave
localStorage.setItem("listaOrdenadaPorMegusta", listaOrdenadaJSON);


