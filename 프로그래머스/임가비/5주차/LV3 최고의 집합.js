function solution(n, s) {
  if (s < n) {
    return [-1];
  } else {
    let num = Math.floor(s / n);
    let rest = s % n;
    let answer = new Array(n).fill(num);
    for (let i = 0; i < rest; i++) {
      answer[i] += 1;
    }
    answer.sort((a, b) => a - b);
    return answer;
  }
}
