function solution(n) {
  let length = n.toString(2).match(/1/g).length;
  while (true) {
    n++;
    if (n.toString(2).match(/1/g).length == length) return n;
  }
}
