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
    let parent = null;
    let direction = null;

    while (current && current.value !== value) {
      parent = current;
      if (value < current.value) {
        direction = 'left';
        current = current.left;
      } else {
        direction = 'right';
        current = current.right;
      }
    }

    if (!current) return null; // Node not found

    let removeNode = current;

    // Case 1: Node is a leaf
    if (!removeNode.left && !removeNode.right) {
      if (!parent) {
        this.root = null; // The tree only had one node
      } else {
        parent[direction] = null;
      }
      return removeNode;
    }

    // Case 2: Node has one child
    if (!removeNode.left) {
      if (!parent) {
        this.root = removeNode.right;
      } else {
        parent[direction] = removeNode.right;
      }
      return removeNode;
    }

    if (!removeNode.right) {
      if (!parent) {
        this.root = removeNode.left;
      } else {
        parent[direction] = removeNode.left;
      }
      return removeNode;
    }

    // Case 3: Node has two children
    let inOrderSuccessorParent = removeNode;
    let inOrderSuccessor = removeNode.right;

    while (inOrderSuccessor.left) {
      inOrderSuccessorParent = inOrderSuccessor;
      inOrderSuccessor = inOrderSuccessor.left;
    }

    removeNode.value = inOrderSuccessor.value;

    if (inOrderSuccessorParent === removeNode) {
      inOrderSuccessorParent.right = inOrderSuccessor.right;
    } else {
      inOrderSuccessorParent.left = inOrderSuccessor.right;
    }

    return removeNode;
  }

  // TODO: isBalanced BST
  isBalanced() {}
}
