//queue.shift()값을 queue.push 해서 배열의 맨 앞value를 배열의 맨뒤에 push
//배열 이용
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}
