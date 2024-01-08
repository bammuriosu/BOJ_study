//소수구해주는함수
function isPrime(num) {
    if(num < 2) return false;
    if(num === 2) return true;
  
    for(let i = 2; i<num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }
  //순열구해주는 함수
   const getPermutations = function (arr, selectNumber) {
      const results = [];
      if (selectNumber === 1) return arr.map((el) => [el]); 
      // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.
  
      arr.forEach((fixed, index, origin) => {    //인자 : 요소, 그 요소의 인덱스, 원본배열 
        console.log("fixed:" + fixed);
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
        // 해당하는 fixed를 제외한 나머지 배열 
        console.log("rest:" + rest);
        const permutations = getPermutations(rest, selectNumber - 1); 
        // 나머지에 대해서 순열을 구한다.
  
        const attached = permutations.map((el) => [fixed, ...el]); 
        //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); 
        // 배열 spread syntax 로 모두다 push
      });
  
      return results; // 결과 담긴 results return
  }
  //내가쓴거
  function solution(numbers) {
      //17이랑 71이랑 다르니 nCr아님 nPr임
      //한개부터 numbers.length개까지 isPrime && answer배열에 없으면 넣는다
      //answer.length리턴
      
      //한글자씩 분리
      let numArr = numbers.split('');
      let answer = [];
      for(let i = 1; i<=numbers.length; i++){
          //i자리 글자수 순열이 리턴된다. ['1','2'] =>[["1","2"],["2","1"]]
          let CombinedArr = getPermutations(numArr,i);
          
          //순열 요소인 배열을 문자열로 합쳐서 숫자화
          for(let el of CombinedArr){
              let newNum = Number(el.join(''));
              //그 숫자가 소수이면서 중복안되면 answer에 넣는다
              if(isPrime(newNum) && !answer.includes(newNum)) answer.push(newNum)
          }
      }
      
      
      return answer.length
      
  }

  //다른풀이
  function solution(numbers) {
    var answer = 0;
    var set = new Set();
    var value = [];  
    var visited = Array(numbers.length).fill(false)
    for (let i=1; i<=numbers.length; i++) {
        dfs(0, i);
    }

    function dfs(cur_len, len) {
        if (cur_len === len) {
            set.add(parseInt(value.join('')));
            return;
        }
        for (let i=0; i<numbers.length; i++) {
            if (!visited[i]) {
                value.push(numbers[i])
                visited[i] = true;
                dfs(cur_len + 1, len);
                visited[i] = false;
                value.pop()
            }            
        }
    }
    answer = [...set].filter(n => {
        if (n < 2) return false
        for (let i=2; i<=Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true
    })
   // console.log(answer)
    return answer.length;
}
