let pick = 6;
function guess(guessNumber: number): number {
  if (guessNumber > pick) {
    return -1;
  } else if (guessNumber < pick) {
    return 1;
  } else return 0;
}

function guessNumber(n: number): number {
  let l = 1,
    r = n;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (guess(m) === -1) {
      r = m - 1;
    } else if (guess(m) === 1) {
      l = m + 1;
    } else return m;
  }
}

console.log(guessNumber(10));
// console.log(guessNumber(1));
// console.log(guessNumber(2));
