import { arrayToTree, TreeNode } from "../binary-trees/utils";

function rightSideView(root: TreeNode | null): number[] {
  if (root == null) return [];

  const result: number[] = [];
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

    result.push(level[level.length - 1]);
  }

  return result;
}

console.log(rightSideView(arrayToTree([1, 2, 3, null, 5, null, 4])));
console.log(rightSideView(arrayToTree([1, 2, 3, 4, null, null, null, 5])));
console.log(rightSideView(arrayToTree([1, null, 3])));
console.log(rightSideView(arrayToTree([])));
