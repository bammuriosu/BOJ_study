function solution(x, n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }
    return answer;
}


//다른풀이
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
