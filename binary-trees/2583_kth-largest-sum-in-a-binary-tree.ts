import { arrayToTree, TreeNode } from "./utils";

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if (root == null) {
    return -1;
  }

  let levelSums: number[] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const n = queue.length;
    let levelSum: number = 0;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      levelSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levelSums.push(levelSum);
  }
  if (k > levelSums.length) {
    return -1;
  }
  levelSums.sort((a, b) => b - a);

  return levelSums[k - 1];
}

// console.log(kthLargestLevelSum(arrayToTree([5, 8, 9, 2, 1, 3, 7, 4, 6]), 2));
console.log(kthLargestLevelSum(arrayToTree([411310, 211244, 111674]), 2));
// console.log(kthLargestLevelSum(arrayToTree([1, 2, null, 3]), 1));
