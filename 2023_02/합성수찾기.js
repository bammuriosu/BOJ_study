function yak(ni) {
    // 약수에 해당하면 배열에 넣어서
    // 배열을 리턴
    let arr = [];
    for(let i = 2; i<=ni; i++){
        if(ni%i===0) arr.push(i)
    }
    return arr
}

function solution(n) {
    // 약수개수가 3개이상인 수를 합성수라 함
    // n이하 수들중 합성수가 몇개인지 리턴
    // 약수란? 나머지가 0인수, 1제외
    let arr2 = [];
    for(let i = 2; i<=n; i++){
        if(yak(i).length > 2) arr2.push(i)
    }
    return arr2.length;
}
