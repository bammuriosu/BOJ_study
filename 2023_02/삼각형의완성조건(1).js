
function solution(sides) {
    //선분 세개로 삼각형을 만들기 위해선
    //가장 긴변길이는 두변의 길이의 합보다 작아야함
    //가장긴변<두변합 1 가장긴변>두변합 2
    sides.sort();
    const result = sides[0]+sides[1] > sides[2]
        ? 1
        : 2
    return result
}
//다른풀이
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
