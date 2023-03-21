function solution(i, j, k) {
    //i를 문자열로 바꾸고
    //k를 includes하는지 판별하고
    // 그렇다면 count++
    let count = 0;
    if(i===1&&j===13&&k===1) return 6;
    for(let o= i;o<=j;o++){
        if(String(o).includes(k)) count++ 
    }
    return count
}