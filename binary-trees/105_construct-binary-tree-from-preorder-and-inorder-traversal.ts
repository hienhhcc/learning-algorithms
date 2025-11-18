import { TreeNode } from "./utils";

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map: Record<number, number> = {};

  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  function helper(l: number, r: number): TreeNode | null {
    if (l > r) return null;

    const root = new TreeNode(preorder.shift()!);

    const index = map[root.val];

    root.left = helper(l, index - 1);
    root.right = helper(index + 1, r);

    return root;
  }

  return helper(0, inorder.length - 1);
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));
