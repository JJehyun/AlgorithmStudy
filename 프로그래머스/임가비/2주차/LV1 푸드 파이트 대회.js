function solution(food) {
  let answer = "";
  food.splice(0, 1);
  for (let i = 0; i < food.length; i++) {
    let cnt = Math.floor(food[i] / 2);
    answer += (i + 1).toString().repeat(cnt);
  }
  answer = answer + "0" + [...answer].reverse().join("");
  return answer;
}
