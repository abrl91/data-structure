// 10-->5-->16

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// };

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode; // also the tail is now the newNode
        this.length++;
        return this;
    }

    prepend(value) {
        // const newHead = {
        //     value: value,
        //     next: this.head
        // };
        // this.head = newHead;
        // this.length++;
        // return this;

        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        // if the index is greater then the length of the list
        if(index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        // lets say the index is 2
        const leader = this.traverseToIndex(index-1); // 10
        const holdingPointer = leader.next; // 5
        leader.next = newNode; // 2
        newNode.next = holdingPointer;
        this.length++;
        return this.printList;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const nodeTooDelete = leader.next;
        leader.next = nodeTooDelete.next;
        this.length--;
        return this.printList;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(3);
console.log(myLinkedList);
console.log(myLinkedList.printList());

//////////////////////////////////////////////////////////////////////////////////////////////

class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode; // also the tail is now the newNode
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        // if the index is greater then the length of the list
        if(index >= this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        // lets say the index is 2
        const leader = this.traverseToIndex(index-1); // 10
        const follower = leader.next; // 5
        leader.next = newNode; // 2
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this);
        return this.printList;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const nodeTooDelete = leader.next;
        nodeTooDelete.next.prev = leader;
        leader.next = nodeTooDelete.next;
        this.length--;
        return this.printList;
    }

    reverse() {
        if (!this.head.next) {
          return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
    
        while(second) {
          const temp = second.next;
          second.next = first;
          first = second;
          second = temp;
        }
    
        this.head.next = null;
        this.head = first;
        return this.printList();
      }
}

const myDoublyLinkedList = new DoublyLinkedList(28);
myDoublyLinkedList.append(14);
myDoublyLinkedList.append(7);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(3, 19);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.reverse();
console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.printList());

