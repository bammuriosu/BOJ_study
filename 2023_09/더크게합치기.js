function solution(a, b) {
    //string화 시켜서 A+B B+A 한걸 number화해서 비교
    //비교해서 큰쪽을 리턴
     return Number(a.toString()+b.toString()) > Number(b.toString()+a.toString()) ? Number(a.toString()+b.toString()) :  Number(b.toString()+a.toString())
}

//다른풀이
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}