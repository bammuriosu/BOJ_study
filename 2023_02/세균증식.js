function solution(n, t) {
    //어떤 세균은 1시간에 2배만큼 증가한다고 한다.
    //처음 세균마리수 n과 경과한시간 t가 매개변수로 주어질때
    //t시간후 세균의 수를 리턴
    for(let i = 0; i<t; i++){
        n = n * 2;
    }
    return n
}

//다른풀이
function solution(n, t) {
    return n << t;
  }