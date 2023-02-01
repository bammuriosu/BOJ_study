// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 이기는 문자열을 리턴
function solution(rsp) {
    // 0 > 5
    // 2 > 0
    // 5 > 2
    let won = [];
    for(let i = 0; i<rsp.length; i++){
        if(rsp[i]==="0") won.push("5")
        else if(rsp[i]==="2") won.push("0")
        else won.push("2")
    }
    return won.join("")
}