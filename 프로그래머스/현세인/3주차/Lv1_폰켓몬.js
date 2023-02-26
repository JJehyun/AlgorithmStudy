function solution(nums) {
    const newArr = [...new Set(nums)]; 
    
    if((nums.length / 2) > newArr.length) return newArr.length;
    else return (nums.length / 2)
}