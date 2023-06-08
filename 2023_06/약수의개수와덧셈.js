function yakmany(num) {
    let count = 0;
    for(let i = 1; i<=num; i++){
        if(num % i === 0) count++
    }
    return count
}
function solution(left, right) {
    // 매개변수로 주어집니다
    // left부터 right까지 모든수들 중에서
    // 약수의 개수가 짝수인 수는 더하고 약수의 수가 홀수인 수는 뺀 수를 리턴
    let count2 = 0;
    for(let i = left; i<= right; i++){
        if(yakmany(i) % 2 === 0) count2 += i
        else count2 -= i
    }
    return count2
}