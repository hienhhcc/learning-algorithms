function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let l = 0,
    r = 0;

  const stack: number[] = [];

  while (l < pushed.length || r < popped.length) {
    if (l >= pushed.length && popped[r] !== stack[stack.length - 1]) {
      return false;
    }
    if (popped[r] === stack[stack.length - 1]) {
      stack.pop();
      r++;
    } else {
      stack.push(pushed[l]);
      l++;
    }
  }
  return stack.length === 0;
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
