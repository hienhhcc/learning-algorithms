type HeapType = "min" | "max";

export function bubbleUp({
  arr,
  type = "max",
}: {
  arr: number[];
  type?: HeapType;
}) {
  let idx = arr.length - 1;
  const element = arr[idx];
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    const parent = arr[parentIdx];
    if (type === "max" && element <= parent) break;
    if (type === "min" && element >= parent) break;
    const temp = parent;
    arr[parentIdx] = element;
    arr[idx] = temp;
    idx = parentIdx;
  }
}

export function pop({ arr, type = "max" }: { arr: number[]; type?: HeapType }) {
  const n = arr.length;
  if (n === 0) return 0;
  if (n === 1) return arr.pop()!;

  const max = arr[0];
  arr[0] = arr[n - 1];
  arr.pop();
  heapify({ arr, n: n - 1, i: 0, type });

  return max;
}

type HeapifyProps = {
  arr: number[];
  n: number;
  i: number;
  type?: "max" | "min";
};

export function heapify({ arr, n, i, type = "max" }: HeapifyProps) {
  let index = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (
    left < n &&
    (type === "max" ? arr[left] > arr[index] : arr[left] < arr[index])
  ) {
    index = left;
  }

  if (
    right < n &&
    (type === "max" ? arr[right] > arr[index] : arr[right] < arr[index])
  ) {
    index = right;
  }
  if (index !== i) {
    const temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
    heapify({ arr, n, i: index, type });
  }
}

export function sinkDown({
  arr,
  type = "max",
}: {
  arr: number[];
  type?: HeapType;
}) {
  let idx = 0;
  let length = arr.length;
  const element = arr[0];

  while (true) {
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let swap = null;

    if (
      leftIdx < length &&
      (type === "max" ? arr[leftIdx] > element : arr[leftIdx] < element)
    ) {
      swap = leftIdx;
    }
    if (
      rightIdx < length &&
      (type === "max"
        ? arr[rightIdx] > (swap === null ? element : arr[leftIdx])
        : arr[rightIdx] < (swap === null ? element : arr[leftIdx]))
    ) {
      swap = rightIdx;
    }
    if (swap == null) break;
    arr[idx] = arr[swap];
    arr[swap] = element;
    idx = swap;
  }
}
