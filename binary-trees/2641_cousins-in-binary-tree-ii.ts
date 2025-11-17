import { arrayToTree, TreeNode } from "./utils";

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }

  const levelSums: number[] = [];
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const n = queue.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelSums.push(sum);
  }

  const queue2: TreeNode[] = [];
  queue2.push(root);
  let level = 0;
  root.val = 0;

  while (queue2.length > 0) {
    const n = queue2.length;
    for (let i = 0; i < n; i++) {
      const node = queue2.shift()!;
      let childSum = 0;
      if (node.left) childSum += node.left.val;
      if (node.right) childSum += node.right.val;

      if (node.left) {
        node.left.val = levelSums[level + 1] - childSum;
        queue2.push(node.left);
      }

      if (node.right) {
        node.right.val = levelSums[level + 1] - childSum;
        queue2.push(node.right);
      }
    }
    level++;
  }

  return root;
}

console.log(replaceValueInTree(arrayToTree([5, 4, 9, 1, 10, null, 7])));
console.log(replaceValueInTree(arrayToTree([3, 1, 2])));
