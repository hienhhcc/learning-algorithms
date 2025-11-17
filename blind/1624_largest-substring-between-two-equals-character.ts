// function maxLengthBetweenEqualCharacters(s: string): number {
//   let flag = 0;

//   const cMap: Record<string, number> = {};

//   for (let c of s) {
//     cMap[c] = (cMap[c] ?? 0) + 1;
//     if (cMap[c] >= 2) {
//       flag = 1;
//     }
//   }
//   if (flag === 0) {
//     return -1;
//   }

//   const appearMoreThanTwiceCharactersMap: Record<string, number> = {};
//   let maxLength = 0;
//   for (let [key, val] of Object.entries(cMap)) {
//     if (val >= 2) {
//       appearMoreThanTwiceCharactersMap[key] = val;
//     }
//   }

//   for (let [key, val] of Object.entries(appearMoreThanTwiceCharactersMap)) {
//     let count = 0,
//       firstIndex = 0;
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === key) {
//         if (count === 0) {
//           count++;
//           firstIndex = i;
//         } else if (count < val - 1) {
//           count++;
//         } else if (count === val - 1) {
//           maxLength = Math.max(maxLength, i - firstIndex - 1);
//         }
//       }
//     }
//   }

//   return maxLength;
// }

function maxLengthBetweenEqualCharacters(s: string): number {
  let maxLength = -1;
  const cMap: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in cMap) {
      maxLength = Math.max(maxLength, i - cMap[char] - 1);
    } else {
      cMap[char] = i;
    }
  }

  return maxLength;
}

console.log(maxLengthBetweenEqualCharacters("aa"));
console.log(maxLengthBetweenEqualCharacters("abca"));
console.log(maxLengthBetweenEqualCharacters("cbzxy"));
