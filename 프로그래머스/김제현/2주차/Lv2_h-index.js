function solution(citations) {
  var answer = 0;
  const sorted = citations.sort((a, b) => b - a);
  let h = 0;
  sorted.forEach((c) => {
    if (c > h) h++;
  });
  answer = h;
  return answer;
}
