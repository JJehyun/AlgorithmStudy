function solution(k, tangerine) {
    var obj = {};
    
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    })
    
    var sort = Object.values(obj).sort((a, b) => b - a);
    
    var sum = 0;
    var answer = 0;
    
    for(var num of sort) {
        answer++;
        sum += num;
        
        if(sum >= k) break;
    }
    
    return answer;
}