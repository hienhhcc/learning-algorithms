function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => b - a);

  const n = people.length;

  let boats: number = 0;

  let l = 0,
    r = n - 1;
  while (l <= r) {
    if (l === r && people[l] <= limit) {
      l++;
      r--;
    }

    if (people[l] + people[r] > limit) {
      l++;
    } else {
      l++;
      r--;
    }
    boats++;
  }

  return boats;
}

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 5));
