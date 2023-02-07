function solution(box, n) {
    // 직육면체 상자에 정육면체 모양의 주사위를 
    // 최대한 많이 채우고 싶다.
    // box : [가로,세로,높이]
    // n : 주사위한변의길이
    // 상자에 들어갈수있는 주사위의 최대개수
    // 가로/n * 세로/n * 높이/n 
    return parseInt(box[0]/n) * parseInt(box[1]/n)  *parseInt(box[2]/n)
}
// 다른풀이
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}