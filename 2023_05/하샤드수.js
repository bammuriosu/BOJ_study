function solution(x) {
    //reduce 다 더하고
    // x%result === 0
    let numToString = String(x);
    let result = Array.from(numToString)
    let result2 = result.map((el) => {
        return Number(el);
    })
    let result3 = result2.reduce((acc,cur) => {
        return acc + cur;
    })
    return x % result3 === 0;
}

//다른풀이
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10;
        x = Math.floor(x/10);
    } while (x>0);

    return !(num%sum);
}