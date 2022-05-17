// Linked list
// File -> ListaEnlazada1.js
// By  Ximena Toledo Rivera

// Definimos un contenedor que represente los nodos

class Node {
    constructor(element){ // Función Constructor que recibe la información que contiene el nodo
        this.element = element
        this.next = null // El nodo se crea y no esta conectado a nada.
    }
}

// La clase que contienen todos los nodos de la lista (sólo inicialmente la información del nodo cabeza) y la cantidad de nodos que conforman la lista.

class linkedListA {
    constructor(){
        this.head = null
        this.size = 0 // Saber cuantos nodos hay en la lista
    }
    //PARA INSERTAR
    // - Si la lista esta vacía entonces el elemento será HEAD y se incrementará el contador de nodos de la lista.
    // - Si la lista no está vacía avanzaremos nodo por nodo hasta llegar al último nodo de la lista, el cual apunta a null, una vez tenido esto, apuntaremos al último nodo existente con el nuevo nodo y finalmente incrementaremos el contador de nodos de la lista.

    // IMPLEMENTACIÓN
    add(element) {
        const node = new Node(element)      // Element inicializará el nodo, toma la clase Node y construir una copia/instancia que representa un nodo en la memoria de la computadora.
        let currentNode     // Una variable para saber en que nodo estamos.
        // Verificación si la lista esta vacía o no.
        if (this.head === null) { // Si está vacía la inicializamos
            this.head = node
        } // SI ya hay nodos en la lista
        else {
            currentNode = this.head
            while(currentNode.next){
                // OPERACIÓN DE RECORRIDO
                currentNode= currentNode.next
            }
            // CUando lleguemos al final
            currentNode.next = node
        }
        //Incrementamos el tamaño de la lista
        this.size++
    }
}

// FIN DE ESTRUCTURAS BÁSICAS

const linkedList = new linkedListA
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
console.log(linkedList.size)
console.log(linkedList.head)