/*
  Minimized, maximized keywords -> Hint to binary search
  Check feasabilities -> If a given value of cap product can be distributed to all retail stores. Then a value smaller than cap can -> Monotonic -> Binary search
  Need to define a canDistributed(cap:number) to check if for that cap product can be distributed to all retail stores
    - If can, then decrease the cap
    - If not, then increase the cap
  Lowerbound = 0 (x can possibly 0)
  Upperbound = Math.max(...quantities);
*/
function minimizedMaximum(n: number, quantities: number[]): number {
  function canDistributed(cap: number) {
    let count = 0;

    for (const q of quantities) {
      count += Math.ceil(q / cap);
      if (count > n) return false;
    }

    return count <= n;
  }

  let low = 0;
  let high = Math.max(...quantities);
  let answer = high;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (canDistributed(middle)) {
      answer = Math.min(answer, middle);
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return answer;
}

console.log(minimizedMaximum(6, [11, 6])); //3
console.log(minimizedMaximum(7, [15, 10, 10])); //5
console.log(minimizedMaximum(1, [100000])); //100000
