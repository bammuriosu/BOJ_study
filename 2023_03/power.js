//두 수를 입력받아 거듭제곱을 리턴해야 합니다.
function power(base, exponent) {
    if (exponent === 0) return 1;
  
    const half = parseInt(exponent / 2);
    const temp = power(base, half);
    const result = (temp * temp) % 94906249;
  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
  }