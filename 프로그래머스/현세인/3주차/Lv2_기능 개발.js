function solution(progresses, speeds) {
    var answer = [0];
    var days = [];
    
    for(var i=0;i<progresses.length;i++){ 
        if((100 - progresses[i]) % speeds[i] === 0) 
            days.push((100 - progresses[i]) / speeds[i])
        else days.push((parseInt((100 - progresses[i]) / speeds[i])) + 1)
    }
    
    var maxDay = days[0];
    
    for(var i=0, j=0;i < days.length;i++){
        if(days[i] <= maxDay) { 
            answer[j] += 1;
        }
        else {
           maxDay = days[i];
            answer[++j] = 1;
        }
    }
  
    return answer; 
}