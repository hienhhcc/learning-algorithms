class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  parent: _Node;

  constructor(
    val: number,
    parent: _Node,
    left?: _Node | null,
    right?: _Node | null
  ) {
    this.val = val === undefined ? 0 : val;
    this.parent = parent;

    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lowestCommonAncestor(p: _Node, q: _Node): _Node | null {
  const seen = new Set();
  while (p) {
    seen.add(p);
    p = p.parent;
  }

  while (q) {
    if (seen.has(q)) return q;
    q = q.parent;
  }

  return null;
}
