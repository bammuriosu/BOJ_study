function solution(arr) {
    let answer = [];
    for(let el of arr){
        for(let i = 0; i<el; i++){
            answer.push(el);
        }
    }
    return answer;
}

//다른풀이
function solution(arr) {
    return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}