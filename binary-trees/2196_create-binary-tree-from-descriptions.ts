import { TreeNode } from "./utils";

function createBinaryTree(descriptions: number[][]): TreeNode | null {
  let nodes: Record<number, TreeNode> = {};
  let children = new Set<number>();

  for (const [parent, child, isLeft] of descriptions) {
    children.add(child);
    if (!(parent in nodes)) {
      nodes[parent] = new TreeNode(parent);
    }

    if (!(child in nodes)) {
      nodes[child] = new TreeNode(child);
    }

    if (isLeft) {
      nodes[parent].left = nodes[child];
    } else {
      nodes[parent].right = nodes[child];
    }
  }

  for (const key of Object.keys(nodes)) {
    if (!children.has(+key)) {
      return nodes[+key];
    }
  }

  return null;
}

console.log(
  createBinaryTree([
    [20, 15, 1],
    [20, 17, 0],
    [50, 20, 1],
    [50, 80, 0],
    [80, 19, 1],
  ])
);

console.log(
  createBinaryTree([
    [1, 2, 1],
    [2, 3, 0],
    [3, 4, 1],
  ])
);
