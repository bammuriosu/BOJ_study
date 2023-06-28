function solution(t, p) {
    let result = 0;
    let pLength = p.length;
    for(let i = 0; i<t.length - pLength + 1; i++){
        let k = t.substring(i, i + pLength);
        if(Number(k)<= Number(p)) result++
    }
    return result;
}