function solution(numbers) {
    //후보1: 맨뒤 두숫자 곱
    //후보2: 맨앞 두숫자 곱

    numbers.sort(function(a,b){return a-b});
    if(numbers[0]*numbers[1] > numbers[numbers.length - 1]*numbers[numbers.length-2]) return numbers[0]*numbers[1] 
    else return numbers[numbers.length - 1]*numbers[numbers.length-2]
}
//다른풀이
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}