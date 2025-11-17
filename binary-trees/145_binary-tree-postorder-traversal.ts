import { arrayToTree, TreeNode } from "./utils";

function postorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];

  if (root == null) {
    return [];
  }

  result = result.concat(postorderTraversal(root.left));
  result = result.concat(postorderTraversal(root.right));
  result.push(root.val);

  return result;
}

console.log(postorderTraversal(arrayToTree([1, null, 2, 3])));
console.log(
  postorderTraversal(arrayToTree([1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]))
);
console.log(postorderTraversal(arrayToTree([])));
console.log(postorderTraversal(arrayToTree([1])));
