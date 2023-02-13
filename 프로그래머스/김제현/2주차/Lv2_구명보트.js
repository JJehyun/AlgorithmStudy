function solution(people, limit) {
  let count = 0;
  let sorted = people.sort((a, b) => b - a);
  let end = people.length - 1;
  for (let i = 0; i <= end; i++) {
    if (sorted[i] + sorted[end] <= limit) {
      end -= 1;
    }
    count += 1;
  }

  return count;
}
