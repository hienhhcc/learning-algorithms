function mergeSort(arr: number[]): number[] {
  const n = arr.length;
  if (n <= 1) return arr;

  const middle = Math.floor(n / 2);

  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));

  return merge(leftArr, rightArr);
}

function merge(left: number[], right: number[]) {
  const result: number[] = [];
  let l = 0,
    r = 0;
  const nLeft = left.length;
  const nRight = right.length;

  while (l < nLeft && r < nRight) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  if (l < nLeft) {
    result.push(...left.slice(l));
  }

  if (r < nRight) {
    result.push(...right.slice(r));
  }

  return result;
}

console.log(mergeSort([5, 2, 6, 1902, 93, 201, -2, 0, 48]));
