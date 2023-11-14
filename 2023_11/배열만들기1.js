function solution(n, k) {
    let answer = [];
    for(let i = 1; i<=n; i++){
        if(i % k === 0) answer.push(i);
    }
    return answer;
}

//다른풀이
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}
