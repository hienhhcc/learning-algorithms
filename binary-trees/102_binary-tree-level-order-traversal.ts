import { arrayToTree, TreeNode } from "./utils";

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length !== 0) {
    const level: number[] = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left != null) {
        queue.push(node.left);
      }
      if (node.right != null) {
        queue.push(node.right);
      }
    }
    if (level.length !== 0) {
      result.push(level);
    }
  }

  return result;
}

console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(arrayToTree([1])));
console.log(levelOrder(arrayToTree([])));
