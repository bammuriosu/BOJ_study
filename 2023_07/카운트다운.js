// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
    let arr = [];
    for(let i = start_num; i>= end_num; i--){
        arr.push(i);
    }
    return arr
}

//다른풀이

const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);