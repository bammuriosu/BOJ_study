function solution (A, B) {
    let answer = 0;
    
    A.sort((a,b) => b-a);
    B.sort((a,b) => a-b);
    
    for(const a of A) {
      const max = B[B.length - 1];
      if(a < max) {
        answer++;
        B.pop();
      }
    }
    
    return answer;
  }

  //다른풀이
  function solution(A, B) {
    var answer = 0;
    let left = 0;
    const len = A.length;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
      if (A[left] < B[i]) {
        left++;
        answer++;
      }
    }
    return answer;
  }