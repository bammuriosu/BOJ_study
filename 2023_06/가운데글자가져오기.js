function solution(s) {
    //홀수라면 가운데글자 반환
    //짝수라면 가운데 두글자 반환
    if(s.length % 2 !== 0) return s[Math.floor(s.length/2)]
    else return s[s.length/2 - 1] + s[s.length/2]
}

//다른풀이

function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}
