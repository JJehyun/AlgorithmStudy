//(100 - 현재 진행률) / 작업속도 = 각 요소들 간에 남은 기간 [ 7, 3, 9 ]
//다음 인덱스값이 전 인덱스 값보다 기능개발이 적게 소요되면, count++
//다음인덱스가 max값보다 오래걸리면, answer에 값을 push 이후에 count = 1 초기화
// [7 , 3 ,9 ]  ==> 7 >= 7 count ++ ==> 7 >= 3 count ++  ==> 7 < 9 push(count) 이후 count = 1초기화
function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let count = 0;
  let max = days[0];
  days.forEach((element) => {
    if (element <= max) {
      count++;
    } else {
      max = element;
      answer.push(count);
      count = 1;
    }
  });
  answer.push(count);
  return answer;
}
