function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n;
  const result: number[] = Array.from({ length: n });

  for (let i = 0; i < n; i++) {
    const position = (i + k) % n;
    result[position] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = result[i];
  }
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
const nums2 = [-1, -100, 3, 99];

rotate(nums1, 3);
rotate(nums2, 2);

console.log({ nums1, nums2 });
