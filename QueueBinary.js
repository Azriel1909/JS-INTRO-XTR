// Implementación de una cola
// File - Queue1.js

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class Queue {
    constructor(){
        // Parte frontal
        this.back = null
        // Parte trasera
        this.front = null
        // Saber cuantos elementos hay dentro de la cola
        this.size = 0
    }
    // OPERACIÓN DE ENQUEUE
    enqueue(element){
        const node = new Node(element)
        if(this.isEmpty()){ // En caso que la cola este vacía, se agregará el nodo que es el último y el primero al mismo tiempo
            this.back = node
            this.front = node
        } else { // Si no es el primer elemento
            node.next = this.back
            this.back = node
            // El elemento ya formado no es el último, y el nuevo es el último y está apuntando al nodo ya formado
        } 
        this.size++
    }
    // OPERACIÓN DE DEQUEUE
    dequeue(){
        // Validación "Si la cola está vacía"
        if(this.isEmpty()){
            return
        }
        const frontNode = this.front
        let currentNode = this.back
        // Recorrer la cola para llegar al final (front)
        while(currentNode.next && currentNode.next !== frontNode){
            currentNode = currentNode.next
        }

        this.front = currentNode // Intercambio que nos mueve uno a uno
        this.front.next = null // El elemento en frente se intercambia
        this.size-- // decrementar la cola

        return frontNode.element
    }
    // IMPLEMENTAR VERIFICACIÓN DE VACÍO
    isEmpty(){
        return this.size === 0
    }
    // IMPLEMENTACIÓN DE IMPRIMIR INFORMACIÓN DE LA COLA
    printQueue(){
        let currentNode = this.back
        while(currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

function findBinary(n){
    let result = []
    let queue = new Queue
    let string1
    let string2
    // ENCOLAR 1
    queue.enqueue('1')
    // Usamos un ciclo que nos permite avanzar de 0 hasta n para poder hace rel proceso de agregar y extraer
    for(let i = 0; i < n; i++){
        // Meter al arreglo el elemento metido en la cola
        result.push(queue.dequeue())//queda vacía la cola
        string1 = result[i] + '0'
        string2 = result[i] + '1'
        queue.enqueue(string1)
        queue.enqueue(string2)
    }
    return result
}

// TESTING
console.log(findBinary(19))