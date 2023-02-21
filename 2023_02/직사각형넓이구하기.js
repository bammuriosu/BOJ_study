function solution(dots) {
    //2차원좌표평면에 직사각형이 있다
    //네 꼭짓점의 좌표가 담겨있는 배열이 주어진다.
    //직사각형의 넓이를 리턴
    //x1과 x2가 다르다면
    //절대값 x1-x2 * 절대값 y1-y2
    return dots[0][0] !== dots[1][0]
    if(dots[0][0] !== dots[1][0]) return (Math.abs(dots[0][0])-Math.abs(dots[1][0])) * (Math.abs(dots[0][1])-Math.abs(dots[1][1]))
    else return (Math.abs(dots[0][0])-Math.abs(dots[2][0])) * (Math.abs(dots[0][1])-Math.abs(dots[2][1]))
}

//다른풀이
function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);
    
    const oneSide = Math.abs(dots[0][1] - dots[1][1]);
    const otherSide = Math.abs(dots[0][0] - dots[2][0]);
    
    return oneSide * otherSide;
}
