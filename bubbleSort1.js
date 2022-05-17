// Método de ordenamiento de la burbuja
// File -> bubbleSort.js
// By Ximena Toledo RIvera
// Explicación -> De manera ordenada comparamos cada elemento con el siguiente y cada número más pequeño será intercambiado.
// Se le conoce como burbuja porque los elementos más pequeños van subiendo al inicio y los elementos van al final.

// 1. Posicionarse en el primer elemento del arreglo
// 2. COmparar el elemento actual con el siguiente
// 3. Si el número siguiente es menor que el número actual se hace swap(intercambio)
// 4. Moverse al elemento siguiente  y tomarlo como el  elemento actual
// 5. Repetir desde el paso número 2 hasta alcanzar el último número
// 6. Si se llegó al final, repetir desde el paso número 1
// 7. Si se alcanzó el final del arreglo sin realizar swap, entonces el algoritmo puede detenerse.

function bubbleSort(array1) {
    let noSwaps = true  //Porque verificamos si no hay intercambios
    for(let i = 0; i < array1.length; i++){
        noSwaps = false
        //para j
        for(let j = 0; j < array1.length; j++){
            if(array1[j] > array1[j+1]) { //comparamos posición actual con la siguiente
                noSwaps = true // intercambio
                // Variable temporal
                let temporalVariable = array1[j] // Aquí guardamos
                array1[j] = array1[j+1]
                array1[j+1]= temporalVariable; // Recuperamos el valor salvado
            }
        }
        if (!noSwaps) //Cuando no hay nada que intercambiar, salir.
        break
    }
    return array1;
}
let num = [10,92,83,44,15,62,73,48,59,60,20,30,40,50,60,70,80,90]
console.log('BEFORE')
console.log(num)
num = bubbleSort(num); // Pasa como argumento un desordenado y devuelve el ordenado
console.log('AFTER')
console.log(num)
