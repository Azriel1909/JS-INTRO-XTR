// Array Insert Splice
// File - ArregloJS2.js
// By XImena Toledo Rivera

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log('BEFORE');
console.log(num);

// Insert number 20 in index 18
const insertToIndex = 19;
const value = 20;
num.splice(insertToIndex,0,value);
console.log('AFTER');
console.log(num);

// Now, we position to the end of the array
// para Insertar en la posición dada de manera manual y mover cada elemento a la derecha (una casilla)
// INSERT MANUAL
console.log('INSERT MANUAL-----------------------');

const numA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log('BEFORE');
console.log(numA);

// Insert number 20 in index 18
const insertToIndexA = 19;
const valueA = 20;
// En lugar de utilizar Splice, implementaremos nuestro algoritmo (LOOP)
const theLastIndex = numA.length - 1;

// iniciamos el ciclo para hacer ese movimiento a la derecha

for(let i = 0; i >= insertToIndexA; i--) {  // i >= insertToIndexA vamos de derecha a izquierda y vamos decrementando
    numA[ i + 1 ] = numA [i]; // Se recorre a la derecha
}

numA[insertToIndexA] = value;
console.log('AFTER');
console.log(numA);

// Se implementa el algoritmo de insertar de manera manual.
// Tarea de inserción de un indice dato, la tarea es costosa ya que se debe acomodar cada uno de los indices.
// DATO FINAL -> En JS es sencillo ya que la memoria del arreglo es solicitada de manera automática
// En C, C++ o Java es más complejo. 

