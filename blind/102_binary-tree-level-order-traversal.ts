import { arrayToTree, TreeNode } from "../binary-trees/utils";

function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  const levels: number[][] = [];
  const queue: TreeNode[] = [];
  queue.push(root);
  while (queue.length > 0) {
    const n = queue.length;
    const level: number[] = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levels.push(level);
  }

  return levels;
}

console.log(levelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(levelOrder(arrayToTree([1])));
console.log(levelOrder(arrayToTree([])));
