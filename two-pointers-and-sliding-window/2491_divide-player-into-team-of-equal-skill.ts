function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);

  const n = skill.length;

  let result = 0;

  let l = 0,
    r = n - 1;

  const skillOfTeam = skill[0] + skill[n - 1];
  while (l < r) {
    if (skill[l] + skill[r] !== skillOfTeam) return -1;

    result += skill[l] * skill[r];
    l++;
    r--;
  }

  return result;
}

console.log(dividePlayers([3, 2, 5, 1, 3, 4]));
console.log(dividePlayers([3, 4]));
console.log(dividePlayers([1, 1, 2, 3]));
