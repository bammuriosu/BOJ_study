function solution(polynomial) {
    //다항식은 동류항끼리 계산해 정리
    //매개변수로 주어질때 동류항끼리 더한 결과값을 리턴
    //" x "로 스플릿해보자
    //원소에 x가 있으면 x날리고 더한다
    //없으면 더한다.
    let xnum = 0;
    let num = 0;
    let arr1 = polynomial.split(" + ");
    for(let el of arr1){
        if(el==="x") xnum += 1;
        else if(el.includes("x")) xnum += Number(el.slice(0,-1));
        
        else num+=Number(el[0]);
    }
    if(num===0) return String(xnum)+"x"
    return String(xnum)+"x + "+String(num)
}

//다른풀이
function solution(polynomial) {
    const arr = polynomial.split(" + ");
    const xNum = arr
                .filter(n => n.includes("x"))
                .map(n => n.replace('x', '') || '1')
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);
    const num = arr
                .filter(n => !isNaN(n))
                .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let answer = [];
    if(xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);
    if(num) answer.push(num);

    return answer.join(" + ");
}