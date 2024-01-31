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