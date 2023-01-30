// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string, letter) {
    // 문자열과 문자가 주어짐
    // 문자열에서 문자를 제거한
    // 문자열을 리턴
    return [...my_string].filter(el => el !== letter).join("")
}

추천풀이
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}