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
        if(this.size === 0){ // En caso que la cola este vacía, se agregará el nodo que es el último y el primero al mismo tiempo
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
        if(this.size === 0){
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
}

const myQueue = new Queue
console.log("Empty? " + myQueue.isEmpty())
myQueue.enqueue('Ximena')
myQueue.enqueue('Toledo')
console.log("Empty? " + myQueue.isEmpty())
console.log(myQueue)

let front1 = myQueue.dequeue() // Primero entrar
console.log(front1)
front1 = myQueue.dequeue()
console.log(front1)
console.log("Empty? " + myQueue.isEmpty())