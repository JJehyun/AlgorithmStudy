function solution(s) {
  var answer = "";
  var list = s
    .split(" ")
    .map((m) => parseInt(m))
    .sort((a, b) => a - b);
  answer = `${list.at(0)} ${list.at(-1)}`;
  return answer;
}
