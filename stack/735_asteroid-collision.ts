function asteroidCollision(asteroids: number[]): number[] {
  const n = asteroids.length;

  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    let shouldAddToStack = true;
    const currAsteroid = asteroids[i];

    while (
      stack.length > 0 &&
      isGoingToCollide(stack[stack.length - 1], currAsteroid)
    ) {
      const currAsteroidSize = Math.abs(currAsteroid);

      if (stack[stack.length - 1] > currAsteroidSize) {
        shouldAddToStack = false;
        break;
      } else if (stack[stack.length - 1] === currAsteroidSize) {
        stack.pop();
        shouldAddToStack = false;
        break;
      } else {
        stack.pop();
        shouldAddToStack = true;
      }
    }
    if (shouldAddToStack) {
      stack.push(currAsteroid);
    }
  }

  return stack;
}

function isGoingToCollide(a1: number, a2: number): boolean {
  return a1 > 0 && a2 < 0;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
