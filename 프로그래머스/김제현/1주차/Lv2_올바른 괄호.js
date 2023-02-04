//내 풀이 스택
function solution(s) {
  let arr = s.split("");
  let stack = [];
  if (arr[0] === ")") return false;
  arr.forEach((element, index) => {
    if (element === "(") stack.push(element);
    else stack.pop();
  });
  return stack.length === 0 ? true : false;
}

//남의 풀이
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    //삼항연산자를 이용해서 "(" 경우 ++  / ")" 경우 --
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
