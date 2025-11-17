function checkInclusion(s1: string, s2: string): boolean {
  const s1Length = s1.length;
  const mapS1: Record<string, number> = {};
  for (let i = 0; i < s1.length; i++) {
    mapS1[s1[i]] = (mapS1[s1[i]] ?? 0) + 1;
  }

  const mapS2: Record<string, number> = {};
  let l = 0;
  for (let r = 0; r < s2.length; r++) {
    mapS2[s2[r]] = (mapS2[s2[r]] ?? 0) + 1;

    if (r - l + 1 > s1Length) {
      mapS2[s2[l]]--;
      l++;
    }

    if (r - l + 1 === s1Length) {
      let flag = 1;
      for (const key of Object.keys(mapS1)) {
        if (mapS1[key] !== mapS2[key]) {
          flag = 0;
          break;
        }
      }

      if (flag === 1) return true;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
