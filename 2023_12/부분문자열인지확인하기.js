function solution(my_string, target) {
    return my_string.slice(my_string.length-target.length)===target ? 1 : 0
}

//다른풀이
function solution(my_string, target) {
    // 문자를 포함할 경우 해당 인덱스를 출력하는 방식을 이용한다.
    return my_string.indexOf(target) > -1 ? 1 : 0;
}