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
}
