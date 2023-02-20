function solution(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n)
    answer = Array.length

    return answer;
}



//다른풀이
const solution = (array, n) => array.reduce((a,b) => n === b ? a+1 : a,0)