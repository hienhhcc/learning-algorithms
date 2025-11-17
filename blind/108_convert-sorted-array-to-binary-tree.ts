import { TreeNode } from "../binary-trees/utils";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function helper(l: number, r: number): TreeNode | null {
    if (l > r) return null;

    const m = Math.floor((l + r) / 2);
    const root = new TreeNode(nums[m]);
    root.left = helper(l, m - 1);
    root.right = helper(m + 1, r);

    return root;
  }

  const root = helper(0, nums.length - 1);
  return root;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.log(sortedArrayToBST([1, 3]));
