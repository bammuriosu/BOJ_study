function solution(num_list) {
    let nums = num_list.sort((a,b) => a-b);
    return nums.slice(5)
}

//다른풀이

function solution(num_list) {
    return num_list.sort((a, b) => a - b).splice(5);
}