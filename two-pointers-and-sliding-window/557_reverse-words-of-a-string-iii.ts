function reverseWords(s: string): string {
  const arr = s.split(" "); // ["Let's",'take','LeetCode',"contest"]
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const characters = [...arr[i]];
    const wordLength = characters.length;

    let l = 0,
      r = wordLength - 1;

    while (l < r) {
      const temp = characters[l];
      characters[l] = characters[r];
      characters[r] = temp;
      l++;
      r--;
    }

    result.push(characters.join(""));
  }

  return result.join(" ");
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
