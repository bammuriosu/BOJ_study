function solution(n) {
    for(let i = 1; i<=1000000; i++){
        if(n % i === 1) return i
    }
}

//다른풀이

const solution = function(n) {
    for (let i=0; i<n; i++){
        if (n%i == 1){
            return i
        }
    }
}