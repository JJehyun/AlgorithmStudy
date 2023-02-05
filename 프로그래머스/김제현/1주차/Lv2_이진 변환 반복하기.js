function solution(s) {
  let cum = 0;
  let cum2 = 0;
  cum2 = s.split("").filter((element) => element == 0).length;
  let tmp = s.replace(/0/g, "").length.toString(2);
  cum = cum + 1;
  while (tmp != 1) {
    cum2 += tmp.split("").filter((element) => element == 0).length;
    tmp = tmp.replace(/0/g, "").length.toString(2);
    cum = cum + 1;
  }
  return [cum, cum2];
}

//남의 코드
function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    //0이 있으면(g) 0들 반환, []은 null.length를 방지하기 위함
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, "").length.toString(2);
  }
  return answer;
}
