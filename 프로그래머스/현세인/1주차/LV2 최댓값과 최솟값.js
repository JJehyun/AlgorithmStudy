function solution(s) {
    var newArr = s.split(' ');
    
    return Math.min(...newArr) + ' ' + Math.max(...newArr) ;
}