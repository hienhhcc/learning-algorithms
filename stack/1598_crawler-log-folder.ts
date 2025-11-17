function minOperations(logs: string[]): number {
  const n = logs.length;
  const stack: string[] = [];
  for (let log of logs) {
    if (log === "./") continue;

    if (log === "../") {
      stack.pop();
    } else {
      stack.push(log);
    }
  }
  return stack.length;
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
