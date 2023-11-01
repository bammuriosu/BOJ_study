function solution(arr, n) {
    return arr.length % 2 === 1 ? arr.map((el,index) => {
        if(index % 2 === 0) return el+n;  
        else return el;
    }) : arr.map((el,index) => {
        if(index % 2 === 1) return el+n;
        else return el;
    })
}

//다른풀이
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))
