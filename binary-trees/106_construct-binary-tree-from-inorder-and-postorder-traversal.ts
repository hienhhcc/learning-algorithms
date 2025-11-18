import { TreeNode } from "./utils";

// function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
//   if (inorder.length === 0 || inorder == null) return null;

//   const root = new TreeNode(postorder.pop());

//   const index = inorder.findIndex((v) => v === root.val);

//   root.right = buildTree(inorder.slice(index + 1), postorder);
//   root.left = buildTree(inorder.slice(0, index), postorder);

//   return root;
// }

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const map: Record<number, number> = {};

  for (let i = 0; i < inorder.length; i++) {
    map[inorder[i]] = i;
  }

  function helper(l: number, r: number): TreeNode | null {
    if (l > r) return null;

    const root = new TreeNode(postorder.pop());

    const index = map[root.val];

    root.right = helper(index + 1, r);
    root.left = helper(l, index - 1);
    return root;
  }

  return helper(0, inorder.length - 1);
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
console.log(buildTree([-1], [-1]));
