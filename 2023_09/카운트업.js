function solution(start_num, end_num) {
    let arr1 = []
    for(let i = start_num; i<=end_num; i++){
        arr1.push(i)
    }
    return arr1
}

//다른풀이

function solution(start, end) {
    return Array(end-start+1).fill(start).map((x,idx) => x+idx);
}