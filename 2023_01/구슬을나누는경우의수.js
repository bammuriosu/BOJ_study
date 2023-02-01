const factorial = (n) => {
    let result = "1"
    for(let i = 1; i<=n; i++){
        result *= i
    }
    return result
}
function solution(balls, share) {
    // 머쓱이가 갖고있는 구슬갯수 balls
    // 친구에게 나눠줄 구슬개수 share
    // balls개의 구슬중 share개의 구슬을 고르는 
    // 모든 경우의 수를 리턴
    
    return factorial(balls) / (factorial(balls-share) * factorial(share))
}

//다른풀이
function solution(balls, share) {

  return factorial(balls) / (factorial((balls-share)) * factorial(share))
}
// 팩토리얼을 구하는 함수
function factorial(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}