function solution(n) {
    var answer = [0, 1, 2];
    
    for(var i=3;i <= n;i++){
        answer[i] = (answer[i-1] + answer[i-2]) % 1234567;
    }
    return answer[n];
}