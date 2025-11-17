function totalFruit(fruits: number[]): number {
  const nTree = fruits.length;

  let maxTrees = 0;

  const hashMap = new Map();

  let l = 0;
  for (let r = 0; r < nTree; r++) {
    hashMap.set(fruits[r], (hashMap.get(fruits[r]) ?? 0) + 1);

    while (hashMap.size >= 3) {
      hashMap.set(fruits[l], hashMap.get(fruits[l]) - 1);

      if (hashMap.get(fruits[l]) === 0) {
        hashMap.delete(fruits[l]);
      }

      l++;
    }

    maxTrees = Math.max(maxTrees, r - l + 1);
  }

  return maxTrees;
}
console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([0]) === 2);
