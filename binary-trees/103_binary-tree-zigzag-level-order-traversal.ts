import { arrayToTree, TreeNode } from "./utils";

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  const queue: TreeNode[] = [];
  queue.push(root);
  let levelIndex = 0;
  const levels: number[][] = [];

  while (queue.length > 0) {
    const n = queue.length;
    const level: number[] = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levels.push(levelIndex & 1 ? level.reverse() : level);
    levelIndex++;
  }

  return levels;
}

console.log(zigzagLevelOrder(arrayToTree([3, 9, 20, null, null, 15, 7])));
console.log(zigzagLevelOrder(arrayToTree([1])));
console.log(zigzagLevelOrder(arrayToTree([])));
