// TEMA 35 - ARREGLOS
/**Estructuras de datos que permiten almacenar mutiles valores en una misma estructura
 */

var miArreglo = ["Xime", 20];
console.log(miArreglo);
var amigos = ["Maria", "Dana", "Miguela", "Luisa"];
console.log(amigos);
var calificaciones = [100, 100, 90, 70];
console.log(calificaciones);

// TEMA 36 - ARREGLOS ANIDADOS

var listaDeEstudiantes = [["Moyo", 100], ["Xime", 100]];
console.log(listaDeEstudiantes);

var listaDePrecios = [["shampoo", 45, "S"], ["Jabón Corporal", 50, "JC"], ["Crema Corporal", 30, "CC"]] // arreglo que contiene un secuencia de arreglos

console.log(listaDePrecios); // Arreglo principal con 3 arreglos anidados

var miArreglo1 = [10, 20, 30];

/**
 * Arreglo: [10, 20, 30]
 * índice: [  0   1   2]
 */
console.log(miArreglo1[0]); //10
console.log(miArreglo1[1]); //20
console.log(miArreglo1[2]); //30

var suma = miArreglo1[0] + miArreglo1[1] + miArreglo1[2];
console.log(suma);

// TEMA 37 - MODIFICAR ELEMENTO DE UN ARREGLO
var miArreglo2 = [10, 20, 30];
miArreglo2[0] = 40; // Actualizar valor en el índice 0, los arreglos son mutables y se puede cambiar un elemento individual del arreglo
miArreglo2[1] = "Ximena";
miArreglo2[2] =[1, 2, 3]; // 

// TEMA 37 - ACCEDER A ARREGLOS MULTIDIMENSIONALES

/**Los arreglos que contienen arreglos anidados se llaman multidimensional */

var multiArreglo = [[1,2,3], [4,5,6], [7,8,9]];

/**
 * Arreglo:             [[1,2,3], [4,5,6], [7,8,9]]
 * índices:                0         1         2
 * índices internos:      0 1 2    0 1 2   0 1 2
 */

console.log(multiArreglo[0]); // [1,2,3]
console.log(multiArreglo[1]); // [4,5,6]
console.log(multiArreglo[2]); // [7,8,9]

console.log(multiArreglo[0][1]); // [1,2,3]
console.log(multiArreglo[1][2]); // [4,5,6]
console.log(multiArreglo[2][0]); // [7,8,9]


//Para mantenernos en un mismo arreglo
console.log(multiArreglo[1][0]); // 4
console.log(multiArreglo[1][1]); // 5
console.log(multiArreglo[1][2]); // 6

console.log(multiArreglo[0][0]); // 1
console.log(multiArreglo[0][1]); // 2
console.log(multiArreglo[0][2]); // 3

console.log(multiArreglo[2][0]); // 7
console.log(multiArreglo[2][1]); // 8
console.log(multiArreglo[2][2]); // 9

// TEMA 38 - .push() - agregar elemento

var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

// TEMA 38 - .pop() - eliminar elemento

var estaciones2 = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones2.pop("Verano");
console.log(estaciones2);

// TEMA 39 - .shift() - remover el primer elemento del arreglo

var estaciones3 = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones3.shift(); // no necesitamos especificar un valor
console.log(estaciones3); 

// TEMA 40 - .unshift() - agregar  un elemento al principio de un arreglo

var estaciones4 = ["Invierno", "Otoño", "Primavera"];
estaciones4.unshift("Verano"); // agregar al principio del arreglo
console.log(estaciones4); 

// TEMA 41 - LISTA DE COMPRAS

var listaCompras = [["Yogurt",1], ["Galletas", 4], ["Cereal", 2], ["Shampoo", 3]];
console.log("voy a comprar " + listaCompras[2][1] + " cajas de " + listaCompras[2][0] + ".");

console.log("voy a comprar " + listaCompras[3][1] + " botes de " + listaCompras[3][0] + ".");

console.log("voy a comprar " + listaCompras[1][1] + " cajas de " + listaCompras[1][0] + ".");

console.log("voy a comprar " + listaCompras[0][1] + " bote de " + listaCompras[0][0] + ".");

// TEMA 42 - FUNCIONES

function mostrarMensaje() {// Estructura general
    console.log("¡Hola, brother!");
}
mostrarMensaje(); // Se muestra en consola 

// TEMA 43 - ARGUMENTOS

function sumatoria(a, b) { // Parámetros de la función, valor recibidos cuando llameamos a la función.
    // Cuerpo de la función
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
// Los valores pasados a los parámetros son argumentos.
// Argumentos - valores que le asignamos a los parámetros.

sumatoria(10, 9);
sumatoria(3, 6);
sumatoria(5, 4);
sumatoria(9, 4);


function concatenarCadena (cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarCadena("Hola,", "soy", "Ximena");

// TEMA 43 - ÁMBITO GLOBAL

// Variable que se puede modificar en cualquier lugar del programa
var miVariableGlobal = 9;
console.log(miVariableGlobal); // 9
function miFun() {
    console.log(miVariableGlobal); // 9
}
miFun();
console.log(miVariableGlobal); // 9


// TEMA 44 - ÁMBITO LOCAL

// Variable que definimos dentro de una función y sólo se pueden usar dentro de esa función
function miFun1() {
    var miVariableLocal = 99;
    console.log(miVariableLocal);
}
miFun1();
console.log(miVariableLocal); // ERROR DE REFERENCIA - LA VARIABLE NO ES DEFINIDA

// TEMA 45 - ÁMBITO GLOBAL VS ÁMBITO LOCAL
var miNombre = "Xime";
function mostrarNombre(){
    var miNombre = "Toledo";
    console.log(miNombre); // La variable local tiene mayor prioridad que una variable global dentro de la función
}
mostrarNombre(); // Se llama  la función con la variable local
console.log(miNombre);  // Se usa el valor d la variable global

// TEMA 46 - RETORNAR UN VALOR

function sumatoria1(a,b) {
    return a + b;
}
console.log(sumatoria1(5,4));

// TEMA 47 - UNDEFINED

// Podemos no retornar ningún valor de la función, la función retorna un valor por defecto (undefined)
function sumatoria2(a,b) {
    console.log(a + b); // Se muestra valor de la suma
}
console.log(sumatoria2(5,4)); // El valor retornado en undefined

// TEMA 48 - ASIGNAR VALOR RETORNADO

function sumatoria3(a,b) {
    return a + b;
}
// Guardar el valor

var resultado = sumatoria3 (5,4);

function crearCadenaConMeta(carrera) {
    return "Mi meta es terminar mi ingeniería " +  carrera;
}
var miMeta = crearCadenaConMeta("en computación.");
console.log(miMeta);

// TEMA 49 - PERMANECE EN LINEA
/** En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran al principio de la cola.
 */

function proximoEnLaFila(arreglo, elemento){
    arreglo.push(elemento); // Agregar al final del arreglo.
    return arreglo.shift(); // Remover el primer elemento del arreglo
}

var miArreglo3 = [1, 2, 3, 4, 5];
console.log("Antes: "+ JSON.stringify(miArreglo3)); // Se convierte el arreglo en una cadena de caracteres.
proximoEnLaFila(miArreglo3, 6); // Se agrega el elemento 6

console.log("Después: "+ JSON.stringify(miArreglo3)); // Se convierte el arreglo en una cadena de caracteres.

// TEMA 50 - VALORES BOOLEANOS
/**
 * BOOLEAN - VALORES VERDADERO Y FALSO
 * TRUE Y FALSE
 */

console.log(true);
console.log(false);