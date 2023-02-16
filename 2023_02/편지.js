function solution(message) {
    // 글자 한자한자를 2cm크기로 적으려 하며
    // 편지를 가로로만 적을 때, 축하문구 message를 적기위해
    // 필요한 편지지의 최소 가로길이를 리턴
    return message.length * 2
}

//다른풀이
function solution(message) {
    var answer = [...message].length * 2;
    return answer;
}