function solution(arr, divisor) {
    // divisor로 나누어 떨어지는 값을 배열에 넣고
    // 오름차순으로 정렬한배열을 반환
    result = arr.filter((el) => {
        return el % divisor === 0;
    }).sort((a,b) => a-b);   
    return (result.length > 0 ? result : [-1]) 
}

//다른풀이

function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}