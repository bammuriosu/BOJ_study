function solution(my_string, is_suffix) {
    let arr = [];
    let backword = my_string.split('').reverse();
    return backword.join('').split(is_suffix)[0] === "" ? 1 : 0;
}

//다른풀이

function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}