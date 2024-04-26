function solution(n, k) {
    if(n<10) return 12000*n+2000*k
    return 12000*n+2000*(k-~~(n/10)) //비트연산자두번쓰면 정수만남음
}