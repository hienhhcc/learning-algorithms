function intToRoman(num: number): string {
  const symbols = {
    M: 1000,
    C: 100,
    X: 10,
    I: 1,
  };

  const mapKeyToItsRelative = {
    M: {
      five: "A",
      ten: "B",
    },
    C: {
      five: "D",
      ten: "M",
    },
    X: {
      five: "L",
      ten: "C",
    },
    I: {
      five: "V",
      ten: "X",
    },
  };

  let result = "";

  for (const [key, val] of Object.entries(symbols)) {
    const r = Math.floor(num / val);

    if (r === 0) continue;

    if (r < 4) {
      for (let i = 0; i < r; i++) {
        result += key;
      }
    } else if (r === 4) {
      result += key + mapKeyToItsRelative[key as "I" | "X" | "C" | "M"].five;
    } else if (r < 9) {
      result += mapKeyToItsRelative[key as "I" | "X" | "C" | "M"].five;
      for (let i = 0; i < r - 5; i++) {
        result += key;
      }
    } else {
      result += key + mapKeyToItsRelative[key as "I" | "X" | "C" | "M"].ten;
    }
    num -= r * val;
  }

  return result;
}

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
