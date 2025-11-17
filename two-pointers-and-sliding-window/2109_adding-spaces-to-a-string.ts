// function addSpaces(s: string, spaces: number[]): string {
//   let spaceAdded = 0;
//   const arrS = s.split("");

//   for (let j = 0; j < spaces.length; j++) {
//     arrS.splice(spaces[j] + spaceAdded, 0, " ");
//     spaceAdded += 1;
//   }

//   return arrS.join("");
// }

function addSpaces(s: string, spaces: number[]): string {
  let result = "";
  let l = 0,
    r = 0;

  for (const space of spaces) {
    while (r !== space) {
      r++;
    }
    result += s.substring(l, r) + " ";
    l = r;
  }

  result += s.substring(r);

  return result;
}

console.log(addSpaces("LeetcodeHelpsMeLearn", [8, 13, 15]));
console.log(addSpaces("icodeinpython", [1, 5, 7, 9]));
console.log(addSpaces("spacing", [0, 1, 2, 3, 4, 5, 6]));
