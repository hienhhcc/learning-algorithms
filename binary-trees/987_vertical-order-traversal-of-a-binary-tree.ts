import { arrayToTree, TreeNode } from "./utils";

function getHeight(node: TreeNode | null): number {
  if (node == null) {
    return 0;
  }

  return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}

function verticalTraversal(root: TreeNode | null): number[][] {
  const height = getHeight(root);

  const result: number[][] = Array.from({ length: height * 2 - 1 }, () => []);

  function dfs(node: TreeNode | null, x: number) {
    if (node == null) {
      return;
    }

    result[x + height - 1].push(node.val);

    dfs(node.left, x - 1);
    dfs(node.right, x + 1);
  }

  dfs(root, 0);

  return result
    .filter((r) => r.length !== 0)
    .map((r) => r.sort((a, b) => a - b));
}

console.log(verticalTraversal(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(verticalTraversal(arrayToTree([1, 2, 3, 4, 5, 6, 7])));
console.log(verticalTraversal(arrayToTree([1, 2, 3, 4, 6, 5, 7])));
