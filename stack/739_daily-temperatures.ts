function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;

  const stack: number[] = [];
  const result: number[] = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const currTemp = temperatures[i];

    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < currTemp
    ) {
      const index = stack.pop()!;
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
