// O(n^3)
// function countSubstrings(s: string): number {
//   const n = s.length;
//   let count = n;

//   for (let i = 2; i <= n; i++) {
//     for (let j = 0; j < n - i + 1; j++) {
//       let l = j,
//         r = j + i - 1,
//         flag = 1;
//       while (l <= r) {
//         if (s[l] !== s[r]) {
//           flag = 0;
//           break;
//         }
//         l++;
//         r--;
//       }

//       if (flag) count++;
//     }
//   }

//   return count;
// }

function countSubstrings(s: string): number {
  const n = s.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let left = i,
      right = i;
    //Odd palindrome
    while (left >= 0 && right <= n - 1 && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
    //Even palindrome
    left = i;
    right = i + 1;
    while (left >= 0 && right <= n - 1 && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  return count;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
