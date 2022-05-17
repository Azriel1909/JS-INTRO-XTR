// Linked list
// File -> ListaEnlazada1.js
// By  Ximena Toledo Rivera
class Node {
    constructor(element){ 
        this.element = element
        this.next = null 
    }
}


class linkedListA {
    constructor(){
        this.head = null
        this.size = 0 
    }
    //PARA INSERTAR
    // - Si la lista esta vacía entonces el elemento será HEAD y se incrementará el contador de nodos de la lista.
    // - Si la lista no está vacía avanzaremos nodo por nodo hasta llegar al último nodo de la lista, el cual apunta a null, una vez tenido esto, apuntaremos al último nodo existente con el nuevo nodo y finalmente incrementaremos el contador de nodos de la lista.

    // IMPLEMENTACIÓN
    add(element) {
        const node = new Node(element)     
        let currentNode   
        if (this.head === null) { 
            this.head = node
        } 
        else {
            currentNode = this.head
            while(currentNode.next){
                // OPERACIÓN DE RECORRIDO
                currentNode= currentNode.next
            }
            currentNode.next = node
        }
        
        this.size++
    }
    // MÉTODO INSERTAR
    insertAt(element, position) { // Nos debemos asegurar que no podemos insertar fuera de rango (no pasar posición negativa o mayor al tamaño de la lista)
        if(position < 0 || position > this.size){
            return
        }
        // IMPLEMENTACIÓN DEL ALGORITMO DE INSERTION
        const node = new Node(element) // Nueva instancia de Node(clase)
        let currentNode
        let previousNode
        currentNode = this.head // Posicionarnos al inicio de la lista y poder recorrerla
        // Validar qué posición vamos a insertar (si insertamos en la posición 0, implica que el nuevo  nodo insertado es la nueva cabeza de la lista)
        if(position === 0) {
            node.next = this.head // Apuntamos al HEAD viejo
            this.head = node // Reemplazando el nodo
        } else { //posición diferente de 0
            let iterator = 0
            while(iterator<position) {
                iterator++
                previousNode = currentNode
                currentNode = currentNode.next
            }
            // Ya que se rompa el ciclo, hacemos la insercción del nodo
            node.next = currentNode // enlace hacia adelante
            //desenlazamos el de atrás y enlazarlo con el nuevo nodo
            previousNode.next = node
        }
        // Indicar que la lista creción
        this.size++
    }
}



const linkedListB = new linkedListA
linkedListB.add(1)
linkedListB.add(2)
linkedListB.add(3)
linkedListB.insertAt(99,2)
linkedListB.insertAt(98,0)

console.log(linkedListB.size)
console.log('---------------------------')
console.log(linkedListB.head)
console.log('---------------------------')
console.log(linkedListB.head.next)