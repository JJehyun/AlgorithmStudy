function solution(arr)
{
    let array = []
    for(i=0;i<=arr.length;i++){
        if(arr[i] != arr[i+1]){
            array.push(arr[i])
        }
    }
    return array;
}