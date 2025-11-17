import { arrayToTree, TreeNode } from "./utils";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 == null && root2 == null) return null;
  if (root1 == null || root2 == null) return root1 || root2;

  const val1 = root1 ? root1.val : 0;
  const val2 = root2 ? root2.val : 0;

  const node = new TreeNode(val1 + val2);
  node.left = mergeTrees(root1?.left ?? null, root2?.left ?? null);
  node.right = mergeTrees(root1?.right ?? null, root2?.right ?? null);
  return node;
}

console.log(
  mergeTrees(
    arrayToTree([1, 3, 2, 5]),
    arrayToTree([2, 1, 3, null, 4, null, 7])
  )
);

console.log(mergeTrees(arrayToTree([1]), arrayToTree([1, 2])));
