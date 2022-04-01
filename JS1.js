/*TEMA 1 - COMENTARIOS
Informar sobre el código*/

// Comentado de una línea

/*TEMA 2 - TIPOS DE DATOS
undefined 
null 
boolean
string
symbol
number
object
*/

/*TEMA 3 - VARIABLES 
Variable = Una caja donde guardamos valores.
Crea un espacio en la memoria del dispositivo para guardar un valor especifico en ese lugar.*/

var miVariable1 = "Megalodon";

/**Cuando rodeamos una secuencia de caracteres entre comillas, creamos una cadena de caracteres = string.*/

/* = Es el operador de asignación en js.*/

// Para mostrar el valor, llamamos a la función "Console" para mostrar el valor dentro del paréntesis

console.log(miVariable1);

// El valor de la variable puede cambiar

miVariable1 = 19;
console.log(miVariable1);

var miNombre  = "Ximena";
console.log(miNombre);

// Debemos ser descriptivos en el nombre de las variables

// Usar camelCase

// TEMA 4 - OPERADOR DE ASIGNACIÓN

var a;
var b = 9;

console.log(a); // undefined : valor por defecto que se le asigna a una variable sin valor
console.log(b); // Tiene valor asignado

a = 19; // Ahora se tienen un valor
console.log(a);

// TEMA 5 - ASIGNAR EL VALOR DE UNA VARIABLE A OTRA VARIABLE

var a1 = 3;
var b1 = a1;
console.log(a1);
console.log(b1);

// Versión alternativa.

var a2 = 9;
var b2;
b2 = a2;
console.log(b2);

// TEMA 6 - INICIALIZAR VARIABLES

var x = 9; // inicializando la variable (se declara y posteriormente se le asigna el valor 9)

var miApellido = "Toledo";

// TEMA 7 - VARIABLES NO INICIALIZADAS

var y; // undefined 

// TEMA 8 - MAYÚSCULAS Y MINÚSCULAS

var miVariable2 = 9;
// console.log(MIVARIABLE); Error de referencia, debe ser la comunicación exacta de mayúsculas y minúsculas
console.log(miVariable2);

// Case-sensitive - Forma de referirnos a que es sensible a mayúsculas y minúsculas a los nombres en el programa

// TEMA 9 - SUMA (OPERACIONES ARITMÉTICAS)

var suma = 10 + 9;
console.log(suma);

// TEMA 10 - RESTA

var resta = 20 - 9; // Positivo
console.log(resta);
resta = 9 - 20;     // Negativo
console.log(resta);
resta = 9 - 9;      // Cero
console.log(resta);

// TEMA 11 - PRODUCTO

var producto = 9*9;
console.log(producto);
producto = 9 * 0;
console.log(producto);
producto = -9 * 10;
console.log(producto);

// TEMA 12 - DIVISIÓN

var cociente = 90/9;
console.log(cociente);
cociente = 90/9.9;     // Número finito de decimales (Aproximación), redondea.
console.log(cociente);
cociente = 9/0;
console.log(cociente); // Infinito

// TEMA 13 - NÚMEROS DECIMALES

var numeroDecimal = 99.99;
var peso = 9.81;

// TEMA 14 - MULTIPLICAR NÚMEROS DECIMALES

var productoDecimal = 9.9 * 10.1;
console.log(productoDecimal);
producto = 10.5 * 100;
consoles.log(productoDecimal);
producto = 10 * 100.5;
consoles.log(productoDecimal);
producto = 10 * 0.0;
consoles.log(productoDecimal);
producto = - 10 * 1.5;
consoles.log(productoDecimal);

// TEMA 15 - DIVIDIR NÚMEROS DECIMALES

var cociente2 = 9.0 / 3.0; // EL tipo de dato representado como decimal
console.log(cociente2);
cociente2 = 2.9 / 8.19;
console.log(cociente2);
cociente2 = 2.9 / 0.0; // Infinity
console.log(cociente2);

// TEMA 15 - RESTO DE DIVIDIR NÚMEROS DECIMALES
// Sólo llegar a la parte entera del resto
var resto = 19 % 3;
console.log(resto);
resto = 9 % 1;
console.log(resto);
resto = 9 % 9;
console.log(resto);

// TEMA 16 - INCREMENTAR EL VALOR DE UNA VARIABLE

var tiburones = 300;
console.log(tiburones); // Inicio
// opción 1
tiburones = tiburones + 1;
console.log(tiburones);
// opción 2
tiburones++; // Sólo incrementar en 1
console.log(tiburones);

// TEMA 17 - REDUCIR EL VALOR DE UNA VARIABLE

var estudiantes = 30;
console.log(estudiantes);
estudiantes = estudiantes - 1;
console.log(estudiantes);
estudiantes--;
console.log(estudiantes);

// -- Operador de decremento

console.log(ventas);
var c = 29;
c = c + 5;
console.log(c);

// Alternativa

var c1 = 29;
c1 += 5;
console.log(c1);

var ventas = 9_999;
console.log(ventas);
ventas += 99.5;
console.log(ventas);

// TEMA 18 - ASIGNACIÓN DE RESTA
var d = 29;
d = d - 9;
console.log(d);

var d1 = 29;
d1 -= 9; // Restamos 9 y le asignamos a d1
console.log(d1);

var deudas = 2_444;
deudas -= 200;
console.log(deudas);

// TEMA 19 - ASIGNACIÓN DE MULTIPLICACIÓN 
var e = 19;
e = e * 3;
console.log(e);
// alternativa
var e1 = 19;
e1 *= 3;
console.log(e1);

