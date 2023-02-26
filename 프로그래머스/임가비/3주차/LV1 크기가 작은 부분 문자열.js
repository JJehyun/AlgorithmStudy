function solution(t, p) {
  let len = p.length;
  let nums = [];
  let cnt = 0;
  for (let i = 0; i <= t.length - len; i++) {
    nums.push(t.slice(i, i + len));
  }
  nums.map((num) => {
    if (Number(num) <= Number(p)) cnt++;
  });
  return cnt;
}