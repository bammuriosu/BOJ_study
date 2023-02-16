function solution(s1, s2) {
    //문자열 배열 s1, s2가 주어질때
    //같은 원소의 개수를 리턴
    //카운터하나넣고
    //s1의 배열을 순회하며
    //s2에 includes하면 ++
    let result = 0;
    for(let el of s1){
        if(s2.includes(el)) result++;
    }
    return result;
}

//다른풀이
function solution(s1, s2) {
    const concat = [...s1, ...s2];
    const setConcat = Array.from(new Set(concat));

    return concat.length - setConcat.length;
}