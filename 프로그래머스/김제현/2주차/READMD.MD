## 마지막에 1234567으로 나누라는 문제는 dp를 사용하라는 힌트

<br />
<br />

## 유클리드 호제법

- 최대공약수 (GCD) , 최소공배수 (LCM)

```js
function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}
```
