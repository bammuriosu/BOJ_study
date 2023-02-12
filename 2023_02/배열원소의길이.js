function solution(strlist) {
    //각 배열의 원소의 길이를 담은 배열을 리턴
    return strlist.map((el) => {
        return el.length;
    })
}
//다른풀이
function solution(strlist) {
    var answer = [];
    strlist.forEach(el=>answer.push(el.length))
    return answer;
}