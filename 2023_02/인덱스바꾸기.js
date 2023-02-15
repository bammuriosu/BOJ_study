function solution(my_string, num1, num2) {
    const result = [...my_string]
    // num 간의 문자열을 변환함
    result.splice(num1, 1, my_string[num2])
    result.splice(num2, 1, my_string[num1])
    return result.join("")
}

//다른풀이
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
