function solution(my_string, alp) {
    let my_arr = my_string.split('');
    let answer = [];
    for(let el of my_arr){
        el === alp ? answer.push(el.toUpperCase()) : answer.push(el)
    }
    return answer.join('');
}

//다른풀이
function solution(my_string, alp) {
    if (!my_string.includes(alp)) {
        return my_string;
    }
    return my_string.replaceAll(alp, alp.toUpperCase());
}