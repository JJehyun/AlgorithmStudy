//스택활용
function solution(s) {
  let answer = 0;
  //input 회전 반복문
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    //옳바른지 확인 반복문
    for (let j = 0; j < s.length; j++) {
      if (stack.length !== 0) {
        if (
          (s[j] === "]" && stack[stack.length - 1] === "[") ||
          (s[j] === "}" && stack[stack.length - 1] === "{") ||
          (s[j] === ")" && stack[stack.length - 1] === "(")
        ) {
          stack.pop();
        } else stack.push(s[j]);
      } else stack.push(s[j]);
    }
    if (stack.length === 0) answer++;
    s = s.slice(1) + s[0];
  }

  return answer;
}
