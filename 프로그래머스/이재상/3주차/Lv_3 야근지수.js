function solution(n, works) {
  var s = works.reduce((p, su) => p + su, 0);
  if (s <= n) {
    return 0;
  }

  var aa = works.sort((a, b) => b - a);
  var len = works.length;
  while (n) {
    const m = aa[0];
    for (let i = len - 1; i >= 0; i--) {
      if (aa[i] >= m) {
        --aa[i];
        --n;
      }
      if (!n) {
        return aa.reduce((a, b) => a + b * b, 0);
      }
    }
  }

  return aa.reduce((a, b) => a + b * b, 0);
}
