function solution(n, s) {
    var answer = []
    if(n > s) return [-1];
    
    var div = Math.floor(s/n);
    var num = s % n;
    
    for (var i=0; i< n; i++) {
        if(num === 0){
            answer.push(div);
        } else {
            answer.push(div + 1);
            num--;
        }
    }
    return answer.reverse();
}
    
    
