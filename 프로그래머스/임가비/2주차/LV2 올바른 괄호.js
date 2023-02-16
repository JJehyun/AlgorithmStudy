function solution(s){
  if (s.length === 1 || s[0] === ')') return false;
  let stack = [];
  [...s].map((e) => {
      if (e === '(') {
          stack.push('(');
      } else {
          if (stack.length) stack.pop();
          else return false;
      }
  })
  return stack.length ? false : true;
}