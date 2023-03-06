function solution(numbers) {
  let strings = numbers.map((num) => num.toString());
  strings.sort((a, b) => {
    return b + a - (a + b);
  });
  return strings[0] === "0" ? "0" : strings.join("");
}