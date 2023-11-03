function solution(my_string, index_list) {
    let answer = '';
    for(let el of index_list){
        answer += my_string[el];
    }
    return answer;
}

//다른풀이
function solution(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}