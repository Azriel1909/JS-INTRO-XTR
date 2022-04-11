// TEMA 51 - OPERADOR DE IGUALDAD ESTRICTA
// IGUALDAD
console.log( 9 == 9);  // true
console.log(9 == "9"); // true
console.log(9 == '9')
// IGUALDAD ESTRICTA
console.log( 9 === 9); // true
console.log( 9 === "9"); //false 
// TEMA 52 - PRACTICAR CÓMO COMPARAR VALORES

var a;
var b;
a = 5;
b = 5;
console.log(a == b); // true
console.log(a === b); // true
b = 8;
console.log(a == b); // false
console.log(a === b);
b = "5";
console.log(a == b); // true
console.log(a === b); // false

a = "JavaScript";
b = "JavaScript";
console.log(a === b); // true

// TEMA 53 - DESIGUALDAD 
console.log(9 != 6); //true
console.log(9 != 9); //false
console.log("JavaScript" != "JavaScript" ); //false
// En caso de los arreglos con el operador, cómo están representados como objetos en la memoria del dispositivo.
console.log([1,2,3] != [1,2,3]);
// Los arreglos son objetos independientes en la memoria del dispositivo -> relación al almacenamiento en memoria

// TEMA 54 - DESIGUALDAD ESTRICTA
// Desigualdad normal
console.log(1 != "1"); // false
// Desigualdad estricta
console.log(1 !== "1"); // true

// TEMA 55 - OPERADOR "MAYOR QUE..." >

// Comparamos valores relativos 
console.log( 6 > 5); // true
console.log( 3 > 10); // false

// JavaS compara  las cadenas según el orden alfabético de las cadenas (cada uno de los caracteres en su secuencia)
console.log("COMPARACIÓN DE CADENAS...");
console.log("B" > "A"); //true
console.log("ACB" > "ABC"); // true
console.log("AB" > "A"); // true
console.log("Mundo" > "Hola"); // true
console.log("COMPARACIÓN CON MINÚSCULAS...");
console.log("A">"a");
console.log("a">"A");

// TEMA 56 - OPERADOR "MAYOR O IGUAL A QUE..." >=
console.log(">="); //false
console.log(5 > 5); //false
console.log(5 >= 5); //true

// TEMA 57 - OPERADOR "MENOR QUE..." <

console.log("<"); //true
console.log(5 < 6); //true
console.log(10 < 3); //false
console.log("A" < "B"); //true
console.log("ABC" < "ACB"); //true

var a = 15;
var b = 7;
console.log( a < b ); // false
console.log( b < a ); // true

// TEMA 58 - OPERADOR "MENOR O IGUAL A QUE..." <=

console.log("<="); //true
console.log(5 < 5); //false
console.log(5 <= 5); //true

// TEMA 59 - OPERADORES LÓGICOS

/**
 * TABLA DE VERDAD DEL OPERADOR AND
 * PARA: X && Y
 * 
 * X    Y   X && Y
 * T    T     T
 * T    F     F
 * F    T     F
 * F    F     F
 * La expresión sólo es verdadera cuando ambos operandos son verdaderos.
 * 
 */
console.log("AND");

var a = 8;
console.log((a > 5) && (a < 10)); // true

var a = 3;
console.log((a > 5) && (a < 10)); // false

var a = 15;
console.log((a > 5) && (a < 10)); // false

var a = 1;
console.log((a > 5) && (a < 3)); // false


// TEMA 60 - OPERADOR OR

/**
 * TABLA DE VERDAD DEL OPERADOR AND
 * PARA: X || Y
 * 
 * X    Y   X || Y
 * T    T     T
 * T    F     T
 * F    T     T
 * F    F     F
 * La expresión es verdadera si alguno de los dos operandos o ambos son verdaderos.
 * 
 */
 console.log("OR");

 var a = 8;
 console.log((a > 5) || (a < 19)); // false
 
 var a = 3;
 console.log((a > 5) || (a < 10)); // false
 
 var a = 15;
 console.log((a > 5) || (a < 10)); // false
 
 var a = 1;
 console.log((a > 5) || (a < 1)); // false

 // TEMA 61 - OPERADOR NOT

/**
 * TABLA DE VERDAD DEL OPERADOR AND
 * PARA: !X
 * 
 * X    !X
 * T    F     
 * F    T         

 */

 console.log("NOT");

 var a = 8;
 console.log(!(a > 5)); // false
 
 console.log(!(a < 5)); // true
 

 // TEMA 62 - CONDICIONALES
 // Nos permiten decidir si un bloque de código se ejecuta o no dependiendo de una condición
console.log("IF");
 if (true) {
    console.log("La condición es verdadera...");
 }

var x = 5;

 if (x > 2) {
     console.log("El número es mayor a 2.");
 }


 if (x < 2) { // no se ejecuta
     console.log("El número es mayor a 2.");
 }
 

 var estacion = "Invierno";
 if (estacion == "Invierno") {
     console.log("Abrígate...");
 }

  // TEMA 63 - CLÁUSULA "ELSE"

