function solution(n) {
    // 피보나치수 % 1234567 를 리턴
    const fibo = (k) => {
        if(k <= 1) return k
        return fibo(k-1) + fibo(k-2);        
    }
    return fibo(n) % 1234567
}

//다른풀이
function getFibonacci(n) {
    let fNum = [0, 1, 1];
    for(let i = 3; i <= n; i++) {
      fNum[i] = (fNum[i - 1] + fNum[i - 2])%1234567;
    }
    return fNum[n];
}

function solution(n) {
    const answer = getFibonacci(n) % 1234567;
    return answer;
}