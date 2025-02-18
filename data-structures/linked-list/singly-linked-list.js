class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    this.length++;
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
}

const linkedList = new SinglyLinkedList();

console.log(linkedList);

linkedList.push('Hello');
console.log(linkedList);

linkedList.push('Otis');
console.log(linkedList);

linkedList.push('from');
console.log(linkedList);

linkedList.push('Naver');
console.log(linkedList);
