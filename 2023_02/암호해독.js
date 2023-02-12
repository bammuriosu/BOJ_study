function solution(cipher, code) {
    // 암호화된 문자열 cipher을 주고받습니다
    // 그 문자열에서 code의 배수번째 글자만 진짜암호이다.
    let arr = []
    for(let i = 1; i<=cipher.length; i++){
        if(i%code === 0) arr.push(cipher[i-1])
    }
    return arr.join('')
}

// 다른풀이
function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
      answer += cipher[i];
    }
    return answer;
  }