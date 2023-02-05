// left포인터를 고정하고, right포인터를 증가시킨다. sum과 동일한 값이 되면 cum++ , sum보다 값이 크다면 left변수를 증가 시키고 sum과 비교를 한다.
// right > sum --> left 증가 , right < sum --> right 증가
// sum = 1 -> 3 -> 4 -> 7 left = 1 -> 6(answer++) left=2 -> 5 -> 6 (answer++) ...
function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[left];
      left++;
      if (sum == m) answer++;
    }
  }

  return answer;
}
