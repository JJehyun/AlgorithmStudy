function solution(s) {
  var answer = true;
  if (s.at(0) !== "(" || ")" !== s.at(-1)) {
    return false;
  } else {
    var stack = [];
    let total = s.split("");
    for (aa of total) {
      if (aa === "(") {
        stack.push(aa);
      } else if (stack.length !== 0) {
        stack.pop();
      } else {
        return false;
      }
    }
    if (stack.length !== 0) {
      return false;
    }
  }

  return answer;
}
