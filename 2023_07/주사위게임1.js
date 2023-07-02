function solution(a, b) {
    let count = 0;
    if(a%2 === 1) count ++;
    if(b%2 === 1) count ++;
    if(count === 2) return a*a + b*b;
    else if(count === 1) return 2 * (a+b);
    else if(count === 0) return Math.abs(a-b);
}


function solution(a, b) {
    const isOdd = (num) => num % 2 === 1;
  
    return isOdd(a) && isOdd(b)
      ? a ** 2 + b ** 2
      : isOdd(a) || isOdd(b)
      ? 2 * (a + b)
      : Math.abs(a - b);
  }