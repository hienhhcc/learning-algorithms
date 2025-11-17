function quickSortInPlace(arr: number[], low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSortInPlace(arr, low, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, high);
  }

  return arr;
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  [arr[i], arr[high]] = [arr[high], arr[i]];

  return i;
}

console.log(quickSortInPlace([5, 2, 6, 1902, 93, 201, -2, 0, 48]));
