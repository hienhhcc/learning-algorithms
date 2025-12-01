function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let left = 0,
    right = 0,
    countAdd = 0;

  while (left < m + n && right < nums2.length) {
    if (nums1[left] <= nums2[right]) {
      if (left >= m + countAdd) {
        nums1[left++] = nums2[right++];
      } else {
        left++;
      }
    } else {
      nums1.splice(left, 0, nums2[right]);
      nums1.pop();
      left++;
      right++;
      countAdd++;
    }
  }
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6);
