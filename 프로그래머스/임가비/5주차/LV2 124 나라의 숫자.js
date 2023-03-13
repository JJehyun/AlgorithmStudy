function solution(n) {
  let answer = "";
  while (n > 0) {
    let remainder = n % 3;
    answer = String(remainder) + answer;
    n = Math.floor((n - 1) / 3);
    answer = answer.replace(/["0"]/g, "4");
  }
  return answer;
}
