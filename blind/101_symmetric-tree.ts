import { arrayToTree, TreeNode } from "../binary-trees/utils";

// function isSymmetric(root: TreeNode | null): boolean {
//   if (root == null) return true;

//   const queue: (TreeNode | null)[] = [];
//   queue.push(root.left);
//   queue.push(root.right);
//   while (queue.length > 0) {
//     const n = queue.length;
//     for (let i = 0; i < n; i++) {
//       const left = queue.shift()!;
//       const right = queue.shift()!;

//       if (left == null && right == null) continue;
//       if (left == null || right == null) return false;
//       if (left.val !== right.val) return false;

//       queue.push(left.left, right.right);
//       queue.push(left.right, right.left);
//     }
//   }

//   return true;
// }
function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) return true;

  function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    if (left.val !== right.val) return false;

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }

  return dfs(root.left, root.right);
}

console.log(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3])));
