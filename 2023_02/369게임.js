function solution(order) {
    // 말해야하는 숫자에 3,6,9 중 들어있는 갯수를 리턴
    return String(order).split('').filter((el) => ['3','6','9'].indexOf(el)>=0).length
}
//다른풀이
function solution(order) {
    return (''+order).split(/[369]/).length-1;
}
