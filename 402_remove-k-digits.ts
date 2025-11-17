// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:

// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

// Constraints:

// 1 <= k <= num.length <= 105
// num consists of only digits.
// num does not have any leading zeros except for the zero itself.

function removeKdigits(num: string, k: number): string {
  const n = num.length;
  const stack: string[] = [];

  for (let i = 0; i < n; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      k -= 1;
      stack.pop();
    }
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }
  let i = 0;
  while (i < stack.length && stack[i] === "0") {
    i++;
  }
  const res = stack.slice(i).join("");

  return res === "" ? "0" : res;
}

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
