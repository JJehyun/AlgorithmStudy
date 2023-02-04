function solution(s) {
  let arr = s.split("");
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === " ") arr[i] = arr[i].toUpperCase();
    else arr[i] = arr[i].toLowerCase();
  }
  return arr.join("");
}
