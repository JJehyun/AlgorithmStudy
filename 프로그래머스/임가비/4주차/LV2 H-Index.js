function solution(citations) {
  citations.sort((a, b) => a - b);
  let hIdx = 0;
  let cnt = citations.filter((num) => num >= hIdx).length;

  for (let i = 0; i < citations.length; i++) {
    if (hIdx !== cnt && hIdx < cnt) {
      hIdx++;
      cnt = citations.filter((num) => num >= hIdx).length;
      if (hIdx > cnt) {
        hIdx--;
        break;
      }
    } else {
      break;
    }
  }
  return cnt ? hIdx : 0;
}