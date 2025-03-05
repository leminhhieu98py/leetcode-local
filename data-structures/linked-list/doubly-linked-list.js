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

  get(index) {
    if (index < 0 || index >= this.length || !Number.isInteger(index)) return null;

    let current, count;

    if (index < this.length / 2) {
      current = this.head;
      count = 0;

      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;

      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;

      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const foundNode = this.get(index - 1);

    if (foundNode) {
      const nextNode = foundNode.next;
      const newNode = new Node(val);

      newNode.prev = foundNode;
      newNode.next = nextNode;

      foundNode.next = newNode;
      nextNode.prev = newNode;

      this.length++;

      return true;
    }

    return false;
  }

  remove(index) {
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const foundNode = this.get(index);

    if (foundNode) {
      const prevNode = foundNode.prev;
      const nextNode = foundNode.next;

      prevNode.next = nextNode;
      nextNode.prev = prevNode;

      foundNode.next = null;
      foundNode.prev = null;

      this.length--;

      return foundNode;
    }

    return undefined;
  }

  reverse() {
    let current = this.tail;
    let temp;
    let newTail;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        newTail = current;
      }
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = current.next;
    }

    this.head = this.tail;
    this.tail = newTail;

    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
