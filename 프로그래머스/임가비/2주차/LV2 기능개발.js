function solution(progresses, speeds) {
  let days = [];
  for (let i = 0; i < progresses.length; i++) {
    let day = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      day++;
    }
    days.push(day);
  }

  let standard = days[0];
  let cnt = 1;
  let answer = [];
  for (let i = 1; i < days.length; i++) {
    if (standard >= days[i]) {
      cnt++;
    } else {
      answer.push(cnt);
      standard = days[i];
      cnt = 1;
    }
  }
  answer.push(cnt);
  return answer;
}
