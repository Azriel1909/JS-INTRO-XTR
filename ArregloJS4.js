// Buscar elemento de un arreglo dado un índice
// File -> ArregloJS4.js
// By XImena Toledo Rivera
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log('BEFORE');
console.log(num);
const numToFind = 9;
const result = num.findIndex(element => element === numToFind);
console.log('Value '+numToFind+' is on index '+ result);
// MANUAL
// 1. Walk through the array
// 2. Compare if the element match with the value 
// 3. If the element match save the result and break the loop
    // 3.1. if the value is not the array return -1
console.log('MANUAL ------------------------------------------');
const numA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(numA);
const numToFindA = 999;
let resultA = -1; // Bandera
for(let i = 0; i<=num.length; i++){
    if (num[i] === numToFindA){
        resultA = i;
        break
    }

}
console.log('Value '+numToFindA+' is on index '+ resultA);