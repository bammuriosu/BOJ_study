function solution(myString, pat) {
    let target = myString.toLowerCase();
    let pat2 = pat.toLowerCase();
    return target.includes(pat2) ? 1 : 0;
}

//다른풀이
function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase())?1:0 
}