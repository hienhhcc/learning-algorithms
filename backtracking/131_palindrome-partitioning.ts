function partition(s: string): string[][] {
  const result: string[][] = [];
  const parts: string[] = [];

  function helper(i: number) {
    if (i === s.length) {
      result.push(parts.slice());
      return;
    }

    for (let j = i; j < s.length; j++) {
      const string = s.slice(i, j + 1);
      if (isPalindrome(string)) {
        parts.push(string);
        helper(j + 1);
        parts.pop();
      }
    }
  }

  helper(0);
  return result;
}

function isPalindrome(s: string) {
  let l = 0,
    r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
}

console.log(partition("aab"));
console.log(partition("a"));
