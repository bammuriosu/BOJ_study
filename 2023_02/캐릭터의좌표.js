function solution(keyinput, board) {
    // x축, y축 up down left right , 0,0에서 시작한다. 
    // board를 벗어난 입력은 무시한다. 절대값 parseInt(board/2)
    let first = [0,0];
    for(el of keyinput){
        if(el==="up")first[1]++;
        if(el==="down")first[1]--;
        if(el==="left")first[0]--;
        if(el==="right")first[0]++;
        if(Math.abs(first[1])>parseInt(board[1]/2) && el==="up") first[1]--;
        if(Math.abs(first[1])>parseInt(board[1]/2) && el==="down") first[1]++;
        if(Math.abs(first[0])>parseInt(board[0]/2) && el==="left") first[0]++;
        if(Math.abs(first[0])>parseInt(board[0]/2) && el==="right") first[0]--;
    }
    return first;
    
}

//다른풀이
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}
