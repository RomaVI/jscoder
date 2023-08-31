// Algoritmo con un condicional "?"" 
alert("2 ej sin preguntas ");
let precio = 100;
let descuento = precio > 50 ? 10 : 0; // Uso de operador ternario, es mas corto con ? 
let precio_final_condicional = precio - descuento;

console.log("Precio final con condicional:", precio_final_condicional); // sin prompt

// Algoritmo para calcular valor final con impuestos y descuentos
let precio_inicial = 200;
let impuestos = 0.15;
let descuento_valor = 20;

let precio_con_impuestos = precio_inicial * (1 + impuestos);
let precio_final_descuento = precio_con_impuestos - descuento_valor;
console.log("Precio final con descuento:", precio_final_descuento);


// Algoritmo utilizando un ciclo (bucle) con for 

let total = 0;
alert("suma de productos  ");
for ( i = 0; i < 5; i++) {
    let producto = parseFloat(prompt("Ingrese el precio del producto"+ i + ": "));
    total += producto;
}

console.log("Total a pagar:", total);

// cuotas 
alert("Ej de cuotas  ");
let monto = parseFloat(prompt("Ej 2 Ingrese el monto total: "));        //poner float para n con decimal  :D
let cuotas = parseInt(prompt("Ej 2 Ingrese la cantidad de cuotas: "));

let pago_por_cuota = monto / cuotas;
console.log("Pago mensual:", pago_por_cuota);


// Algoritmo utilizando un ciclo (bucle) con for 
alert("Ej de buche for  ");
alert("No ingrese un numero largo o se le cansara la muñeca ");
let total_turnos = parseInt(prompt("Ej 3 Ingrese la cantidad total de turnos: "));
let tiempo_total = 0;

for ( i = 0; i < total_turnos; i++) {
    let tiempo = parseInt(prompt(`Ingrese el tiempo de espera del turno ${i + 1}: `));
    tiempo_total += tiempo;
}

let tiempo_promedio = tiempo_total / total_turnos;
console.log("Tiempo de espera promedio:", tiempo_promedio);

// Algoritmo utilizando un ciclo (bucle) con while 
alert("Con while ");
alert("No ingrese un numero largo o se le cansara la muñeca x2 ");
let total_personas = parseInt(prompt("Ingrese la cantidad total de personas: "));
let edades_total = 0;
let contador = 0;

while (contador < total_personas) {
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${contador + 1}: `));
    edades_total += edad;
    contador++;
}

let edad_promedio = edades_total / total_personas;
console.log("Edad promedio:", edad_promedio);

// Algoritmo utilizando un ciclo (bucle) con for}
alert("Ej de notas ");
let total_alumnos = parseInt(prompt("Ingrese la cantidad total de alumnos: "));
let notas_total = 0;

for ( i = 0; i < total_alumnos; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota del alumno ${i + 1}: `));
    notas_total += nota;
}

let nota_final = notas_total / total_alumnos;
console.log("Nota final promedio:", nota_final);
alert("Fin <3 ");
