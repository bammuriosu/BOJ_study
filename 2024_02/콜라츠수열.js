function solution(n) {
    let answer = [];
    while(n !== 1){
        if(n%2 === 0){
            answer.push(n);
            n = n/2;
        }else{
            answer.push(n);
            n = 3*n+1;
        }
    }
    answer.push(1);
    return answer;
}

function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}