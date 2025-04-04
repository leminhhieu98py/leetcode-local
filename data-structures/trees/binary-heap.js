class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryHeap {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) this.root = node;

    // TODO: need brainstorm about the heap storing here for max and min binary heap
  }
}
