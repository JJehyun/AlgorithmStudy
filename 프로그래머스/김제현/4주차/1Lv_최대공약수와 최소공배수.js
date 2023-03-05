function solution(n, m) {
    let first = 0;
    for(i=1; i<= Math.min(n,m);i++){
        if(n%i===0 && m%i===0){
            first = i
        }
    }
    let two = n/first
    let three = m/first
    let four = first * two * three
    return [first,four];
}