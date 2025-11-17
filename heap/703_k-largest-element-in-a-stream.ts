class KthLargest {
  k: number;
  minHeap: number[];
  constructor(k: number, nums: number[]) {
    this.k = k;
    this.minHeap = [];

    for (let i = 0; i < nums.length; i++) {
      this.add(nums[i]);
    }
  }

  add(val: number): number {
    if (this.minHeap.length < this.k) {
      this._push(val);
    } else if (val > this.minHeap[0]) {
      this._pop();
      this._push(val);
    }

    return this.minHeap[0];
  }

  _push(val: number) {
    this.minHeap.push(val);
    this._bubbleUp();
  }

  _bubbleUp() {
    let idx = this.minHeap.length - 1;
    const element = this.minHeap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.minHeap[parentIdx];
      if (element >= parent) break;
      const temp = parent;
      this.minHeap[parentIdx] = element;
      this.minHeap[idx] = temp;
      idx = parentIdx;
    }
  }

  _pop(): number {
    const root = this.minHeap[0];
    const end = this.minHeap.pop()!;
    if (this.minHeap.length > 0) {
      this.minHeap[0] = end;
      this._sinkDown();
    }
    return root;
  }

  _sinkDown() {
    let idx = 0;
    let length = this.minHeap.length;
    const element = this.minHeap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length && this.minHeap[leftIdx] < element) {
        swap = leftIdx;
      }
      if (
        rightIdx < length &&
        this.minHeap[rightIdx] <
          (swap === null ? element : this.minHeap[leftIdx])
      ) {
        swap = rightIdx;
      }
      if (swap == null) break;
      this.minHeap[idx] = this.minHeap[swap];
      this.minHeap[swap] = element;
      idx = swap;
    }
  }
}
