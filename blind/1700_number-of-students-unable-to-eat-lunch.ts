function countStudents(students: number[], sandwiches: number[]): number {
  function canNotEatLunchAnyMore() {
    if (sandwiches.length === 0 || studentsOverTime.length === 0) return true;

    return (
      (studentsOverTime.every((s) => s === 1) && sandwiches[0] === 0) ||
      (studentsOverTime.every((s) => s === 0) && sandwiches[0] === 1)
    );
  }

  const n = students.length;
  let count = 0;

  const studentsOverTime = [...students];

  let i = 0,
    j = 0;
  while (!canNotEatLunchAnyMore()) {
    if (studentsOverTime[i] === sandwiches[j]) {
      studentsOverTime.shift();
      sandwiches.shift();
      count++;
    } else {
      studentsOverTime.push(studentsOverTime.shift()!);
    }
  }

  return n - count;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
