function minSwaps(s: string): number {
  let extraClosingBracket = 0;
  let max = 0;

  for (const char of s) {
    if (char === "]") extraClosingBracket++;
    else extraClosingBracket--;

    max = Math.max(max, extraClosingBracket);
  }

  return Math.ceil(max / 2);
}

console.log(minSwaps("][]["));
console.log(minSwaps("]]][[["));
console.log(minSwaps("[]"));
