function solution(n)
{
    var answer = 0;
      
    var intArr = Array.from(String(n), num => Number(num));
    for(var i=0;i<intArr.length;i++){
        answer += intArr[i]
    }
 
    return answer;
}