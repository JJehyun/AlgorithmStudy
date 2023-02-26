function solution(n, s) {
  var answer = [];

  if (n > s) {
    return [-1];
  }
  var mok = Math.floor(s / n);
  var nam = s % n;
  for (i = 0; i < n; i++) {
    var mm = mok;
    if (nam > 0) {
      ++mm;
      --nam;
    }
    answer.push(mm);
  }
  answer.reverse();

  return answer;
}
