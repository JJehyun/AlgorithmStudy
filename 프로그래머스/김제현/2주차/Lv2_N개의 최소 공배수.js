function solution(num) {
  var div = 0;
  for (var i = 1; ; i++) {
    for (var j = 0; j < num.length; j++) {
      if (i % num[j] != 0) {
        div++;
      }
    }
    if (div == 0) {
      return i;
    }
    div = 0;
  }
}
//다른 문제 풀이
//유클리드 알고리즘 사용 [최소공배수]
//[2,6,8,14] -> [6,8,14] -> [24, 14] -> [168]
function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}
