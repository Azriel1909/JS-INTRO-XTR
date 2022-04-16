// TEMA 71 - REEMPLAZAR "IF ELSE" CON SWITCH
 function seleccionarIdioma(valor){
    /*var idioma;
    if (valor == 1) {
        idioma = "Español";
    } else if (valor == 2) {
        idioma = "Francés";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Inglés";
    }
    return idioma;*/
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Inglés";
            break;
    }
    return idioma;
}

console.log(seleccionarIdioma(1));
console.log(seleccionarIdioma(2));
console.log(seleccionarIdioma(3));
console.log(seleccionarIdioma(4));

// TEMA 72 - RETORNAR VALORES BOOLEANOS

function esMenorQue (a,b){
    /*if (a < b) {
        return true;
    } else {
        return false;
    }*/
    // Lo de arriba puede ser reemplazado por lo de abajo.
    return a < b;
}
console.log(esMenorQue(3,9));
console.log(esMenorQue(19,9));

// TEMA 73 - PATRÓN DE RETORNO ANTICIPADO
// Cuando retornamos el valor de una función, la función se detiene completamente, después de return nada se ejecuta-
function myFuction() {
    console.log("Hola");
    return "Mundo";
    console.log("Adiós"); // Código inalcanzable
}
console.log(myFuction());

console.log("RAÍZ CUADRADA DE UN NÚMERO")
function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined; // La operación no esta definida -> RETORNO ANTICIPADO
    }
    // Sí el número es mayor a 0, ya se puede calcular
    return Math.sqrt(num);
}

console.log(calcularRaizCuadrada(9));
console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-9));
console.log(calcularRaizCuadrada(0.20));

// NaN = Not a number -> VALOR ESPECIAL CUANDO UNA FUNCIÓN RETORNA UN NÚMERO NO VALIDO

// TEMA 74 - CONTEO DE CARTAS

//MINI PROYECTO

/**CAMBIO DE CONTEO     CARTAS
 * +1                   2,3,4,5,6
 * 0                    7,8,9
 * -1                   10, 'J','Q','K','A'
 */

var conteo = 0; // Lo iremos incrementando dependiendo el valor de la carta
function contarCartas(carta) {
    //Variable local
    var decision;
    switch (carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;        
    }

    if (conteo > 0) {
        decision = "Apostar";
    } else {
        decision = "Esperar";
    }
    return conteo + " " + decision;
}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas('K'));
console.log(contarCartas('A'));

// TEMA 75 - CREAR OBJETOS
// Nos permiten guardar un conjunto de propiedades relacionadas con sus correspondientes valores

// Así definimos un objeto
var miPerro = {
    "nombre" : "Scott",
    "edad": 11,
    "peso": 2,
    "raza": "Chihuahua"
    //Cada propiedad aparece de lado izquierdo y su valor, de lado derecho.
};
// podemos usar números como propiedades y si no lo rodeamos con comillas, jS los convierte en cadenas (Las propiedades)

// TEMA 76 - ACCEDER A LAS PROPIEDADES DEL OBJETO UTILIZANDO NOTACIÓN PUNTO
var miPerro2 = {
    "nombre" : "Teddy",
    "edad": 9,
    "peso": 3,
    "raza": "Chihuahua"
};

// llamamos el nombre de la variable + . +  propiedad
console.log(miPerro2.nombre);
console.log(miPerro2.edad);
console.log(miPerro2.peso);
console.log(miPerro2.raza);

// TEMA 76 - ACCEDER A LAS PROPIEDADES DEL OBJETO UTILIZANDO NOTACIÓN CORCHETES

var miCuaderno = {
    "color" : "morado",
    "materia": "poo",
    "paginas": 100,
    "Nombre del alumno" : "Ximena"
};

// llamamos el nombre de la variable + . +  propiedad
console.log(miCuaderno.color);
console.log(miCuaderno.materia);
console.log(miCuaderno.paginas);
//console.log(miCuaderno.Nombre del alumno); // ERROR
console.log(miCuaderno["Nombre del alumno"]);

