function solution(operations) {
  let queue = [];
  for (let i = 0; i < operations.length; i++) {
    let [cmd, num] = operations[i].split(" ");
    num = Number(num);
    if (cmd === "D") {
      if (queue.length === 0) {
        continue;
      } else {
        queue.sort((a, b) => a - b);
        if (num === 1) queue.pop();
        else queue.shift();
      }
    } else {
      queue.push(num);
    }
  }
  return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}