function boardGame(board, operation) {
    // (0,0) 시작
    // u d l r 한번에 한칸씩
    // 보드판 board, 문자열 operation
    // 말이 보드밖으로 나갔다면 즉시 OUT
    // for문 돌면서
    // U, D이면 앞배열-- 뒷배열++ 이동
    // L, R이면 두번째배열-- 두번째배열++ 이동
    // 1을 만나면 score++
    // undefined면 OUT 하고 break
    let operArr = [...operation];
    let X = 0;
    let Y = 0; //(0,0)
    let score = 0;
    for(let el of operArr){
      if(el === 'U'){
        Y--;
        if(Y<0 || board.length < Y) return "OUT"
        if(board[Y][X]===1) score++;
      }
      if(el === 'D'){
        Y++;
        if(Y<0 || board.length < Y) return "OUT"
        if(board[Y][X]===1) score++;
      }
      if(el === 'L'){
        X--;
        if(board[Y][X]===undefined) return "OUT"
        if(board[Y][X]===1) score++;
      }
      if(el === 'R'){
        X++;
        if(board[Y][X]===undefined) return "OUT"
        if(board[Y][X]===1) score++;
      }
    }
    return score;
  };

//다른풀이

// LOOK UP TABLE을 사용한다면 조건문을 추상화시킬 수 있습니다.
function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    const DIR = {
      'U': [-1, 0],
      'D': [1, 0],
      'L': [0, -1],
      'R': [0, 1]
    }
    const LEN = board.length;
    const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;
  
    let Y = 0;
    let X = 0;
    let score = 0;
    for (let i = 0; i < operation.length; i++) {
      const [dY, dX] = DIR[operation[i]];
      Y += dY;
      X += dX;
      if (isValid(Y, X) === false) return 'OUT';
      score += board[Y][X];
    }
    return score;
  };