import { arrayToTree, TreeNode } from "../binary-trees/utils";

function minimumOperations(root: TreeNode | null): number {
  function countSwap(level: number[]): number {
    let count = 0;

    const n = level.length;
    const map: Record<number, number> = {};
    const sortedLevel = level.toSorted((a, b) => a - b);
    for (let i = 0; i < n; i++) {
      map[level[i]] = i;
    }

    for (let i = 0; i < n; i++) {
      if (level[i] !== sortedLevel[i]) {
        count++;

        const j = map[sortedLevel[i]];

        [level[i], level[j]] = [level[j], level[i]];
        map[level[i]] = i;
        map[level[j]] = j;
      }
    }
    return count;
  }

  if (root == null) return 0;

  let count = 0;

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const n = queue.length;
    const level: number[] = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    count += countSwap(level);
  }

  return count;
}

console.log(
  minimumOperations(
    arrayToTree([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10])
  )
);
console.log(minimumOperations(arrayToTree([1, 3, 2, 7, 6, 5, 4])));
console.log(minimumOperations(arrayToTree([1, 2, 3, 4, 5, 6])));
