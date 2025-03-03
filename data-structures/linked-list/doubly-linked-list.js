class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const node = this.tail;

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      node.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return node;
  }

  shift() {
    if (!this.head) return undefined;

    const node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }

    this.length--;

    return node;
  }

  unshift(val) {
    if (!this.head) return this.push(val);

    const node = new Node(val);

    node.next = this.head;
    this.head.prev = node;
    this.head = node;

    this.length++;

    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push('Hello').push('Otis').push('from').push('Naver');
