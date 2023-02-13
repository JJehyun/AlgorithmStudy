//작은 값을 가르키는 포인터를 증가
function solution(arr1, arr2) {
  let A = arr1.sort((a, b) => a - b);
  let B = arr2.sort((a, b) => a - b);
  let answer = [];
  let Apointer1 = 0;
  let Bpointer2 = 0;
  while (Apointer1 < A.length && Bpointer2 < B.length) {
    if (A[Apointer1] === B[Bpointer2]) {
      answer.push(A[Apointer1]);
      Apointer1++;
      Bpointer2++;
    } else if (A[Apointer1] > B[Bpointer2]) {
      Bpointer2++;
    } else {
      Apointer1++;
    }
  }
}
