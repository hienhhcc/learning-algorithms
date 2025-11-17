class __Node {
  val: number;
  next: __Node | null;
  random: __Node | null;

  constructor(val?: number, next?: __Node, random?: __Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: __Node | null): __Node | null {
  const oldToCopy = new Map();
  let curr = head;
  while (curr) {
    const copy = new __Node(curr.val);
    oldToCopy.set(curr, copy);
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    const copy = oldToCopy.get(curr);
    copy.next = curr.next ? oldToCopy.get(curr.next) : null;
    copy.random = curr.random ? oldToCopy.get(curr.random) : null;
    curr = curr.next;
  }

  return oldToCopy.get(head);
}
