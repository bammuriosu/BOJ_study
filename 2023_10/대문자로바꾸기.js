function solution(myString) {
    return myString.toUpperCase();
}

//다른풀이
function solution(myString) {
    return [...myString].map(str => str.toUpperCase()).join('');
}