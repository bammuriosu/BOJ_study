
function solution(my_strings, parts) {
    let str = '';
    for(let i = 0; i<my_strings.length; i++){
        str += my_strings[i].slice(parts[i][0],parts[i][1]+1)
    }
    return str
}

//다른풀이

function solution(my_strings, parts) {
    return parts.map(([s, e], i) => {
        return my_strings[i].slice(s, e + 1)
    }).join('')
}