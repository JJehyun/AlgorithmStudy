function solution(n) {
  let binCnt = [...n.toString(2)].filter((e) => e == 1).length;
  
  while (true) {
      n++;
      if ([...n.toString(2)].filter((e) => e == 1).length === binCnt) return n;
  }
}