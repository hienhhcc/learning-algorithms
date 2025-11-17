import { arrayToTree, TreeNode } from "../binary-trees/utils";

function minDiffInBST(root: TreeNode | null): number {
  const nodeVals: number[] = [];
  function dfs(node: TreeNode | null) {
    if (node == null) return;
    nodeVals.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  nodeVals.sort((a, b) => a - b);
  let min = Math.max(...nodeVals);
  for (let i = 0; i < nodeVals.length - 1; i++) {
    min = Math.min(min, Math.abs(nodeVals[i] - nodeVals[i + 1]));
  }

  return min;
}

console.log(minDiffInBST(arrayToTree([4, 2, 6, 1, 3])));
console.log(minDiffInBST(arrayToTree([1, 0, 48, null, null, 12, 49])));
