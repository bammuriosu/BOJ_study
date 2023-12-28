function solution(arrayA, arrayB) {
    //배열의 최대공약수를 뽑되, 상대배열의 약수면 안됨
    
    //최대공약수 뽑는함수
    let getGCD = (num1, num2) => {
    let gcd = 1;
    for(let i=2; i<=Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }
    return gcd;
    }
    //arrayA,B길이가 3이상이면 getGCD(a,b,c) => getGCD(getGCD(a,b),c)로 풀면되므로 reduce
    let aGCD = arrayA.reduce(getGCD);
    let bGCD = arrayB.reduce(getGCD);
    //상대배열의 약수면 0으로 초기화시킴
    for(let i = 0; i<arrayA.length; i++){
        if(arrayB[i] % aGCD === 0) aGCD = 0;
        if(arrayA[i] % bGCD === 0) bGCD = 0;
    }
    //더큰거 리턴, 둘다0이면 0이 리턴됨
    return aGCD>=bGCD ? aGCD : bGCD 
}

//다른풀이
function solution(arrayA, arrayB) {
    const aResult = getAnswer(arrayA, arrayB)
    const bResult = getAnswer(arrayB, arrayA)

    return aResult > bResult ? aResult : bResult
}

function getAnswer (A, B) {
    A.sort((a, b) => a - b)
    for (let i = A[0]; i > 1; i--) {
        if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
    }
    return 0
}