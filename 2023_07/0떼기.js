function solution(n_str) {
    let newArr = [...n_str];
    while(newArr[0]==="0"){
        newArr.shift()
    }
    return newArr.join('');
}

//다른풀이
const solution = (str) => String(Number(str))