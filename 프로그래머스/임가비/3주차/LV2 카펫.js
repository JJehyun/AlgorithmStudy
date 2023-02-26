function solution(brown, yellow) {
  let ans;
  const carpet = brown + yellow;
  const divisors = [];

  for (let i = 3; i <= Math.sqrt(carpet); i++) {
    let pair = [];
    if (carpet % i === 0) pair.push(i, carpet / i);
    divisors.push(pair);
  }
  const pairs = divisors.filter((pair) => pair.length > 0);
  pairs.map((e) => e.reverse());

  for (let i = 0; i < pairs.length; i++) {
    if ((yellow % pairs[i][1]) - 2 === 0) {
      if (yellow / (pairs[i][1] - 2) > pairs[i][1]) continue;
    }

    if ((pairs[i][0] - 2) * (pairs[i][1] - 2) === yellow) {
      ans = pairs[i];
      break;
    }
  }
  return ans;
}