// TEMA 77 - ACCEDER A PROPIEDADES CON VARIABLES
// USAMOS notación de corchetes

var resultados = {
    1: "xime99",
    2: "Nebula0",
    3: "Huergo02",
    4: "Scotty77"
}

var posicion = 4;
console.log(resultados[posicion]);
var posicion = 1;
console.log(resultados[posicion]);

// TEMA 78 - ACTUALIZAR PROPIEDADES

var miMochila = {
    color: "rosa",
    tamaño: "grande",
    tipo: "escolar",
    contenido: ["Cuaderno 1", "Bloqueador solar"]
}
console.log(miMochila.color);
// Para cambiar el valor
miMochila.color = "morado";
// Ya cambio el color
console.log(miMochila.color);
// Agregar algo a la mochila
console.log(miMochila.contenido);
//agregamos una calculadora
miMochila.contenido.push("Calculadora científica");
console.log(miMochila.contenido);
// Reasignarlo por otro arreglo
miMochila = [];
console.log(miMochila.contenido);

// TEMA 79 - AGREGAR PROPIEDADES

var curso = {
    tema: "Curso de HTML",
    idioma: "Español",
    tiempo: 9
}
curso.cupo = 100;
console.log(curso.cupo);
//notación de corchetes para crear la propiedad
curso["profesor"] = "Ximena Toledo";

// TEMA 79 - ELIMINAR PROPIEDADES
// delete - eliminar o borrar

var curso1 = {
    tema: "Curso de CSS",
    idioma: "Español",
    tiempo: 9
}
console.log(curso.tiempo);
delete curso.tiempo;
console.log(curso.tiempo);
console.log(curso); // muestra el objeto completo
// esto borra la propiedad

// TEMA 80 - OBJETOS PARA BÚSQUEDAS

function buscarElementoQuimico(simbolo) {

    var simbolorQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio"
    };
    return simbolorQuimicos[simbolo];
}
console.log(buscarElementoQuimico("AL"));
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));

// TEMA 81- VERIFICAR PROPIEDADES
var miCuaderno2 = {
    color : "Cardenal",
    tipo: 9,
    precio: 44
}
// Método para verificar propiedades "hasOwnProperty("
console.log(miCuaderno2.hasOwnProperty("color")); //true
console.log(miCuaderno2.hasOwnProperty("materia")); //false

function verificarPropiedades (objeto, propiedad) {
    if (objeto.hasOwnProperty(propiedad)) {
        return "propiedad: " + objeto[propiedad]; // Aquí debemos usar corchetes
    } else {
        return "> El objeto no tiene la propiedad";
    }
}
var miCuaderno3 = {
    "color" : "Cardenal",
    tipo: 9,
    precio: 44
}
// Se verifica
console.log(verificarPropiedades(miCuaderno3, "color"));
console.log(verificarPropiedades(miCuaderno3, "tipo"));
console.log(verificarPropiedades(miCuaderno3, "materia"));
//console.log(verificarPropiedades(miCuaderno3, precio)); // error

// TEMA 82 - OBJETOS COMPLEJOS

// ARREGLOS DE OBJETOS []
var ordenesDePizza = [
    {
        "tipo": "Pepperoni",
        "tamaño": "familiar",
        "precio": "250",
        "toppings": [
            "Queso extra",
            "Pepperroni español",
            "Orilla rellenas"
        ],
        "para llevar": true
    },
    {
        "tipo": "Hawaianna",
        "tamaño": "mediana",
        "precio": "200",
        "toppings": [
            "Queso extra",
            "piña",
            "jamon extra"
        ],
        "para llevar": false
    },
    // Agregar una tercera orden de pizza
    {
        "tipo": "Al pastor",
        "tamaño": "grande",
        "precio": "220",
        "toppings": [
            "Queso extra",
            "piña"
        ],
        "para llevar": true
    }
];

