//행렬의 곱셈           b11  b12
// a11 a12 a13         b21  b22
// a21 a22 a23         b31  b32
// a11b11 + a12a21 + a13b31 + a11b12 + a12b22 + a13b32  --> 가로와 세로를 곱함
// a21b11 + a22b21 + a23b31 + a21b21 + a22b22 + a23b32  --> 가로와 세로를 곱함
function solution(arr1, arr2) {
  const Arrays = [];

  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let element = 0;
      for (let k = 0; k < arr2.length; k++) {
        element += arr1[i][k] * arr2[k][j];
      }
      result.push(element);
    }
    Arrays.push(result);
  }
  return Arrays;
}
