import { arrayToTree, TreeNode } from "../binary-trees/utils";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): number[] {
    let result: number[] = [];

    if (node == null) return [];

    if (node.left == null && node.right == null) return [node.val];

    return result.concat(dfs(node.left), dfs(node.right));
  }

  const root1LeafVals = dfs(root1);
  const root2LeafVals = dfs(root2);

  if (root1LeafVals.length !== root2LeafVals.length) return false;

  for (let i = 0; i < root1LeafVals.length; i++) {
    if (root1LeafVals[i] !== root2LeafVals[i]) return false;
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
