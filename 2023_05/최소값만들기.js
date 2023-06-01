function solution(A,B){
    //A,B는 자연수로 된 배열
    //두 배열에서 한개의 숫자를 뽑아 두수를 곱한다.
    // 배열의 길이만큼 반복하며, 두 수를 곱한값을 누적하여 더한다
    // A_length, B_length 구해서 for문
    let arr_length = A.length;
    let answer = 0;
    A = A.sort((a,b) => a-b);
    B = B.sort((a,b) => b-a);

    for(let i = 0; i<arr_length; i++){
        answer += A[i] * B[i];
    }
이력서, react, typescript
    return answer;
}

//다른풀이
function solution(A,B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}