function solution(num, k) {
    //정수 num과 k가 주어질때
    //num을 이루는 숫자중에 k가 있으면
    //num의 그 숫자가있는 자리수를 리턴
    //없으면 -1을 리턴
    let arr = String(num).split('')
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i])===k){
            return i+1
        }
    }
    return -1
}

//다른풀이
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}