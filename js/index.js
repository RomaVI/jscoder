//En esta pagina traigo el contenido de LocalStorage que guardo libros.js 


//Trae la lista ordenada por valoración del JSON usando parse para que sea de nuevo un objeto.
var listaOrdenada = JSON.parse(localStorage.getItem("listaOrdenadaPorMegusta"));


//Primero creo una funcion actualizar ya que quiero que se refleje en tiempo real el cambio de megusta
function actualizarFavoritos(libroId) {
  var divContenedor = document.getElementById("libro-" + libroId);
  var corazon = divContenedor.querySelector(".corazon");
  var libro = listaOrdenada.find(function (libro) {
    return libro.id === libroId;
  });
  //el nuevo valor de "megusta"
  corazon.textContent = " " + libro.megusta;
}


//Agruego los 7 libros con mejor valoracion al html
function mostrarLibrosEnHTML() {
  var listLibros = document.getElementById("listLibros");

  function actualizarHTML(libros) {
    listLibros.innerHTML = ""; // Limpiar la lista actual

    libros.forEach(function(libro, index) {
      var divContenedor = document.createElement("div");
      divContenedor.className = "top7-cont";
      divContenedor.id = "libro-" + libro.id;

      var imagen = document.createElement("img");
      imagen.src = libro.imagen;
      imagen.alt = libro.nombre;

      //Agregar megusta
      var corazon = document.createElement("i");
      corazon.className = "fas fa-heart corazon";
      corazon.textContent = " " + libro.megusta; 

      //Sacar megusta
      var pulgarAbajo = document.createElement("i");
      pulgarAbajo.className = "fas fa-thumbs-down noMeGusta";
      pulgarAbajo.addEventListener("click", function() {
        
        libro.megusta -= 1;

        // Actualiza la lista de libros ordenada
        listaOrdenada.sort(function(a, b) {
          //no se si enseñaron .sort pero me resulto muy util estudiar los arreglos desde www.w3schools.com/jsref/jsref_sort.asp
          return b.megusta - a.megusta; // Ordenar de mayor a menor "megusta"
        });

        // Llama a esta función para reflejar el nuevo orden en la página
        actualizarHTML(listaOrdenada.slice(0, 7)); // Mostrar solo los 7 primeros libros
      });

      divContenedor.appendChild(imagen);
      divContenedor.appendChild(corazon);
      divContenedor.appendChild(pulgarAbajo);

      listLibros.appendChild(divContenedor);

      corazon.addEventListener("click", function() {
        libro.megusta += 1;

        // Actualiza la lista de libros ordenada
        listaOrdenada.sort(function(a, b) {
          return b.megusta - a.megusta; // Ordenar de mayor a menor "megusta"
        });

        // Llama a esta función para reflejar el nuevo orden en la pagina
        actualizarHTML(listaOrdenada.slice(0, 7)); // Mostrar solo los 7 primeros libros
      });
    });
  }

  // Mostrar solo los 7 primeros libros inicialmente
  actualizarHTML(listaOrdenada.slice(0, 7));
}

mostrarLibrosEnHTML(); // Llama a esta función para inicializar la página



