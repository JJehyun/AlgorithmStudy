function solution(n) {
  let tmp = 0;
  let cum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      tmp += j;
      if (tmp == n) cum++;
      else if (tmp > n) break;
    }
    tmp = 0;
  }
  return cum;
}
