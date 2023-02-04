//내가 푼 풀이
function solution(A, B) {
  let answer = 0;
  let arr1 = A.sort((a, b) => a - b);
  let arr2 = B.sort((a, b) => b - a);
  for (let i = 0; i < arr1.length; i++) {
    answer += arr1[i] * arr2[i];
  }
  return answer;
}

//남이 푼 풀이
//reduce 세번째인제 index를 활용
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
