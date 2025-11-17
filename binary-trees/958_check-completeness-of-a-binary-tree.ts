import { arrayToTree, TreeNode } from "./utils";

function isCompleteTree(root: TreeNode | null): boolean {
  if (root == null) return true;

  const queue: (TreeNode | null)[] = [root];

  let seenNull = false;
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      if (node === null) {
        seenNull = true;
      } else {
        if (seenNull) return false;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  return true;
}

console.log(isCompleteTree(arrayToTree([1, 2, 3, 4, 5, 6])));
console.log(isCompleteTree(arrayToTree([1, 2, 3, 4, 5, null, 7])));
console.log(
  isCompleteTree(
    arrayToTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, null, null, 15])
  )
);
