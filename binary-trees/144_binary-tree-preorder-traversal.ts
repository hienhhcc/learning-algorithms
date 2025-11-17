import { arrayToTree, TreeNode } from "./utils";

function preorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];

  if (root == null) {
    return [];
  }

  result.push(root.val);
  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));

  return result;
}

console.log(preorderTraversal(arrayToTree([1, null, 2, 3])));
console.log(
  preorderTraversal(arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))
);
console.log(preorderTraversal(arrayToTree([])));
console.log(preorderTraversal(arrayToTree([1])));