console.log("IF/ELSE");
  if (true) {
      console.log("La condición es verdadera...");
  } else {
      console.log("La condición es falsa...");
  }

var x = 5;
if (x < 2) {
    console.log("El número es menor a dos...");
} else {
    console.log("El número es mayor a dos...");
}

var station = "Invierno";
if (station === "Verano") {
    console.log("Ya es verano...");

} else {
    console.log("No es verano...");
}

// TEMA 64 - CLÁUSULA "ELSE IF"

// Manejar condiciones alternativas

console.log("ELSE IF");
function clasificarValor (valor) {
    if (valor % 2 == 0) {
        console.log("Divisible entre 2...");
    }  else if (valor % 3 == 0) {
        console.log("Divisible entre 3...");
    }
    else {
        console.log("No es divisible entre las opciones...");
    }
}
clasificarValor(2);
clasificarValor(15);
clasificarValor(19);
clasificarValor(11);

// TEMA 65 - ORDEN LÓGICO DE CONDICIONALES

function clasValor (valor) {
    if (valor < 5) {
        console.log("Valor menor a 5."); // Se ejecuta el código de la primera condición que sea verdadera
    } else if ( valor < 10 ) {
        console.log("Valor menor a 10");
    } else {
        console.log("Mayor o igual a 10.");
    }
}
clasValor(2);
clasValor(3);
clasValor(7);
clasValor(10);
clasValor(19);

// TEMA 66 - ENCADENAR SENTENCIAS "IF ELSE"
console.log("IMC");
function interpretarIMC(valorIMC) {
    if (valorIMC < 18.5) {
        console.log("Peso bajo...");
    } else if (valorIMC <= 24.9)
    {
        console.log("Peso normal...");
    } else if (valorIMC <= 29.9 ) {
        console.log("Sobrepeso...");
    } else {
        console.log("Obeso");
    }
}
interpretarIMC(17.8);
interpretarIMC(20.8);
interpretarIMC(19.8);
interpretarIMC(30.8);

// TEMA 67 - CÓDIGO DE GOLF
/**GOLPES   RETORNAR
 * 1        "Hole-in-one!"
 * <=par-2  "Eagle"
 * par-1    "Birdie"
 * par       par
 * par+1    "Bogey"
 * par+2    "Double Bogey"
 * >=par+3  "Go home!"
 * 
 * PAR Y GOLPES SIEMPRE SERÁN NUMÉRICOS Y POSITIVOS 
 */

 console.log("GOLF----------------");
function puntajeGolf (par,golpes) {
    if (golpes == 1) {
        console.log("Holes-in-one!");
    } else if (golpes <= par - 2) {
        console.log("Eagle");
    } else if (golpes ==  par - 1) {
        console.log("Birdie");
    } else if (golpes == par) {
        console.log("Par");
    } else if (golpes == par + 1) {
        console.log("Bogey");
    } else if (golpes == par + 2) {
        console.log("Double Bogey");
    } else if (golpes >= par + 3) {
        console.log("Go home!");
    }
}
puntajeGolf(4,1);
puntajeGolf(2,3);
puntajeGolf(3,9);
puntajeGolf(3,6);
puntajeGolf(1,6);

// TEMA 68 - SENTENCIAS SWITCH

console.log("SWITCH");

function clasValor1 (valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta;
}
console.log(clasValor1(1));
console.log(clasValor1(2));
console.log(clasValor1(3));
console.log(clasValor1(4));
console.log(clasValor1(5));

console.log("COMIDA");
let producto = "burger";
switch (producto) {
    case "pizza":
        producto = "pizza básica - 100 $";
        break;
    case "burger":
        producto = "burger básica - 50 $";
        break;
    case "helado":
        producto = "helado - 20 $";
        break;    
}

// TEMA 69 - SENTENCIAS SWITCH - OPCIÓN PREDETERMINADA
console.log("IDIOMA");

function seletIdioma (valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Alemán";
            break;
        case 3:
            idioma = "Inglés";
            break;
        default:
            idioma = "Francés";
            break; // opcional
    }
    return idioma;
}
console.log(seletIdioma(1));
console.log(seletIdioma(2));
console.log(seletIdioma(3));
console.log(seletIdioma(4));

// TEMA 70 - SENTENCIAS SWITCH - MÚLTIPLES CASOS 
console.log("CLASIFICAR VOLUMEN");
function clasificarVolum (valor) {
    var volumen;
    switch (valor) {
        case 1: 
        volumen = "Bajo";
        break;
        case 2: 
        case 3: 
        volumen = "Intermedio";
        break;
        case 4:
        case 5:
        case 6:
        volumen = "Alto";
        break;
    }
    return volumen;
}
console.log(clasificarVolum(1));
console.log(clasificarVolum(2));
console.log(clasificarVolum(3));
console.log(clasificarVolum(4));
console.log(clasificarVolum(5));
console.log(clasificarVolum(6));