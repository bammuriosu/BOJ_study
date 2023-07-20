function solution(my_string, k) {
    let str = "";
    for(let i = 0; i<k; i++){
        str += my_string
    }
    return str;
    
}

// 다른풀이
function solution(my_string, k) {
    return my_string.repeat(k)
}