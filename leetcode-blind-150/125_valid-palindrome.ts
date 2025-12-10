function isPalindrome(s: string): boolean {
  const cleanS = s
    .split("")
    .filter((c) => /[a-zA-Z0-9]/.test(c))
    .join("")
    .toLowerCase();

  let l = 0,
    r = cleanS.length - 1;
  while (l < r) {
    if (cleanS[l] !== cleanS[r]) return false;
    l++;
    r--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
console.log(isPalindrome("0P"));
