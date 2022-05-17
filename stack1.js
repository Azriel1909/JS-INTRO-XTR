// IMPLEMENTACIÓN DE PILA
// File -> stack1.js
// By Ximena Toledo RIvera

class motherNode{
    constructor(element){
        this.element = element
        this.next = null
    }
}

class stackStructure{
    constructor(){
        // Parte superior del stack
        this.top = null // Stack nuevo
        this.size = 0
    }
    // IMPLEMENTAR PUSH
    push(element){
        const babyNode = new motherNode(element) /// Creamos en memoria nuestro nodo que pertenece a nuestro stack
        babyNode.next = this.top
        this.top = babyNode // Colocamos el nodo en la parte superior
        this.size++
    }
    // IMPLEMENTAR POP
    pop(){
        const currentNode = this.top
        // Mover la orientación del TOP
        // El siguiente elemento es el nuevo TOP para poder remover el currentNode
        this.top = currentNode.next // El TOP es el siguiente nodo en el stack
        this.size--
        // Extraemos el elemento para poder utilizarlo de ser necesario
        return currentNode.element
    }

    // IMPLEMENTAR PEEK
    peek(){
        return this.top.element // Devolver la misma dirección
    }
    // IMPLEMENTACIÓN DE VALIDACIÓN SI EL STACK ESTA VACÍO
    isEmpty() {
        return this.size === 0
    }
    // IMPLEMENTAR EL MÉTODO QUE IMPRIMA LOS ELEMENTOS DEL STACK
    printStack(){
        // Recorre elemento a elemento hasta no encontrar elemento siguiente
        let currentNode = this.top
        while(currentNode){
            console.log(currentNode.element)
            currentNode = currentNode.next // avanzando
        }
    }
    // IMPLEMENTACIÓN PARA COMPROBAR SI UNA CADENA DE LLAVES  CONTIENE PARÉNTESIS BALANCEADOS
    // {[]} IsBalanced TRUE
    // {(]} IsBalanced FALSE
    // Metemos uno a uno al stack los paréntesis que abren y en caso de encontrar un paréntesis que cierra, extremos el elemento superior del stack y compararemos que sea equivalente.
    // SI todos los elementos evaluado tienen sus llaves equivalente en el momento = expresión balanceada
    // Si la llave no es similar, no hay elementos para comparar = expresión no balanceada


}
// Objeto/instancia
const myStack = new stackStructure
console.log(myStack.isEmpty()) // Stack vacío
// Hasta la parte superior está el 4
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.push(9)
/*console.log(myStack)
console.log("----------------")
console.log(myStack.top.next)
console.log("----------------")
let element = myStack.pop()
console.log(element)

element = myStack.pop()
console.log(element)

element = myStack.pop()
console.log(element)

console.log(myStack)*/

/*console.log(myStack.peek())
console.log(myStack.peek())
console.log(myStack.peek())
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())*/

console.log(myStack.isEmpty()) // Stack no vacío

myStack.printStack() // Ya imprime en pantalla

// OPERACIÓN INDEPENDIENTE

function isBalanced(expression) {
    // inicializamos el stack
    const stack = new stackStructure
    // Iterar sobre la cadena de llaves
    for(let i = 0; i < expression.length; i++){
        if(expression[i] === '}' || expression[i] === ')' || expression[i] === ']'){
            // Hacemos validaciones para ver si cumplimos con el balance
            // 1. Verificar si hay elementos para comparar
            if(stack.isEmpty()){
                return false
            }
            let output = stack.pop()
            // COmparar lo que tenemos
            if((expression[i] === '}') && (output !== '{') || 
            (expression[i] === ')') && (output !== '(') || 
            (expression[i] === ']') && (output !== '[') ) { // Esto significa que no esta balanceado (si no aplica)
                // Si tenemos la expresión un elemento que cierra y lo que sacamos del satck no es equivalente que habré, significa que la expresión no está balanceada.
                return false
            }
        } else {
            stack.push(expression[i])
        }
    }
    if(stack.isEmpty() === false){
        return false
    } 
    return true
}
let input = "{()}" // balanceado a simple vista
console.log(input)
console.log(isBalanced(input))
let inputA = "{(]}" // balanceado a simple vista
console.log(inputA)
console.log(isBalanced(inputA))
inputA = "{()}}" // balanceado a simple vista
console.log(inputA)
console.log(isBalanced(inputA))