function solution(t, p) {
    var answer = 0;
      for(let i=0; i <= t.length - p.length; i++) {
    	let slice = t.substr(i, p.length);
        
        if(Number(slice) <= Number(p)){
        	answer++;
        }
    }
    return answer;
}