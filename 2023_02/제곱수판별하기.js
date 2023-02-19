function solution(n) {
    //어떤 자연수를 제곱했을때 나오는 수가 제곱수이다.
    //정수N이 제곱수면 1 아니면 2를 리턴
    //루트해놓고 나머지가 0보다 크면 
    let a = Math.sqrt(n)
    if(a%1>0)return 2
    return 1
}

//다른풀이
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}