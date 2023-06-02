function solution(absolutes, signs) {
    // 정수를 담은 배열
    // 정수의 부호를 담은 배열
    // 실제 정수들의 합을 리턴
    // [4,7,12] [1,-1,1]로 배열 변경한뒤
    // 각 요소끼리 곱한배열
    // 을 더한 배열을 return 
    let newSigns = signs.map((el) => {
        return ( el === true ? el = 1 : el = -1)
    })
    let newArr = [];
    for(let i = 0; i<signs.length; i++){
        newArr.push(absolutes[i] * newSigns[i]);
    }
    return newArr.reduce((acc,cur) => acc + cur);
}

//다른풀이

function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}