// 올바른 괄호 '(' 만나면 push() ')' 만나면 pop() , 배열의 총길이가 0 이상이면 옳바른 괄호 X
function solution(s) {
  let answer = "YES";
  stack = [];
  for (let x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}
