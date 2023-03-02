
function solution(dots) {
    // 주어진 네개의 점을 두개씩 이었을 때
    // 두 직선이 평행이 되는 경우가 있으면 1 없으면 0
    // 0,1/2,3 
    //0,2/1,3 
    //0,3/1,2 기울기 하나라도 같으면 1 
    return (((dots[0][1]-dots[1][1])/(dots[0][0]-dots[1][0]) === (dots[2][1]-dots[3][1])/(dots[2][0]-dots[3][0]))||((dots[0][1]-dots[2][1])/(dots[0][0]-dots[2][0]) === (dots[1][1]-dots[3][1])/(dots[1][0]-dots[3][0]))||((dots[0][1]-dots[3][1])/(dots[0][0]-dots[3][0]) === (dots[1][1]-dots[2][1])/(dots[1][0]-dots[2][0]))) ? 1 : 0;

    
}





//다른풀이
function solution(dots) {
    if((dots[0][1] - dots[1][1]) / (dots[0][0] - dots[1][0]) === (dots[2][1] - dots[3][1]) / (dots[2][0] - dots[3][0])) return 1
    if((dots[0][1] - dots[2][1]) / (dots[0][0] - dots[2][0]) === (dots[1][1] - dots[3][1]) / (dots[1][0] - dots[3][0])) return 1
    if((dots[0][1] - dots[3][1]) / (dots[0][0] - dots[3][0]) === (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0])) return 1
    return 0
}