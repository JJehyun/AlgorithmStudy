// n개로 이루어진 합이 s 인 집합 중에서 가장 큰 집합을 구하기
// {1,7} {2,6} {3,5} {4,4} --> {4,4}가 최대의 집합
function solution(n, s) {
  var answer = [];
  var middle = s % n;
  var tmp = Math.floor(s / n);
  if (n > s) {
    answer.push(-1);
  } else {
    for (var i = 0; i < n - middle; i++) {
      answer.push(tmp);
    }
    for (var j = 0; j < middle; j++) {
      answer.push(tmp + 1);
    }
  }
  return answer;
}
