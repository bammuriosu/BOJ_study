function solution(n) {
    // 문자열로 바꾸고
    // NEW배열에다 unshift한걸 push한다.
    // 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
    let strN = String(n);
    let arrN = [...strN]
    const len = strN.length;
    let result = [];
    for(let i = 0; i<len; i++){
        result.push(Number(arrN.pop()))
    }
    return result;
}