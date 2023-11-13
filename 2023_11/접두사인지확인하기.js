function solution(my_string, is_prefix) {
    let answer = '';
    for(let i = 0; i<is_prefix.length; i++){
        answer = answer + my_string[i];
    }
    return answer === is_prefix ? 1 : 0 
}

//다른풀이

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}