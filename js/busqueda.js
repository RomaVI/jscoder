var listaOrdenada = JSON.parse(localStorage.getItem("listaOrdenadaPorMegusta"));
// Obtén la referencia al elemento <ol> donde quieres insertar los libros
// Obtén la referencia al elemento <ol> donde quieres insertar los libros
// Obtén la referencia al elemento <ol> donde quieres insertar los libros
const listaLibros = document.getElementById("listaLibros");

// Función para actualizar la lista de libros en función de la búsqueda
function actualizarListaDeLibros() {
    // Obtén el valor del campo de búsqueda y conviértelo a minúsculas
    const filtro = document.getElementById("buscador").value.toLowerCase();

    // Crea una cadena de HTML vacía
    let listaHtml = "";

    // Recorre la lista de libros y construye el HTML
    for (const libro of listaOrdenada) {
        // Convierte el nombre del libro a minúsculas para comparar
        const nombreLibro = libro.nombre.toLowerCase();

        // Comprueba si el nombre del libro contiene el texto de búsqueda
        if (nombreLibro.includes(filtro)) {
            listaHtml += `
        <li class="nombre" id="${libro.id}">
            <img src=".${libro.imagen}" alt="${libro.nombre}">
        </li>`;
        }
    }   //Es lo mismo que el for pero de otra forma, para tener mas libros 
    // Inserta la cadena de HTML en el elemento <ol>
    listaLibros.innerHTML = listaHtml;
}

// Asocia el evento "keyup" del campo de búsqueda con la función de actualización
document.getElementById("buscador").addEventListener("keyup", actualizarListaDeLibros);

// Llama a la función de actualización inicialmente para mostrar todos los libros
actualizarListaDeLibros();
