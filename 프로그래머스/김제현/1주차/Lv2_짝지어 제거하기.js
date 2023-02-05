// stack 맨마지막 값과 동일하면 pop 동일하지 않으면 push
function solution(s) {
  let Array = s.split("");
  let stack = [];
  for (let i = 0; i <= Array.length; i++) {
    stack[stack.length - 1] === Array[i] ? stack.pop() : stack.push(Array[i]);
  }
  return stack.length === 0 ? 1 : 0;
}
