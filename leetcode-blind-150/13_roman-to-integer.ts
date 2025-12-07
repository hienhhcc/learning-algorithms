type Char = "I" | "V" | "X" | "L" | "C" | "D" | "M";
function romanToInt(s: string): number {
  let result = 0;
  let i = 0;

  const mapSymbolToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  while (i < s.length) {
    const char = s[i] as Char;
    if (["I", "X", "C"].includes(char) && i !== s.length - 1) {
      const nextChar = s[i + 1];
      if (char === "I") {
        if (nextChar === "V") {
          result += 4;
          i += 2;
        } else if (nextChar === "X") {
          result += 9;
          i += 2;
        } else {
          result += mapSymbolToValue["I"];
          i++;
        }
      } else if (char === "X") {
        if (nextChar === "L") {
          result += 40;
          i += 2;
        } else if (nextChar === "C") {
          result += 90;
          i += 2;
        } else {
          result += mapSymbolToValue["X"];
          i++;
        }
      } else if (char === "C") {
        if (nextChar === "D") {
          result += 400;
          i += 2;
        } else if (nextChar === "M") {
          result += 900;
          i += 2;
        } else {
          result += mapSymbolToValue["C"];
          i++;
        }
      }
    } else {
      result += mapSymbolToValue[char];
      i++;
    }
  }

  return result;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
