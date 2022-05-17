/* Algoritmo de ordenamiento quicksort, utiliza la técnica de divide y vencerás.
Creado en 1960 por Charles Antony Richard Hoare y es considerado como uno de los algoritmos de ordenamiento más eficientes.
IDEA PRINCIPAL -> Partir el arreglo en Sub-arreglos de tal manera que en cada partición se ubique 
un pivote que será nuestro punto de partida para ir organizando la info mediante intercambios
File -> quickSort1.js
By Ximena Toledo RIvera */

// Función swap
function swap(array, leftIndex, rightIndex){
    let temporal = array[leftIndex]
    array[leftIndex] = array[rightIndex]
    array[rightIndex] = temporal
    // intercambio realizado
}

//función de partición -> validación e intercambio
function partition(array, left, right){
    let pivote = array[Math.floor((right+left)/2)] //Valor del centro del arreglo
    // Se le calcula el indice central del arreglo y se extrae el valor.
    let i = left //Puntero izquierdo
    let j = right //Puntero derecho
    // movimiento de indice 
    while(i <= j){
        while( array[i] < pivote){
            i++
        }
        while( array[j] > pivote){
            j--
        }
        if (i <= j){
            swap(array, i, j) // Cuando no se cumplan los ciclos de arriba aquí se intercambia ael valor de la derecha con el de la izquierda
            i++
            j--
        }
    }
    return i;
}

function quickSort(array, left, right){
    let index // Esta variable que nos ayuda para saber si la información sigue desordenada en alguno de los lados del indice que nos devuelve la función "partition"
    if(array.length > 1){
        index = partition(array, left, right)
        if(left < index-1){ // Hay más elementos desordenados de lado izquierdo del pivote
            quickSort(array, left, index -1) // Recursividad -> se llama a la misma función.
        }
        if(index < right){ // Hay más elementos desordenados de lado derecho del pivote
            quickSort(array, index, right)
        }
    }
    return array;
    // todo ocurre de manera recursiva conforme se hagan las particiones, el indicé nos dice hacia donde corta y nos da un arreglo m,ás pequeño y cada vez que se llame a la función "quickSort" de nuevo, vamos a sar un arreglo más pequeño hasta que sólo quede eun elemento.
}

let num = [10,92,83,44,15,62,73,48,59,60,20,30,40,50,60,70,80,90]
console.log('BEFORE')
console.log(num)
num = quickSort(num, 0,num.length - 1) // Indicamos que el indice izquierdo va estar en 0 y el indice derecho va estar en el último elemento del arreglo
console.log('AFTER')
console.log(num)