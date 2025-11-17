function timeRequiredToBuy(tickets: number[], k: number): number {
  const n = tickets.length;

  let timeTaken = 0;

  let i = 0;
  while (true) {
    if (i % n !== k && tickets[i % n] === 0) {
      i++;
      continue;
    }
    tickets[i % n] -= 1;
    timeTaken += 1;
    if (i % n === k && tickets[i % n] === 0) {
      return timeTaken;
    }
    i++;
  }
}

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
