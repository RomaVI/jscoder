// Definición de una clase 'Producto'
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Crear un array de productos
const inventario = [
    new Producto("Laptop", 1000),
    new Producto("Teléfono", 500),
    new Producto("Tablet", 300),
    new Producto("Auriculares", 100),
    new Producto("Mouse", 20)
];

// Función para agregar un producto al inventario
function agregarProducto() {
    const nombre = prompt("Ingresa el nombre del producto:");
    const precio = parseFloat(prompt("Ingresa el precio del producto:"));

    if (isNaN(precio)) {
        alert("Precio no válido. Introduce un número válido.");
        return;
    }

    const nuevoProducto = new Producto(nombre, precio);
    inventario.push(nuevoProducto);
    alert(`${nombre} ha sido agregado al inventario.`);
}

// Función para mostrar todos los productos en el inventario
function mostrarInventario() {
    alert("Inventario de productos:");
    inventario.forEach(producto => {
        alert(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
}

// Función para filtrar productos por precio
function filtrarPorPrecio() {
    const precioLimite = parseFloat(prompt("Ingresa el precio máximo para filtrar productos:"));

    if (isNaN(precioLimite)) {
        alert("Precio no válido. Introduce un número válido.");
        return;
    }

    const productosFiltrados = inventario.filter(producto => producto.precio <= precioLimite);

    alert("Productos con precio igual o inferior al límite:");
    productosFiltrados.forEach(producto => {
        alert(`Nombre: ${producto.nombre}, Precio: $${producto.precio}`);
    });
}

// Función para buscar un producto por nombre
function buscarProductoPorNombre() {
    const nombreBuscado = prompt("Ingresa el nombre del producto que deseas buscar:");

    const productoEncontrado = inventario.find(producto => producto.nombre === nombreBuscado);

    if (productoEncontrado) {
        alert(`Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio}`);
    } else {
        alert(`No se encontró ningún producto con el nombre "${nombreBuscado}".`);
    }
}

// Función para eliminar un producto del inventario
function eliminarProducto() {
    const nombreAEliminar = prompt("Ingresa el nombre del producto que deseas eliminar:");

    const indice = inventario.findIndex(producto => producto.nombre === nombreAEliminar);

    if (indice !== -1) {
        const productoEliminado = inventario.splice(indice, 1);
        alert(`${productoEliminado[0].nombre} ha sido eliminado del inventario.`);
    } else {
        alert(`No se encontró ningún producto con el nombre "${nombreAEliminar}".`);
    }
}

// Ejecutar el programa
while (true) {
    const opcion = prompt("Selecciona una opción:\n1. Agregar Producto\n2. Mostrar Inventario\n3. Filtrar por Precio\n4. Buscar Producto por Nombre\n5. Eliminar Producto\n6. Salir");

    switch (opcion) {
        case "1":
            agregarProducto();
            break;
        case "2":
            mostrarInventario();
            break;
        case "3":
            filtrarPorPrecio();
            break;
        case "4":
            buscarProductoPorNombre();
            break;
        case "5":
            eliminarProducto();
            break;
        case "6":
            alert("¡Hasta luego!");
            // Salir del programa
            window.close();
            break;
        default:
            alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}
