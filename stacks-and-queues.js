// stacks: implementation with Linked-Lists
class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer
        }
        this.length++;
        return this;
    }
    pop(){
        if (!this.top) {
            return null;
        }

        if (this.top === this.bottom) {
            this.bottom = null;
        }

        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }   
  }
  
  const myStack = new Stack();
  console.log(myStack.push('google'));
  console.log(myStack.push('udemy'));
  console.log(myStack.push('utube'));
  console.log(myStack.peek());
  console.log(myStack.pop());
  
  //Discord
  //Udemy
  //google


  //stacks: implementation with Array
  class StackArr {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length-1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const myArrStack = new StackArr();
  console.log(myArrStack.push('google'));
  console.log(myArrStack.push('udemy'));
  console.log(myArrStack.push('utube'));
  console.log(myArrStack.peek());
  console.log(myArrStack.pop());
  
  //Discord
  //Udemy
  //google

  //-------------------------------------------------------------------------------------//
  
  // queues implementation --> just with linked-lists

  class NodeQueue {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }

    // add to the queue (last)
    enqueue(value){
      const newNode = new NodeQueue(value);
      if (this.length === 0) {
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode;
        this.last = newNode;
      }
      this.length++;
      return this;
    }

    //remove the first
    dequeue(){
      if (!this.first) {
        return null;
      }
      if (this.first === this.last) {
        this.last = null;
      }
      const holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return this;
    }
  }
  
  const myQueue = new Queue();
  console.log(myQueue.peek());
  console.log(myQueue.enqueue('Joy'));
  console.log(myQueue.enqueue('Matt'));
  console.log(myQueue.enqueue('Pavel'));
  console.log(myQueue.peek());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.peek());
  
  //--------------------------------------------------------------------------------//

// Implement the following operations of a queue using stacks.

// push(x) -- Push element x to the back of queue.
// pop() -- Removes the element from in front of queue.
// peek() -- Get the front element.
// empty() -- Return whether the queue is empty.

// Example
// const myQueue = new MyQueue();

// myQueue.push(1);
// myQueue.push(2);  
// myQueue.peek();  // returns 1
// myQueue.pop();   // returns 1
// myQueue.empty(); // returns false

class CrazyQueue {
    constructor() {
      this.first = [];
      this.last = [];
    }
  
    enqueue(value) {
      const length = this.first.length;
      for (let i = 0; i < length; i++) {
        this.last.push(this.first.pop());
      }
      this.last.push(value);
      return this;
    }
  
    dequeue() {
      const length = this.last.length;
      for (let i = 0; i < length; i++) {
        this.first.push(this.last.pop());
      }
      this.first.pop();
      return this;
    }
    peek() {
      if (this.last.length > 0) {
        return this.last[0];
      }
      return this.first[this.first.length - 1];
    }
  }
  
  const myQueue1 = new CrazyQueue();
  myQueue1.peek();
  myQueue1.enqueue('Joy');
  myQueue1.enqueue('Matt');
  myQueue1.enqueue('Pavel');
  myQueue1.peek();
  myQueue1.dequeue();
  myQueue1.dequeue();
  myQueue1.dequeue();
  myQueue1.peek();