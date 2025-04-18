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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
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

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);

    let foundNode = this.get(index - 1);
    if (foundNode) {
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      this.length++;

      return true;
    }

    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    const prevNode = this.get(index - 1);
    const removeNode = prevNode.next;

    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }

  reverse() {
    if (this.length <= 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  rotate(index) {
    if (this.length <= 1) return this;
    if (index <= 0 || index >= this.length || !Number.isInteger(index)) return false;

    const start = this.get(index);

    let next = this.head;

    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        this.tail = next;
        next.next = null;
        break;
      }

      next = next.next;
    }

    let startTail = start;

    let count = 0;

    while (startTail.next !== null && count < 10) {
      startTail = start.next;
      count++;
    }

    startTail.next = this.head;
    this.head = start;

    return true;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.push('Hello').push('Otis').push('from').push('Naver');
