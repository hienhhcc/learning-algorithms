import { arrayToTree, TreeNode } from "./utils";

function minimumOperations(root: TreeNode | null): number {
  function countSwaps(nums: number[]): number {
    let count = 0;

    const n = nums.length;
    const map: Record<number, number> = {};
    const sortedNums = nums.toSorted((a, b) => a - b);

    for (let i = 0; i < n; i++) {
      map[nums[i]] = i;
    }

    for (let i = 0; i < n; i++) {
      if (nums[i] !== sortedNums[i]) {
        count++;

        const j = map[sortedNums[i]];
        [nums[i], nums[j]] = [nums[j], nums[i]];

        map[nums[i]] = i;
        map[nums[j]] = j;
      }
    }

    return count;
  }

  if (root == null) {
    return 0;
  }

  let result = 0;

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length > 0) {
    const level: number[] = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      level.push(node.val);

      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
    result += countSwaps(level);
  }

  return result;
}

console.log(
  minimumOperations(
    arrayToTree([1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10])
  )
);

console.log(minimumOperations(arrayToTree([1, 3, 2, 7, 6, 5, 4])));
console.log(minimumOperations(arrayToTree([1, 2, 3, 4, 5, 6])));
