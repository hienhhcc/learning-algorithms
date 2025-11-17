function totalFruit(fruits: number[]): number {
  const n = fruits.length;

  const map = new Map();
  let result: number = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    while (map.size === 2 && !map.has(fruits[r])) {
      if (map.get(fruits[l]) === 1) {
        map.delete(fruits[l]);
      } else {
        map.set(fruits[l], map.get(fruits[l]) - 1);
      }
      l++;
    }
    map.set(fruits[r], (map.get(fruits[r]) ?? 0) + 1);

    result = Math.max(result, r - l + 1);
  }

  return result;
}

console.log(totalFruit([1, 2, 1])); //3
console.log(totalFruit([0, 1, 2, 2])); //3
console.log(totalFruit([1, 2, 3, 2, 2])); //4
