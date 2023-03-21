function solution(priorities, location) {
  var answer = 0;
  var index = location;
  var counts = 0;
  while (priorities.length > 0) {
    var max = Math.max(priorities);
    var tmp = priorities.shift();
    if (tmp != max) {
      priorities.push(tmp);
    } else {
      counts++;
      if (index == 0) {
        answer = counts;
        break;
      }
    }
    index--;
    if (index == -1) {
      index = priorities.length - 1;
    }
  }
  return answer;
}
