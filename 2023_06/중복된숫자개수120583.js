function solution(array, n) {
    let cnt = 0;

    for (const el of array) 
        if (el === n) cnt++;
    

    return cnt;
}