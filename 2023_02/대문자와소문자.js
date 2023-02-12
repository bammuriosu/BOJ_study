function solution(my_string) {
    // 문자열의 소문자는 대문자로
    // 대문자는 소문자로 변환후 리턴
    let arr = [...my_string];
    let lowStr = "abcdefghijklmnopqrstuvwxyz";
    let upStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowArr = [...lowStr];
    let upArr = [...upStr];
    let blankArr = [];
    for(let el of arr){
        if(lowArr.includes(el) === true){
            blankArr.push(el.toUpperCase());
        }else{
            blankArr.push(el.toLowerCase());
        }
    }
    return blankArr.join('')
}

//다른풀이
function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}