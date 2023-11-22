function solution(num_list, n) {
    for(let i = 0; i<n; i++){
        let kwon = num_list.shift();
        num_list.push(kwon);
    }
    return num_list
}

//다른풀이
function solution(num_list, n) {
    num_list.push(...num_list.splice(0, n));
    return num_list
}