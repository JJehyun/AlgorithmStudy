//각 배열의 인덱스를 가르키는 포인터1,2
//각 배열을 순회하며, 작은 쪽의 포인터를 증가시키며 정렬
function solution(arr1, arr2) {
  let pointer1 = 0;
  let pointer2 = 0;
  let answer = [];
  while (pointer1 < arr1.length || pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      pointer1++;
    } else if (arr1[pointer1] === arr2[pointer2]) {
      answer.push(arr1[pointer1]);
      answer.push(arr2[pointer2]);
      pointer1++;
      pointer2++;
    } else {
      answer.push(arr2[pointer2]);
      pointer2++;
    }
  }
  console.log(answer);
}
