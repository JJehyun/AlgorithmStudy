function solution(clothes) {
  let obj = {};
  let answer = 1;

  clothes.map((row) => {
    if (obj[row[1]]) {
      obj[row[1]].push(row[0]);
    } else {
      obj[row[1]] = [row[0]];
    }
  });

  for (let i in obj) {
    answer *= obj[i].length + 1;
  }
  return answer - 1;
}