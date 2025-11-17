// function minOperations(boxes: string): number[] {
//   const indexes: number[] = [];

//   const n = boxes.length;

//   for (let i = 0; i < n; i++) {
//     const char = boxes[i];

//     if (char === "1") indexes.push(i);
//   }

//   const result: number[] = [];
//   for (let i = 0; i < n; i++) {
//     let answerI = 0;
//     indexes.forEach((index) => {
//       answerI += Math.abs(index - i);
//     });
//     result.push(answerI);
//   }

//   return result;
// }
function minOperations(boxes: string): number[] {
  const n = boxes.length;

  let balls = 0,
    previousMoves = 0;

  const result: number[] = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    result[i] = balls + previousMoves;

    previousMoves += balls;
    balls += Number(boxes[i]);
  }

  balls = 0;
  previousMoves = 0;

  for (let i = n - 1; i >= 0; i--) {
    result[i] += balls + previousMoves;

    previousMoves += balls;
    balls += Number(boxes[i]);
  }

  return result;
}

console.log(minOperations("110"));
console.log(minOperations("001011"));