var salario = 30_000;
console.log(salarios);
salario *= 9;
console.log(salario);

// TEMA 20 - ASIGNACIÓN DE DIVISIÓN

var f = 39;
f = f / 3;
console.log(f);
// alternativa, utiliza alt 
var f1 = 39;
f1 /= 3;
console.log(f1);

var recorte = 50_000;
recorte /= 2;
console.log(recorte);

// TEMA 21 - VARIABLES CON CADENAS DE CARACTERES 

var miNombre = "Ximena";
var pana = "Turing";

// TEMA 22 - ESCAPAR COMILLAS EN CADENAS DE CARACTERES

// var miCadena = "Cadena con comillas "hola""; -> Problema

// Solución = Scape = omitir las comillas , colocarlas como caracteres.

var miCadena = "Cadena con comillas \"dobles\""; // Se incluyeron las comillas
console.log(miCadena);

// TEMA 23 - CADENAS DE CARACTERES CON COMILLAS SIMPLES 

var miCadena2 = 'Cadena con comillas "simples"'; // Ya no existe error y las comillas dobles se incluyen en la cadena de caracteres

console.log(miCadena2);

// TEMA 24 - SECUENCIAS DE SCAPE
/**
 * Combinación de caracteres que no se representan así mismo en una cadena de caracteres
 * \' comilla simple
 * \" comilla doble
 * \\ barra invertida
 * \n Línea nueva
 * \r Retorno de carro
 * \t Tabulación
 * \b Retroceso
 * \f Salto de página
 */

console.log("Estoy muy feliz y siento ...\"éxtasis\"");
console.log("Estoy muy feliz y siento ...\ éxtasis");
console.log("Estoy muy feliz y siento ...\néxtasis");
console.log("Estoy muy feliz y siento ...\réxtasis");

// TEMA 25 - CONCATENAR CADENAS DE CARACTERES
var nombreCompleto = "Ximena" + "Toledo";
console.log(nombreCompleto); // sin separación en las cadenas
var nombreCompleto = "Ximena" + " Toledo";
console.log(nombreCompleto); // espacio equivalente

// TEMA 26 - CONSTRUIR CADENAS CON VARIABLES
var verbo = "Programar";
var mensaje = "Me apasiona " + verbo;
console.log(mensaje);
var mensaje = "Me apasiona " + verbo + " y dibujar.";
console.log(mensaje);

// TEMA 27 - AGREGAR VARIABLES A CADENAS DE CARACTERES 
var mensajeInicial = "Me encanta programar ";
var mensajeFinal = "Y diseñar.";
mensajeInicial += mensajeFinal;
console.log(mensajeInicial);

// TEMA 28 - LONGITUD DE UNA CADENA DE CARACTERES
// Cuántos caracteres tiene un cadena de caracteres

var miCadena3;
miCadena3 = "A";
console.log(miCadena3.length); // 1 carácter
var miCadena3;
miCadena3 = "A B";
console.log(miCadena3.length); // 3 caracteres
miCadena3 = "JavaScrip";
console.log(miCadena3.length);

// TEMA 29 - NOTACIÓN DE CORCHETES - PRIMER CARÁCTER

var lenguajesDeProgramación = "C++";
console.log(lenguajesDeProgramación[0]); // Veremos el primer carácter 

/**
 * Cadena:   C + +
 * Índice:   0 1 2
 */

// TEMA 30 - INMUTABILIDAD DE CADENAS DE CARACTERES

/**Mutables -> Que se pueden cambiar
 * Inmutabilidad -> Que no se pueden cambiar
 * Una vez que definimos una cadena de caracteres en el programa, no podremos cambiar sus elementos individuales
 */
var hola = "gola, soy Ximena.";
console.log(hola);
hola[0] = "H"; // ERROR, lás cadenas son inmutables(no cambian sus elementos/caracteres individuales), deberías reasignar la cadena completa.
var hola = "Hola, soy Ximena."; // Reasignar toda la cadena
console.log(hola);

// TEMA 31 - NOTACIÓN DE CORCHETES: ENÉSIMO CARÁCTER
var miCadena4 = "HOLA";
/**
 * Cadena:   H O L A
 * Índice:   0 1 2 3
 */
console.log(miCadena4[0]); // H
console.log(miCadena4[1]); // O
console.log(miCadena4[2]); // L
console.log(miCadena4[3]); // A
console.log(miCadena4[4]); // UNDEFINED

// TEMA 32 - NOTACIÓN DE CORCHETES: ÚLTIMO CARÁCTER
var miCadena5;
/**El último indice siempre es longitud -1 porque comenzamos a contar desde 0
 * miCadena5.length para JavaScript es "10"
 * El último índice es 9
 * Cadena: J a v a S c r i p t
 * índice: 0 1 2 3 4 5 6 7 8 9
 */
miCadena5 = "JavaScript";
console.log(miCadena5[miCadena5.length-1]);

// TEMA 33 - NOTACIÓN DE CORCHETES: DE DERECHA A IZQUIERDA

var miCadena6;
/**El penúltimo indice siempre es longitud -2 porque comenzamos a contar desde 0.
 * miCadena5.length para JavaScript es "10"
 * El último índice es 9
 * Cadena: J a v a S c r i p t
 * índice: 0 1 2 3 4 5 6 7 8 9
 */
 miCadena6 = "JavaScript";
 console.log(miCadena5[miCadena5.length-2]); // índice 8 = p
