function solution(n) {
    let answer = 0;
    
      const dfs = (board, row) => {
        if(n === row) answer++;
        else {
          for(let i = 1; i <= n; i++) {
            board[row+1] = i;	// 다음 라인에 퀸을 배치하고
            // isValid 라는 함수를 통해 해당 위치 퀸이 유효한지 검사
            // 유효하다면 다음위치 계속 탐색
            if(isValid(board, row+1)) dfs(board, row+1);
  
            // 필요하다면 여기서 board[row+1] = 0 으로 
            // 다음 backtraking을 위한 처리가 가능하다.
            // 하지만 위에서 언급했듯 우린 배열을 1차원으로 최적화하기에
            // 이 과정이 필수는 아니다.
          }
        }
      }
    
    const isValid = (board, row) => {
      for(let i = 1; i < row; i++) {
        if(board[i] === board[row]) return false;
        if(Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
      }
      return true;
    }
    
    for(let i = 1; i <= n; i++) {
      const board = new Array(n+1).fill(0);
      board[1] = i;
      dfs(board, 1);
    }
    
    return answer;
  }
    
  //다른풀이
  function nQueen(n) {
    var result
    var array = []
    var tmparray = []
    for (var j = 0; j < n; j++)
        array[j] = new Array(n)
    var count = 0;
      for (var y = 0; y < n; y++) {
          for (var x = 0; x < n; x++) {
              if (typeof array[y][x] == "undefined") {
                  array = doarray(array, x, y, n);
                      count++
              }
          }
      }
    return count;
}

function doarray(array, x, y, n) {
    console.log(x, y)
    for (var i = 0; i< n; i++) {
        array[i][x] = 1
        array[y][i] = 1
        if (x + i < n && y + i < n)
            array[x + i][y + i] = 1
        if (x - i >= 0 && y + i < n)
            array[x - i][y + i] = 1
        if (x - i >= 0 && y - i >= 0)
            array[x - i][y - i] = 1
        if (x + i < n && y - i >= 0)
            array[x + i][y - i] = 1
    }
    return array
}