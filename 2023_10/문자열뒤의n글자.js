function solution(my_string, n) {
    return my_string.split('').slice(my_string.length - n).join('');
}


//다른풀이

function solution(my_string, n) {
    return my_string.substring(my_string.length - n);
}