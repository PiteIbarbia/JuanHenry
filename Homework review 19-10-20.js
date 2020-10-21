// resolve estos ejercicios usando recursión

const { Hash } = require("crypto");

// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
    this.head = null
}

function Node(value){
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function(value) {
    var node = new Node(value);

    if(this.head === null) {
        this.head = node;
        return;
    }
    var current = this.head;
    while(current !== null) {
        current = current.next;
    }
    current.next = node;
}

LinkedList.prototype.remove = function() {
    if(this.head === null) return null;

    if(this.head.next === null) {
        let value = this.head.value;
        this.head = null;
        return value;
    }

    var current = this.head;
    while(current = current.next.next !== null) {
        current = current.next;
    }
    let value = current.next.value;
    current.next = null;
    return value;
}

LinkedList.prototype.search = function(arg) {
    var current = this.head;
    if(typeof arg === 'function')
    while(current !== null) {
        if(current.value === arg) {
            return current.value;
        } else {
            current = current.next;
        }
    }
    return null;
}

// Hash Table
// Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
// Para guardar un valor asociado a una key (string):
//    - Correr la key a través de una función hash para transformarla a un número entero.
//    - Usar ese número como índice para ver en cuál contenedor guardarás el valor.
// Para buscar el valor por su key:
//    - Correr la key por la función hash para conseguir el número.
//    - Usar el número para buscar el contenedor donde está el valor.
//    - Devolver el valor.

function HashTable() {
    this.numBuckets = 35;
    this.cajones = [];
}

HashTable.prototype.hash = function() {}

HashTable.prototype.set = function() {}

HashTable.prototype.get = function() {}

HashTable.prototype.hasKey = function() {}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};