function solution(s) {
    let arr = s.split(' ').map(Number);
    let ans = `${Math.min(...arr)} ${Math.max(...arr)}`;
    return ans;
}