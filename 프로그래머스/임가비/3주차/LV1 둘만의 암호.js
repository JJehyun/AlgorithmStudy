function solution(s, skip, index) {
  let alpha = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((e) => !skip.includes(e));
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    let idx = alpha.indexOf(s[i]) + index;
    ans += alpha[idx % alpha.length];
  }
  return ans;
}