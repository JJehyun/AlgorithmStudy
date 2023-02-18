//해쉬 문제 javascript map 사용
//[["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
// [ yellow_hat , green_turban , 입지 않은 경우 ] , [blue_sunglasses , 입지 않은 경우] - 1 (모두 입지 않은 경우)
function solution(clothes) {
  let answer = 1;
  let hashMap = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (!hashMap.has(clothes[i][1])) hashMap.set(clothes[i][1], 1);
    else hashMap.set(clothes[i][1], hashMap.get(clothes[i][1]) + 1);
  }
  for (let value of hashMap.values()) {
    console.log(value);
    // 입지 않은 경우 + 1
    answer *= value + 1;
  }
  return answer - 1;
}
