function solution(numbers) {
    var answer = numbers.map(a => String(a))
    .sort((a, b) => (b + a) - (a + b))
    .join('');
 
    
    return answer[0] === '0' ? '0' : answer;
}