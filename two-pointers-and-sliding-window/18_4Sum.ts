// function fourSum(nums: number[], target: number): number[][] {
//   nums.sort((a, b) => a - b);

//   const n = nums.length;

//   const result: number[][] = [];

//   for (let i = 0; i < n; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     for (let j = i + 1; j < n; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//       let l = j + 1,
//         r = n - 1;

//       while (l < r) {
//         if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
//           result.push([nums[i], nums[j], nums[l], nums[r]]);
//           l++;

//           while (l < r && nums[l] === nums[l - 1]) {
//             l++;
//           }
//         } else if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
//           r--;
//         } else {
//           l++;
//         }
//       }
//     }
//   }

//   return result;
// }

function fourSum(nums: number[], target: number): number[][] {
  function kSum({
    k,
    start,
    target,
  }: {
    k: number;
    start: number;
    target: number;
  }) {
    if (k !== 2) {
      for (let i = start; i < n; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        kSum({ k: k - 1, start: i + 1, target: target - nums[i] });
        quad.pop();
      }
      return;
    }

    let l = start,
      r = n - 1;

    while (l < r) {
      if (nums[l] + nums[r] > target) {
        r--;
      } else if (nums[l] + nums[r] < target) {
        l++;
      } else {
        result.push([...quad, nums[l], nums[r]]);
        l++;
        while (l < r && nums[l] === nums[l - 1]) l++;
      }
    }
  }

  const result: number[][] = [];
  const quad: number[] = [];

  const n = nums.length;

  nums.sort((a, b) => a - b);

  kSum({ k: 4, start: 0, target });

  return result;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
