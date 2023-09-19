function solution(num_list) {
    return num_list.reduce((acc,val) => acc*val) < num_list.reduce((acc,val) => acc+val)*num_list.reduce((acc,val) => acc+val) ? 1 : 0
}

//다른풀이
function solution(num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}