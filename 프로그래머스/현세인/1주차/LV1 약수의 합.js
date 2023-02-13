function solution(n) {
    var index = 1;
    var sum = 0;
    while(index<=n){
        if(n % index == 0){
            sum += index
        }
        index += 1;
    }
    return sum;
}