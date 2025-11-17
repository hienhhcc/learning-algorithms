function minOperations(s: string): number {
  const n = s.length;
  const arrayS1 = s.split("");
  const arrayS2 = [...arrayS1];

  let countOperation1 = 0;
  let countOperation2 = 0;

  if (s[0] === "0") {
    arrayS2[0] = "1";
    countOperation2++;
  } else if (s[0] === "1") {
    arrayS1[0] = "0";
    countOperation1++;
  }

  for (let i = 1; i < n; i++) {
    if (arrayS1[i] === arrayS1[i - 1]) {
      countOperation1++;
      arrayS1[i] = arrayS1[i - 1] === "0" ? "1" : "0";
    }

    if (arrayS2[i] === arrayS2[i - 1]) {
      countOperation2++;
      arrayS2[i] = arrayS2[i - 1] === "0" ? "1" : "0";
    }
  }

  return Math.min(countOperation1, countOperation2);
}

console.log(minOperations("0100"));
console.log(minOperations("10"));
console.log(minOperations("1111"));
console.log(minOperations("10010100"));
