class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

/**
 * Priority Queue implementation using a Min-Heap
 * Lower priority numbers have higher precedence
 */
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Add an element with given priority
   * @param {*} value - The value to add
   * @param {number} priority - Priority level (lower = higher precedence)
   * @returns {Array} The updated values array
   */
  enqueue(value, priority) {
    if (typeof priority !== 'number') {
      throw new Error('Priority must be a number');
    }
    const node = new Node(value, priority);
    this.values.push(node);

    let newItemIndex = this.values.length - 1;
    let parentIndex = Math.floor((newItemIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[parentIndex].priority > this.values[newItemIndex].priority
    ) {
      swap(this.values, parentIndex, newItemIndex);
      newItemIndex = parentIndex;
      parentIndex = Math.floor((newItemIndex - 1) / 2);
    }

    return this.values;
  }

  /**
   * Remove and return the highest priority element
   * @returns {Node|undefined} The node with highest priority or undefined if empty
   */
  dequeue() {
    let length = this.values.length;
    if (!length) return undefined;
    if (length === 1) return this.values.pop();

    let replaceItemIndex = length - 1;
    swap(this.values, 0, replaceItemIndex);

    const returnVal = this.values.pop();
    length = this.values.length;
    replaceItemIndex = 0;

    while (true) {
      let leftChildIndex = replaceItemIndex * 2 + 1;
      let rightChildIndex = replaceItemIndex * 2 + 2;
      let minPriorityIndex = replaceItemIndex;

      if (
        leftChildIndex < length &&
        this.values[minPriorityIndex].priority >
          this.values[leftChildIndex].priority
      ) {
        minPriorityIndex = leftChildIndex;
      }

      if (
        rightChildIndex < length &&
        this.values[minPriorityIndex].priority >
          this.values[rightChildIndex].priority
      ) {
        minPriorityIndex = rightChildIndex;
      }

      if (minPriorityIndex === replaceItemIndex) break;

      swap(this.values, minPriorityIndex, replaceItemIndex);
      replaceItemIndex = minPriorityIndex;
    }

    return returnVal;
  }
}
