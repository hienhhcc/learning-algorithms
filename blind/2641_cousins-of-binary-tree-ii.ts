import { arrayToTree, TreeNode } from "../binary-trees/utils";

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;

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

  const queue2: TreeNode[] = [];
  queue2.push(root);
  root.val = 0;
  let level = 0;
  while (queue2.length > 0) {
    const n = queue2.length;
    for (let i = 0; i < n; i++) {
      const node = queue2.shift()!;
      let childSum = 0;
      if (node.left) {
        childSum += node.left.val;
        queue2.push(node.left);
      }
      if (node.right) {
        childSum += node.right.val;
        queue2.push(node.right);
      }

      if (node.left) node.left.val = levelSums[level + 1] - childSum;
      if (node.right) node.right.val = levelSums[level + 1] - childSum;
    }

    level++;
  }

  return root;
}

console.log(replaceValueInTree(arrayToTree([5, 4, 9, 1, 10, null, 7])));
console.log(replaceValueInTree(arrayToTree([3, 1, 2])));
