//Hash 문제(1)
function solution(s) {
  let arr = s.split("");
  let hashMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap.has(arr[i])) hashMap.set(arr[i], 1);
    else hashMap.set(arr[i], hashMap.get(arr[i]) + 1);
  }
  let min = Number.MIN_SAFE_INTEGER;
  for (value of arr) {
    min = Math.max(min, value);
  }
  return min;
}
let str = "BACBACCACCBDEDE";
console.log(solution(str));
