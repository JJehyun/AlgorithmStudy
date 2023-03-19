function solution(k, t) {
  let counts = {};
  t.map((element) => {
    if (counts[`${element}`] === undefined) {
      counts[`${element}`] = 1;
    } else counts[`${element}`] += 1;
  });
  let count = 1;
  let Arrays = Object.values(counts).sort((a, b) => b - a);
  for (let i = 0; i < Arrays.length; i++) {
    if (k <= Arrays[i]) break;
    k -= Arrays[i];
    count++;
  }
  return count;
}
