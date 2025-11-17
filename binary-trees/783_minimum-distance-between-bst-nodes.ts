import { arrayToTree, TreeNode } from "./utils";

function minDiffInBST(root: TreeNode | null): number {
  //* Convert tree to array
  function dfs(node: TreeNode | null): number[] {
    if (node == null) {
      return [];
    }

    return [node.val].concat(dfs(node.left)).concat(dfs(node.right));
  }
  const nums = dfs(root);

  //* Find minimum difference in the array
  nums.sort((a, b) => a - b);
  let minimum = Math.max(...nums);
  for (let i = 0; i < nums.length - 1; i++) {
    minimum = Math.min(minimum, Math.abs(nums[i] - nums[i + 1]));
  }

  return minimum;
}

// console.log(minDiffInBST(arrayToTree([4, 2, 6, 1, 3])));
// console.log(minDiffInBST(arrayToTree([1, 0, 48, null, null, 12, 49])));
console.log(minDiffInBST(arrayToTree([71, 62, 84, 14, null, null, 88])));
