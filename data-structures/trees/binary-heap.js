const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let newItemIndex = this.values.length - 1;
    let parentIndex = Math.floor((newItemIndex - 1) / 2);

    while (parentIndex >= 0 && this.values[parentIndex] < this.values[newItemIndex]) {
      swap(this.values, parentIndex, newItemIndex);
      newItemIndex = parentIndex;
      parentIndex = Math.floor((newItemIndex - 1) / 2);
    }

    return this.values;
  }

  extractMax() {
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
      let largestIndex = replaceItemIndex;

      if (leftChildIndex < length && this.values[largestIndex] < this.values[leftChildIndex]) {
        largestIndex = leftChildIndex;
      }

      if (rightChildIndex < length && this.values[largestIndex] < this.values[rightChildIndex]) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex === replaceItemIndex) break;

      swap(this.values, largestIndex, replaceItemIndex);
      replaceItemIndex = largestIndex;
    }

    return returnVal;
  }
}
