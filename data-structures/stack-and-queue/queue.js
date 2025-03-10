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
      this.last.next = newNode;
    }

    this.last = newNode;

    this.size++;

    return this;
  }

  dequeue() {
    if (!this.first) return null;

    const removeNode = this.first;
    this.first = this.first.next;

    if (this.size === 1) {
      this.last = null;
    }

    this.size--;
    return removeNode.value;
  }
}
