export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function arrayToTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift();
    if (current) {
      // left child
      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;

      // right child
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}

export class _Node {
  val: number;
  children: _Node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

export function arrayToNaryTree(arr: (number | null)[]): _Node | null {
  if (arr.length === 0) return null;

  const root = new _Node(arr[0]!);
  const queue: _Node[] = [root];
  let i = 2; // start after root and first null
  let parentIndex = 0;

  while (i < arr.length) {
    const parent = queue[parentIndex];
    while (i < arr.length && arr[i] !== null) {
      const child = new _Node(arr[i]!);
      parent.children.push(child);
      queue.push(child);
      i++;
    }
    // skip the null separator
    i++;
    parentIndex++;
  }

  return root;
}
