function nFactorial(n) {
    // devolvé el factorial de n (n!)
    // ej:
    // el factorial de 3 es 6 (3 * 2 * 1)
//tengo un numero (n) que se reduce así mismo dónde esta reduccion termina en 1
//tiene que retornar un final que es = 1
//una vez en final tiene que volver al factorial
//cindicional bien hecho!!!
    if( n > 1) return;
    if( n === 1) return 1;
    return n * nFactorial(n - 1);
    
  }


  function nFibonacci(n) {
    // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
    // Retorna el enésimo numero de la serie
    // nFibonacci(0) // 0  // el elemento 0 es cero
    // nFibonacci(1) // 1 // el elemento 1 es 1
    // nFibonacci(6) // 1 // el elemento 6 es 8
    // n es la pocision del nro que queremos
    // [0] [1] [2] [3] [4] [5] [6] [7] 
    //  0,  1,  1,  2,  3,  4,  5,  8,  13, 21, 34
    
    // Casos base
    if(n < 0) return;   // pAra evitar que me pasen números negativos
    if(n === 0) return 0;
    if(n === 1) return 1;

    // Recursion

    return nFibonacci(n - 1) + nFibonacci(n - 2)
  }


//  The following is the constructor of the queue:
function Queue() {
    this.elements = []; // The Queue() constructor function uses an array to store its elements.
}
// The enqueue() method adds an element at the end of the queue. We use the push() method of the array object to insert the new element at the end of the queue.
Queue.prototype.enqueue = function (e) {
    this.elements.push(e);
}
// The dequeue() method removes an element from the front of the queue. In the dequeue() method, we use the shift() method of the array to remove an element at the front of the queue.
// remove an element from the front of the queue
Queue.prototype.dequeue = function () {
    return this.elements.shift();
}
// The isEmpty() method checks if a queue is empty by checking if the length property of the array is zero.
// check if the queue is empty
Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
}
// The peek() method accesses the element at the front of the queue without modifying it.
// get the element at the front of the queue
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
}
// To query the length of a queue, we develop the length() method:
Queue.prototype.length = function() {
    return this.elements.length;
}
// To create a new queue from the Queue() constructor function, you use the new keyword as follows:
let q = new Queue();
// To enqueue numbers from 1 to 7, you use the following code.
for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
}
// To get the number at the front of the queue, you use the peek() method.
// get the current item at the front of the queue
console.log(q.peek()); // 1
// To get the current length of the queue, you use the length() method as in the following example.
// get the current length of queue
console.log(q.length()); // 7
// To remove the element at the front of the queue, you use the dequeue() method as follows:
// dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());
}

//1
//2
//3
//4
//5
//6
//7

// Now, you should have a good understanding of the queue data structure and know how to use the push() and shift() methods of the Array type to implement a queue in JavaScript.

function Queue() {
    this.array = [];
  }
  Queue.prototype.enqueue = function(value) {
    this.array.push(value);
  }
  Queue.prototype.dequeue = function() {
    return this.array.shift();
  }
  Queue.prototype.size = function() {
    return this.queue.length
  }