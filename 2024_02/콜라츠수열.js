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

//다른풀이

function solution(n, arr = []) {
    arr.push(n); //arr에 n 추가
    if (n === 1) return arr   //1개까지 줄여졌으면 리턴
    if (n % 2 === 0) return solution(n / 2, arr) //짝수인경우 재귀
    return solution(3 * n + 1, arr) //홀수인경우 재귀
}