function solution(operations) {
  const queue = [];
  operations.mao((element) => {
    const [command, num] = element.split(" ");
    if (command === "I") return queue.push(+num);
    if (!queue.length) return;
    const otherElement = num < 0 ? Math.min(...queue) : Math.max(...queue);
    queue.splice(queue.indexOf(otherElement), 1);
  });
  return queue.length ? [Math.max(...queue), Math.min(...queue)] : [0, 0];
}
