function solution(s) {
  let binCnt = 0;
  let zeroCnt = 0;
  while (s !== '1') {
      const zero = [...s].filter((e) => e === '0').length;
      zeroCnt += zero;
      s = (s.length - zero).toString(2);
      binCnt++;
  }
  return [binCnt, zeroCnt];
}