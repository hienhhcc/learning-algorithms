import { TreeNode } from "./utils";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(l: number, r: number) {
    if (l > r) {
      return null;
    }

    const m = Math.floor((l + r) / 2);
    const root = new TreeNode(nums[m]);

    root.left = helper(l, m - 1);
    root.right = helper(m + 1, r);

    return root;
  }

  return helper(0, nums.length - 1);
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));
