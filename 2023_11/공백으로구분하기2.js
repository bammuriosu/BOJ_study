function solution(my_string) {
    return my_string.split(' ').filter((el) => el.length>0);
}

//다른풀이

function solution(my_string) {
    return my_string.split(' ').filter(v => v);
}