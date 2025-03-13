class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current !== null) {
      if (current.value === value) return undefined;

      if (current.left === null && value < current.value) {
        current.left = newNode;
        return this;
      }

      if (current.right === null && value > current.value) {
        current.right = newNode;
        return this;
      }

      current = value > current.value ? current.right : current.left;
    }

    return this;
  }

  find(value) {
    if (!this.root) return null;

    let current = this.root;

    while (current) {
      if (current.value === value) return current;

      current = value > current.value ? current.right : current.left;
    }

    return current;
  }
}
