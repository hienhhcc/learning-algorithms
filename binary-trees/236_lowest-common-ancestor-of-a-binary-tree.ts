import { arrayToTree, TreeNode } from "./utils";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root || root.val === p.val || root.val === q.val) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  return left && right ? root : left || right;
}

console.log(
  lowestCommonAncestor(
    arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
    arrayToTree([5])!,
    arrayToTree([1])!
  )
);
console.log(
  lowestCommonAncestor(
    arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]),
    arrayToTree([5])!,
    arrayToTree([4])!
  )
);
console.log(
  lowestCommonAncestor(
    arrayToTree([1, 2]),
    arrayToTree([1])!,
    arrayToTree([2])!
  )
);
