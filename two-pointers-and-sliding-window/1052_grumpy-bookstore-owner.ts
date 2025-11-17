function maxSatisfied(
  customers: number[],
  grumpy: number[],
  minutes: number
): number {
  const n = customers.length;
  let satisfiedWithTech = 0;
  let maxSatisfiedWithTechnique = 0;
  let alreadySatisfied = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    if (r - l + 1 > minutes) {
      if (grumpy[l]) satisfiedWithTech -= customers[l];
      l++;
    }

    if (grumpy[r]) {
      satisfiedWithTech += customers[r];
    } else {
      alreadySatisfied += customers[r];
    }

    if (r - l + 1 === minutes) {
      maxSatisfiedWithTechnique = Math.max(
        maxSatisfiedWithTechnique,
        satisfiedWithTech
      );
    }
  }
  return alreadySatisfied + maxSatisfiedWithTechnique;
}

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
);
console.log(maxSatisfied([1], [0], 1));
