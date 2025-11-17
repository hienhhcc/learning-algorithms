class MinStack {
  stack: number[] = [];
  minStack: number[] = [];
  constructor() {}

  push(val: number): void {
    if (this.stack.length !== 0) {
      const min = Math.min(this.minStack[this.minStack.length - 1], val);
      this.minStack.push(min);
    } else {
      this.minStack.push(val);
    }

    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
