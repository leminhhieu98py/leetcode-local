// First in first out (FIFO)

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
    } else {
      this.first.next = newNode;
    }

    this.last = newNode;

    this.size++;

    return this;
  }
}