console.log(ordenesDePizza[0]);
console.log("-----------------------");
console.log(ordenesDePizza[1]);
console.log("-----------------------");
console.log(ordenesDePizza[0].tipo);
console.log("-----------------------"); // notación punto
console.log(ordenesDePizza[0]["tipo"]); // notación de corchetes
console.log("-----------------------"); 
console.log(ordenesDePizza[0].toppings);
console.log("-----------------------"); 
console.log(ordenesDePizza[1].toppings);

// Ejemplo 2 de objeto anidado
var miRecera = {
    "descripcion" : "Mi postre favorito",
    "costo": "19.9",
    "ingredientes": {
        "masa": {
            "harina": "100 gramos",
            "sal": "1 cucharaditas",
            "agua": "1 taza"
        },
        "cobertura":{
            "azucar": "119 gramos",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 gramos"
        }
    }
}
console.log(miRecera.descripcion);
console.log(miRecera.costo);
console.log(miRecera.ingredientes); // Objeto anidado
console.log("-----------------------");
console.log(miRecera.ingredientes.masa);
console.log(miRecera.ingredientes.masa.harina);
console.log(miRecera.ingredientes.masa.sal);
console.log(miRecera.ingredientes.masa.agua);
console.log("-----------------------"); // con corchetes
console.log(miRecera.ingredientes.masa);
console.log(miRecera.ingredientes.masa["harina"]);
console.log(miRecera.ingredientes.masa["sal"]); 
console.log(miRecera.ingredientes.masa["agua"]);
console.log("-----------------------"); // cobertura 
console.log(miRecera.ingredientes.cobertura);
console.log(miRecera.ingredientes.cobertura.azucar);
console.log(miRecera.ingredientes.cobertura.chocolate)
console.log(miRecera.ingredientes.cobertura.mantequilla);

//  JSON  = JavaScript Object Notation
// formato utilizado en desarrollo web

// TEMA 83 - ARREGLOS ANIDADOS
// Objeto parte de un arreglo
console.log("-----------------------");
var misPLantas = [
    {
        tipo: "flores",
        lista: [ // aRREGLOS ANIDADOS
            "rosas",
            "tulipanes",
            "girasoles"
        ]
    },
    {
        tipo: "árboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }

];

// Para acceder a estos elementos
var primerFlor = misPLantas[0]; // Para acceder al primer objeto
console.log(primerFlor);
console.log("-----------------------");
// Para acceder a lista utilizando notación punto
var primerFlor = misPLantas[0].lista[0];
console.log(primerFlor);
console.log("-----------------------");
var segundoTree = misPLantas[1].lista[0]; // segundo elemento del objeto 2
console.log(segundoTree);
console.log("-----------------------");
var tercerTree = misPLantas[1].lista[1]; // segundo elemento
console.log(tercerTree);
console.log("-----------------------");
var cuartoTree = misPLantas[1].lista[2]; // segundo elemento
console.log(cuartoTree);

// TEMA 84 - COLECCIÓN DE DISCOS
// Objeto anidado 1
console.log("-----------------------");
var coleccionDeDiscos = {
    7853: { // Propiedad 1
        titulo:"Bee Gee Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: { // propiedad 2
        titulo: "ABBA Gold"
    }
};

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad]; // retorna objeto anidado que corresponde al album
    } else if ( propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || []; // destinamos arreglo vació
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
    
}
console.log(coleccionDeDiscos[7853].titulo);
console.log("-----------------------");
actualizarDiscos(coleccionDeDiscos, 7853, "titulo",  "");
console.log("-----------------------");
console.log(coleccionDeDiscos[7853].titulo);
console.log("-----------------------");
console.log(coleccionDeDiscos[5439].canciones);
console.log("-----------------------");
actualizarDiscos(coleccionDeDiscos, 5439, "canciones",  "Mamma Mia");
console.log("-----------------------");
console.log(coleccionDeDiscos[5439].canciones);

console.log("-----------------------");
console.log(coleccionDeDiscos[5439].artista);
console.log("-----------------------");
actualizarDiscos(coleccionDeDiscos, 5439, "artista",  "ABBA");
console.log("-----------------------");
console.log(coleccionDeDiscos[5439].artista);
