class Node_ {
  val: number;
  left: Node_ | null;
  right: Node_ | null;
  next: Node_ | null;
  constructor(val?: number, left?: Node_, right?: Node_, next?: Node_) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}
function connect(root: Node_ | null): Node_ | null {
  if (root == null) return null;

  const queue: Node_[] = [root];
  while (queue.length !== 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      node.next = queue[0] ?? null;
      if (node.left != null) queue.push(node.left);
      if (node.right != null) queue.push(node.right);
    }
  }

  return root;
}
