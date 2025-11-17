import { arrayToTree, TreeNode } from "./utils";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  function getAllLeaves(node: TreeNode | null): number[] {
    const leaves: number[] = [];

    if (node == null) {
      return [];
    }

    if (node.left == null && node.right == null) {
      return [node.val];
    }

    return leaves
      .concat(getAllLeaves(node.left))
      .concat(getAllLeaves(node.right));
  }

  const leaves1 = getAllLeaves(root1);
  const leaves2 = getAllLeaves(root2);

  if (leaves1.length !== leaves2.length) return false;

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false;
  }

  return true;
}

console.log(
  leafSimilar(
    arrayToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]),
    arrayToTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8])
  )
);

console.log(leafSimilar(arrayToTree([1, 2, 3]), arrayToTree([1, 3, 2])));
