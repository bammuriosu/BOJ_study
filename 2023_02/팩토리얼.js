function pactorial(n) {
    let num = 1;
    for(let i = 1; i<=n; i++){
        num = num * i
    }
    return num
}

function solution(n) {
    // 정수 n이 주어질 때
    // n보다 작은 팩토리얼값의 팩토리얼하기 전값을 리턴
    let i = 1
    while(pactorial(i) <= n){

        i++
    }
    return i-1
}

//다른풀이

function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;
    return i;
}