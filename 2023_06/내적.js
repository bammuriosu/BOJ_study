function solution(a, b) {
    //for문 돌려서 
    // 변수에 더한값 리턴
    let result = 0;
    for(let i = 0; i<a.length; i++){
        result += a[i] * b[i];
    }
    return result;
}