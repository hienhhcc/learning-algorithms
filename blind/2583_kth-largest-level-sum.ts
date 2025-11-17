import { arrayToTree, TreeNode } from "../binary-trees/utils";

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root == null) return -1;

  const queue: TreeNode[] = [];
  queue.push(root);
  const levelSums: number[] = [];
  while (queue.length > 0) {
    const n = queue.length;
    const level: number[] = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSums.push(level.reduce((prev, curr) => prev + curr, 0));
  }

  levelSums.sort((a, b) => b - a);

  if (k > levelSums.length) return -1;

  return levelSums[k - 1];
}

console.log(kthLargestLevelSum(arrayToTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), 2));
console.log(kthLargestLevelSum(arrayToTree([1, 2, null, 3]), 1));
