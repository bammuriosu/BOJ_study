function solution(n) {
    let prime = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            prime.push(i);
            
            n /= i;
        }
    }
    
    if(n >= 2){
        prime.push(n);    
    }
    
    let ans = Array.from(new Set(prime));
    
    return ans.sort((a,b) => a - b);
}

//다른풀이
function solution(n) {
    var answer = [];

    for(let i = 2; i <= n; i++) {

        while (n % i === 0) {

            n = n / i;
            answer.push(i);

        }
    }

    return [...new Set(answer)];
}
