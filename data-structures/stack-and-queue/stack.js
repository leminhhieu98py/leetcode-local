// Last in first out (LIFO)

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    newNode.next = this.first;

    this.first = newNode;

    if (!this.last) {
      this.last = newNode;
    }

    this.size++;

    return this;
  }
}
