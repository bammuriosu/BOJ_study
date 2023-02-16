function solution(my_string) {
    //my_string은 "3 + 5"처럼 문자열로 된 수식
    //수식을 계산한 값을 리턴
    //공백을 없애고, 연산기호 이전과 이후를 나눈다.
    //+면 더하고 아니면 뺀다.
    let string1 = my_string.split(' ').join('');
    if(string1.includes('+')){
        string1 = string1.split('+');
        return Number(string1[0]) + Number(string1[1])
    }else{
        string1 = string1.split('-');
        return Number(string1[0]) - Number(string1[1])
    }

}

//다른풀이
function solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())
    return arr[0]
}