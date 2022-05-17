// Eliminar elemento de un arreglo dado un índice
// File -> ArregloJS3.js
// By XImena Toledo Rivera

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log('BEFORE');
console.log(num);

// delete element
const indexToDelete = 19;
const numberOfElementToDelete = 1;
num.splice(indexToDelete,numberOfElementToDelete);
console.log('AFTER');
console.log(num);

console.log('EXAMPLE 2 ----------------------');

const numA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log('BEFORE');
console.log(numA);

// delete element
const indexToDeleteA = 2;
const numberOfElementToDeleteA = 2;
numA.splice(indexToDeleteA,numberOfElementToDeleteA);
console.log('AFTER');
console.log(numA);

console.log('MANUAL WAY ----------------------');

const numB = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log('BEFORE');
console.log(numB);

// 1. Set null the index to remove (optional).
    // numB[indexToDelete] = null;
// 2. Shift each element until the bull position
// 3. Remove the leftover element at the end of the array
const indexToDeleteB = 9;
for(let i = indexToDeleteB; i<numB.length; i++){
    numB[i] = numB[i+1];
}
numB.pop();
console.log('AFTER');
console.log(numB);