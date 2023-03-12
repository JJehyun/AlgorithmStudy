function gcd(a, b) {
  const remainder = a % b;
  if (remainder === 0) return b;
  return gcd(b, remainder);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let ans = 1;
  for (let i = 0; i < arr.length; i++) {
    ans = lcm(ans, arr[i]);
  }
  return ans;
}
