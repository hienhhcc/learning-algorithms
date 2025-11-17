import { arrayToTree, TreeNode } from "./utils";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  const nodes: TreeNode[] = [];

  function helper(node: TreeNode | null): void {
    if (node == null) {
      return;
    }

    if (node.val > high) {
      return helper(node.left);
    }

    if (node.val < low) {
      return helper(node.right);
    }

    nodes.push(node);
    helper(node.left);
    helper(node.right);
  }

  helper(root);

  return nodes.reduce((prev, curr) => prev + curr.val, 0);
}

console.log(rangeSumBST(arrayToTree([10, 5, 15, 3, 7, null, 18]), 7, 15));
console.log(
  rangeSumBST(arrayToTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]), 6, 10)
);
