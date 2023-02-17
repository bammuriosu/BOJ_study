function solution(n) {
    // 정수n이 주어질때
    // n의 각자리수의 합을 리턴
    return String(n).split('').reduce((acc,cur) => 
        Number(acc) + Number(cur)
    ,0)
}