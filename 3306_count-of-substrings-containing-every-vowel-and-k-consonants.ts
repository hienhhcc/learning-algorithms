function countOfSubstrings(word: string, k: number): number {
  return atLeastK(word, k) - atLeastK(word, k + 1);
}

function atLeastK(word: string, k: number): number {
  function allVowelsExistAtLeastOne() {
    return (
      countVowel.a >= 1 &&
      countVowel.i >= 1 &&
      countVowel.o >= 1 &&
      countVowel.u >= 1 &&
      countVowel.e >= 1
    );
  }

  const n = word.length;

  let result = 0;
  const countVowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let countNonVowel = 0;

  let l = 0;
  for (let r = 0; r < n; r++) {
    if ("aeiou".includes(word[r])) {
      countVowel[word[r]]++;
    } else {
      countNonVowel++;
    }

    while (allVowelsExistAtLeastOne() && countNonVowel >= k) {
      result += n - r;
      if ("aeiou".includes(word[l])) {
        countVowel[word[l]]--;
      } else {
        countNonVowel--;
      }
      l++;
    }
  }

  return result;
}

console.log(countOfSubstrings("aeioqq", 1));
console.log(countOfSubstrings("aeiou", 0));
console.log(countOfSubstrings("ieaouqqieaouqq", 1));
