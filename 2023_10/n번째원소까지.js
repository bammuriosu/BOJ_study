function solution(num_list, n) {
    return num_list.slice(0,n)
}

//다른풀이

function solution(num_list, n) {
    var answer = [];
    for (let i=0; i<n; i++ ) {
        answer.push(num_list[i]);
    }
    return answer;
}
