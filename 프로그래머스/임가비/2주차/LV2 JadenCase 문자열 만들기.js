function solution(s) {
  s = s.toLowerCase();
  let answer = s.replace(/\b[a-z]/g, (char) => char.toUpperCase());
  return answer;
}
