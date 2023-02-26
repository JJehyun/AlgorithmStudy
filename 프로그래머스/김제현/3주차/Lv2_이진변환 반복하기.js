function solution(n, words) {
  let Index = 0;
  const used = [];
  for (let i = 1; i < words.length; i++) {
    //이전 단어
    const prev = words[i - 1];
    used.push(prev);
    //현재 단어
    const curr = words[i];
    if (prev[prev.length - 1] !== curr[0] || used.includes(curr)) {
      Index = i;
      break;
    }
  }
  if (!Index) return [0, 0];
  return [(Index % n) + 1, Math.ceil((Index + 1) / n)];
}
