function timeConversion(s: string): string {
  function makeTime({
    hours,
    minutes,
    seconds,
  }: {
    hours: string;
    minutes: string;
    seconds: string;
  }) {
    return `${hours}:${minutes}:${seconds}`;
  }

  const parts = s.split(":");
  let hours = parts[0];
  let minutes = parts[1];
  let seconds = parts[2].substring(0, 2);
  const AMPM = parts[2].substring(2);

  if (AMPM === "AM") {
    if (hours === "12") {
      return makeTime({ hours: "00", minutes, seconds });
    }
    return makeTime({ hours, minutes, seconds });
  } else if (AMPM === "PM") {
    if (hours === "12") {
      return makeTime({ hours, minutes, seconds });
    }

    return makeTime({ hours: (+hours + 12).toString(), minutes, seconds });
  }

  return "";
}

console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));
