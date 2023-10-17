function solution(n, m) {
    if(m%n === 0) return [n,m];
    else return [1,n*m]
}

//다른풀이

function solution(n, m) {
    var answer = [];
    const greatest = (a, b) => {        //화살표함수로 가볍게 변수로 함수정의가능
        if (b === 0) return a   
        return greatest(b, a % b)  
    }
    const least = (a,b) => (a*b) / greatest(a,b)
    return [greatest(n,m), least(n,m)]
}