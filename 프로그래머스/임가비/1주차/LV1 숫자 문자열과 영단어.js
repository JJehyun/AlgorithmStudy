function solution(s) {
  let answer = s;
  let str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i=0; i<str.length; i++) {
      if (answer.includes(str[i])) {
          answer = answer.replaceAll(str[i], i);
      }
  }
  return Number(answer);
}