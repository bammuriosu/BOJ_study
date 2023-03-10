let fibonacci = function (n) {
    //아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
    //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
    const memo = [0, 1];
    const aux = (n) => {
      // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
      if (memo[n] !== undefined) return memo[n];
      // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
      memo[n] = aux(n - 1) + aux(n - 2);
      return memo[n];
    };
    return aux(n);
  };