//문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.
function solution(str1, str2) {
    return str2.includes(str1) ? 1 : 0
}

//다른풀이

const solution=(s,t)=>+(t.indexOf(s)>-1);