function solution(X, Y) {
    //배열 X의 원소하나가 Y에 존재한다면
    //그 원소를 newArr에 넣어서 sort후 리턴
    let arrX = X.split('');
    let arrY = Y.split('');
    let answer = [];
    for(let el of arrX){
        if(arrY.includes(el)) {
            answer.push(el);
            arrY.splice(arrY.indexOf(el),1)
        }
    }
    let dap = answer.sort((a,b) => b-a).join('')
    return dap === "" ? "-1"
    : Number(dap) === 0 ? "0"
    : dap
}


//다른풀이
function solution(X, Y) {
    let answer = ''
    X = X.split("")
    Y = Y.split("")
    // 해당 숫자가 얼마나 있는지 확인해서 더 낮은만큼 정답 문자열에 더함
    for(let i = 0 ; i < 10 ; i ++) {
        const curX = X.filter(a => Number(a) === i).length
        const curY = Y.filter(a => Number(a) === i).length
        answer+=String(i).repeat(Math.min(curX, curY))
    }
    if(answer === '') return "-1"
    if(Number(answer) === 0) return "0"
    // 내림차순으로 정렬해 반환하면 최댓값
    return answer.split("").sort((a,b) => Number(b)-Number(a)).join("")
}