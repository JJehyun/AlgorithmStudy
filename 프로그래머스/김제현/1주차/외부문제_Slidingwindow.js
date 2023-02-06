//Sliding window란 창문을 하나만들어서 옆으로 밀고가는 형식을 뜻한다.
// [12 15 11] 20 25 10 ... -> 12 [15 11 20] 25 10... -> 12 15 [11 20 25] 10...
// 첫번째 38 두번째 (38+20-12) : 46 세번째 (46 + 25 -15) : 56 전 인덱스를 빼고 다음인덱스를 더해주며 최고값을 찾는다.
function solution(k, arr) {
  let answer = 0;
  let sum = 0;
  let max = 0;
  //3개의 윈도우 생성
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  //k-1까지의 윈도우를 만들었으니 k부터
  for (let i = k; i < arr.length - 2; i++) {
    //1[][][]5 --> 12[][][]6 --> 123[][][]7
    //sum은 +arr[i] -arr[i-k] k는 창문 갯수, 지금 창문 갯수는 = 3
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
