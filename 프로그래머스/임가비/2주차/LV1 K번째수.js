function solution(array, commands) {
  let answer = [];
  for (let idx = 0; idx < commands.length; idx++) {
    let [i, j, k] = commands[idx];
    let num = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(num);
  }
  return answer;
}
