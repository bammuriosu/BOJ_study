function solution(s) {
    return (!isNaN(Number(s))) && (s.length === 4 || s.length === 6)
}

//다른풀이
function alpha_string46(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
}