// function findDuplicate(nums: number[]): number {
//   //Time: O(n). Space: O(n)
//   const hashSet = new Set();

//   for (let n of nums) {
//     if (hashSet.has(n)) return n;
//     hashSet.add(n);
//   }

//   return 0;
// }

function findDuplicate(nums: number[]): number {}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
console.log(findDuplicate([3, 3, 3, 3, 3]));
