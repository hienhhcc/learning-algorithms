import { arrayToTree, TreeNode } from "../binary-trees/utils";

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;

  const queue: TreeNode[] = [];
  queue.push(root);
  let levelNth = 0;

  while (queue.length > 0) {
    const n = queue.length;
    const level: TreeNode[] = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (levelNth & 1) {
      let l = 0,
        r = level.length - 1;

      while (l < r) {
        const temp = level[l].val;
        level[l].val = level[r].val;
        level[r].val = temp;
        l++;
        r--;
      }
    }

    levelNth++;
  }

  return root;
}

console.log(reverseOddLevels(arrayToTree([2, 3, 5, 8, 13, 21, 34])));
console.log(reverseOddLevels(arrayToTree([7, 13, 11])));
console.log(
  reverseOddLevels(arrayToTree([0, 1, 2, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2]))
);
