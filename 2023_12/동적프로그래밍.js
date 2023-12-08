// 성능이 너무나 느린 피보나치 수열 함수
// f(3)으로 시작하면, f(2)와 f(1)을 호출하게 되고, f(2)는 또 f(1)을 호출한다.
function fibo(n) {
    if (n === 1 || n === 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
  }
  // 프로그램 멈춤
  log(fibo(100));
  
  // 성능을 개선한 피보나치 수열 함수 (메모이제이션)
  // 위의 함수와 다르게 중복된 부분 호출 시 메모리에 저장된 값만 반환하며 끝낸다.
  const memo = Array.from({ length: 1000 });
  function fibo2(n) {
    if (n === 1 || n === 2) return 1;
    if (memo[n]) return memo[n];
    else {
      memo[n] = fibo2(n - 1) + fibo2(n - 2);
      return memo[n];
    }
  }
  // 아주 쌩쌩함
  log(fibo2(100));
 