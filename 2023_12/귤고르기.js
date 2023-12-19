function findMode(arr) {
    const count = {};
    let maxCount = 0;
    let mode;
  
    for (let i = 0; i < arr.length; i++) {
      //객체에 해당값 없을때 {}
      if (count[arr[i]] === undefined) {
      //{1: 1}
        count[arr[i]] = 1;   
      } else {
      //{1: 2}
        count[arr[i]]++;     
      }
      
      //1개수가 maxCount보다 많으면
      if (count[arr[i]] > maxCount) {  
        //maxCount값 변경
        maxCount = count[arr[i]];   
        //최빈값 변경
        mode = arr[i];                   
      }
    }
  
    return mode;
  }
  
  function solution(k, tangerine) {
      
      let answer = 0;
      //sort하고 깊은복사함
      let tangerineCopy = tangerine.sort((a,b) => a-b).slice();
      
      //k가 0되기 전까지
      while(k>0){
          //최빈값 구해서
          let ModeNum = findMode(tangerineCopy);
          
          //최빈값 사라질때까지 하나씩 삭제하면서 k도 1씩 뺌
          while(tangerineCopy.indexOf(ModeNum) !== -1){
              tangerineCopy.splice(tangerineCopy.indexOf(ModeNum),1);
              k--;
          }
          //최빈값 다삭제하면 종류++
          answer++;
      }
      return answer;
      
  }
  
  