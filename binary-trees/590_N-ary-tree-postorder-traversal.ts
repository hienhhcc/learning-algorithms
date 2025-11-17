import { _Node, arrayToNaryTree } from "./utils";

function postorder(root: _Node | null): number[] {
  function helper(node: _Node | null) {
    if (node == null) {
      return;
    }

    for (const n of node.children) {
      helper(n);
    }

    result.push(node.val);
  }

  const result: number[] = [];
  helper(root);
  return result;
}

console.log(postorder(arrayToNaryTree([1, null, 3, 2, 4, null, 5, 6])));
console.log(
  postorder(
    arrayToNaryTree([
      1,
      null,
      2,
      3,
      4,
      5,
      null,
      null,
      6,
      7,
      null,
      8,
      null,
      9,
      10,
      null,
      null,
      11,
      null,
      12,
      null,
      13,
      null,
      null,
      14,
    ])
  )
);
