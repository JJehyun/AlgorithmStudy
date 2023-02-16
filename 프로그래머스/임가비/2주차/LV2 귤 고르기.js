function solution(k, tangerine) {
  let tang = new Map();
  let cnt = 0, sum = 0;

  tangerine.map((size) => {
    if (tang.has(size)) {
      tang.set(size, tang.get(size) + 1);
    } else tang.set(size, 1);
  });

  let tangArr = [...tang];
  tangArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < tangArr.length; i++) {
    sum += tangArr[i][1];
    cnt++;
    if (sum >= k) break;
  }
  return cnt;
}
