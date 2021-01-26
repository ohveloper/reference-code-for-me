// 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.

// - 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

function fibonacci(n) {
  // 0번째 1번째는 고정값으로 둔다
  const memo = [0, 1];
  // 필요한 숫자만큼만 검사해본다
  const aux = (n) => {
    if (memo[n] !== undefined) return memo[n];
    else {
      memo[n] = aux(n - 2) + aux(n - 1);
      return memo[n];
    }
  };
  return aux(n);
}
