import { arrayToTree, TreeNode } from "../binary-trees/utils";

function inorderTraversal(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }

  let result: number[] = [];

  result = result.concat(inorderTraversal(root.left));
  result = result.concat([root.val]);
  result = result.concat(inorderTraversal(root.right));

  return result;
}

console.log(inorderTraversal(arrayToTree([1, null, 2, 3])));
console.log(
  inorderTraversal(arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))
);
console.log(inorderTraversal(arrayToTree([])));
console.log(inorderTraversal(arrayToTree([1])));
