function solution(before, after) {
    // before문자열 뒤집은게 after과 같은지를 리턴
    let reverseBefore = before.split("").reverse().join('');
    return reverseBefore===after ? 1 : 0;
}
//다른풀이
function solution(before, after) {
    return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}