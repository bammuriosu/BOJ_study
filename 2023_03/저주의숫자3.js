function solution(n) {
    //3으로 나누었을때 0이면 || 3이 포함돼있으면
    //+1더함
    let num = 1;
    for(let i = 1; i<=n; i++){
        if(num%3===0 || String(num).includes("3")) num+=2;
        else num++;
    }
    return num;
}

//다른풀이
function solution(n) {
    let cnt = 0;
    for(let i = 1; i < 200; i++) {
        if(i%3 != 0 && !i.toString().split('').includes('3')) {
            cnt++;
            if(cnt == n) {
                return i;
            }
        }
    }
}