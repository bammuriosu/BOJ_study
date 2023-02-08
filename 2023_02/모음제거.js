function solution(my_string) {
    // a,e,i,o,u 모음으로 분류
    // 문자열이 주어질때, 모음을 제거한 
    // 문자열을 리턴
    let arr = [...my_string];

    return arr.filter((el) => ['a','e','i','o','u'].indexOf(el) < 0).join('')
}
//다른풀이


function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}
