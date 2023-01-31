//정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
function solution(numbers, num1, num2) {
    //정수배열, 정수두개가 주어질때
    //num1번째부터 num2번째까지 자른 정수배열을 리턴하도록
    return numbers.slice(num1,num2+1)
}

//타인풀이

function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}