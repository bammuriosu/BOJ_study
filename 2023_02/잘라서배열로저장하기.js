function solution(my_str, n) {
    // my_str을
    // 6번째마다 공백문자 넣고
    // 아니면 넣음
    let str = "";
    for(let i = 0; i<my_str.length; i++){
        if(i%n===0) str+=" ";
        str+=my_str[i];
    }
    return str.slice(1).split(" ")
    
}

//다른풀이
function solution(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n));
    return res;
}