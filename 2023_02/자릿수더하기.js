function solution(n){
    // 자연수 n이 주어지면
    // n의 자릿수 합을 구해서
    // 리턴
    return [...String(n)].reduce((acc,pre) => {
        return Number(acc) + Number(pre)
    })
}

//다른풀이

function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}