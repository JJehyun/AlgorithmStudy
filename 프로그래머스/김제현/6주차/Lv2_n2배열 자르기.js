function solution(n, left, right) {
  const arr = [];
  const left = Math.floor((left + 1) / n);
  const right = Math.ceil((right + 1) / n);
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= n; j++) {
      j < i ? arr.push(i) : arr.push(j);
    }
  }
  return arr.slice(left - n * (left - 1), right - n * (left - 1) + 1);
}
