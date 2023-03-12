function solution(s) {
    var answer = [];
    var words = s.split(' ');
    
    for(var i=0;i<words.length;i++){
        for(var j=0;j<words[i].length;j++){
            if(j % 2 == 0) {
                answer.push(words[i][j].toUpperCase())
            } else {
               answer.push(words[i][j].toLowerCase())
            }
        }
        answer.push(' ')
    }
    return answer.join('').slice(0,-1)
}