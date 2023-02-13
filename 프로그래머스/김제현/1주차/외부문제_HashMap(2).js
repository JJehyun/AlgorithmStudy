//Hash 문제(2)
function solution(str1, str2) {
  let answer = "YES";
  let HashMap = new Map();
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  for (value of arr1) {
    if (!HashMap.has(value)) HashMap.set(value, 1);
    else HashMap.set(value, HashMap.get(value) + 1);
  }
  for (value of arr2) {
    if (!HashMap.has(value) || HashMap.get(value) === 0) return "No";
    else HashMap.set(value, HashMap.get(value) - 1);
  }
  return answer;
}
let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
