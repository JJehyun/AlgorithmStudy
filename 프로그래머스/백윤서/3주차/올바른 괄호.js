function solution(s) {
  let count = 0;

  for (let alp of s) {
    if (alp === '(') count += 1
    else {
      if (count > 0) count -= 1
      else return false
    }
  }

  if (count !== 0) return false

  return true;
}