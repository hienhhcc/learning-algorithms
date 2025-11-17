import { arrayToTree, TreeNode } from "./utils";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (root == null || root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right;
}

console.log(
  lowestCommonAncestor(
    arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    arrayToTree([2])!,
    arrayToTree([8])!
  ),
  lowestCommonAncestor(
    arrayToTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]),
    arrayToTree([2])!,
    arrayToTree([4])!
  ),
  lowestCommonAncestor(
    arrayToTree([2, 1]),
    arrayToTree([2])!,
    arrayToTree([1])!
  )
);
