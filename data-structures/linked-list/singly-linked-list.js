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

  pop() {
    let current = this.head;
    if (!current) return undefined;

    let newTail = null;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    if (this.tail) this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (!this.length) this.tail = null;

    return temp;
  }

  unshift(val) {
    const newHead = new Node(val);
    this.length++;

    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
      return;
    }

    newHead.next = this.head;
    this.head = newHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let count = 0;

    while (count !== index) {
      current = current.next;
      count++;
    }

    return current;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.push('Hello');
linkedList.push('Otis');
linkedList.push('from');
linkedList.push('Naver');
