function solution(str1, str2) {
    let answer = '';
    for(let i = 0; i<str1.length; i++){
        answer += str1[i];
        answer += str2[i];
    }
    return answer
}

//다른풀이
function solution(str1, str2) {
    return [...str1].map((a, i) => a+str2[i]).join("")
}