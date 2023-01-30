//양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지
function solution(n, k) {
    // n/10>1일때 k-
    if(n/10 > 1) return n*12000 + (k-Math.floor(n/10))*2000
    else return n*12000 + k*2000
}

//추천풀이
function solution(n, k) {
    return n*12000 + k*2000 - parseInt(n/10)*2000
}