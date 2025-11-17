function maxArea(height: number[]): number {
  let max = 0;

  const n = height.length;

  let l = 0,
    r = n - 1;

  while (l < r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));

    if (height[l] >= height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
