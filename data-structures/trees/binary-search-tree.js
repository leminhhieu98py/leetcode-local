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

  remove(value) {
    if (!this.root) return null;

    let current = this.root;
    let direction;
    let removeNode;

    while (current) {
      if (current.right.value === value) {
        removeNode = current.right;
        direction = 'right';
        break;
      }

      if (current.left.value === value) {
        removeNode = current.left;
        direction = 'left';
        break;
      }

      current = value > current.value ? current.right : current.left;
    }

    // Case 1: Leaf
    if (removeNode.left === null && removeNode.right === null) {
      current[direction] = null;
      return removeNode;
    }

    // Case 2: 1 child
    if (removeNode.left === null) {
      current[direction] = removeNode.right;
      return removeNode;
    }

    if (removeNode.right === null) {
      current[direction] = removeNode.left;
      return removeNode;
    }

    // Case 3: 2 children
    let removeNodeNext = removeNode.right;
    let prevRemoveNodeNext = removeNode

    while(removeNodeNext.left){
        prevRemoveNodeNext = removeNodeNext.left
        removeNodeNext = removeNodeNext
    }

    return removeNode;
  }
}
