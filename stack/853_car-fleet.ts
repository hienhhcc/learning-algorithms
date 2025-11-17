function carFleet(target: number, position: number[], speed: number[]): number {
  const pairs = position.map((p, i) => [p, speed[i]]);
  pairs.sort((a, b) => b[0] - a[0]);
  const stack: number[] = [];

  for (let i = 0; i < pairs.length; i++) {
    const [position, speed] = pairs[i];
    stack.push((target - position) / speed);

    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
console.log(carFleet(10, [3], [3]));
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
