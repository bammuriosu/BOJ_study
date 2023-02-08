function solution(my_string) {
    // 문자열이 주어질때, 안에있는 숫자만 골라
    // 오름차순 정렬한 리스트를 리턴
    let arr = [...my_string];
    return arr.filter(el => ['0','1','2','3','4','5','6','7','8','9'].indexOf(el)>=0).sort().map(el => Number(el))
}

//다른풀이


function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}