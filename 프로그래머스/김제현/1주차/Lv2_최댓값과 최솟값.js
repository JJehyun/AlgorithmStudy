//내가 푼 코드
function solution(s) {
  let arr = s.split(" ").map(Number);
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  arr.forEach((element, index) => {
    if (min > element) min = element.toString();
    if (max < element) max = element.toString();
  });
  return min + " " + max;
}

//남의 코드
//Math.min or Math.max는 배열요소가 문자열이면, 숫자형으로 강제형변환
function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
