function solution(d, budget) {
    //오름차순해놓고 작은것부터 더해서 budget보다 작거나 같을때까지
    let sortedArr = d.sort((a,b) => a-b);
    let sum = 0;
    let i = 0;
    while(sum <= budget){
        sum += sortedArr[i];
        i ++
    }
    return i-1;
}

//다른사람의 풀이
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}