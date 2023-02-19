function solution(str1, str2) {
    //문자열1안에
    //문자열2가 연속으로 있으면 1 아님 2
    //includes?
    arrStr1 = [...str1];
    if(arrStr1.includes(str2)) return 1
    return 2
}

//다른풀이
const solution = (str1, str2) => str1.includes(str2) ? 1 : 2