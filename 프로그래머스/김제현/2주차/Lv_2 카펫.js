// brown + yellow = sum 전체 사각형의 넓이
// (1) sum % h === 0 인 값을 찾아 h가 될 수 있는 모든 값을 탐색
// (2) [(h - 2) * (w - 2) === 노란색 부분이 차지하는 영역]
// (1) , (2) 조건을 모두 만족하는 w, h 값을 찾는다.

function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  //높이의 최소 길이는 3이상
  for (let h = 3; h <= brown; h++) {
    //나머지가 없는 경우만 탐색
    if (sum % h === 0) {
      //가로길이
      let w = sum / h;
      if ((h - 2) * (w - 2) === yellow) {
        return [w, h];
      }
    }
  }
  return answer;
}
