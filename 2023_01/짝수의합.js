// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
    // n이하의 숫자를 모두 배열에 넣자
    // filter로 짝수만있는 배열 남김
    // reduce로 위 배열을 다 더해
    let arr = [];

    for(let i = 0; i<n; i++){
        arr[i] = i+1;
    }

    return arr.filter(el => el%2 === 0).reduce((acc,cur) => acc + cur);
}

//다른풀이 

function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}