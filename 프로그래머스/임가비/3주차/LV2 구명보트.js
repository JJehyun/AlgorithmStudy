function solution(people, limit) {
  let answer = 0;
  let startIdx = 0;
  let endIdx = people.length - 1;
  people.sort((a, b) => a - b);
  while (startIdx <= endIdx) {
    if (people[startIdx] + people[endIdx] <= limit) {
      startIdx++;
    }
    answer++;
    endIdx--;
  }
  return answer;
}