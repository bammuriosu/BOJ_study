function solution(keymap, targets) {
    const answer = [];
    const map = new Map();
  
    for (const key of keymap) {
      for (let i = 0; i < key.length; i++) {
        if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1);
      }
    }
  
    for (const target of targets) {
      let count = 0;
      for (let i = 0; i < target.length; i++) {
        count += map.get(target[i]);
      }
      answer.push(count || -1);
    }
  
    return answer;
  }

  //다른풀이

  function solution(keymap, targets) {
    let answer = [];
    let pressKey= 0;
    
    targets.forEach((x)=>{
      for(let i=0; i<x.length;i++){
        let count = Infinity;
         keymap.forEach((key)=>{
          let idx = key.indexOf(x[i])

           if(idx>-1){
             count = Math.min(count,idx+1)
           }

          })
       pressKey+=count
      }
      answer.push(pressKey)
     pressKey=0;
    })
    answer = answer.map(x=>{
      if(x==Infinity){
        x=-1
      }
      return x
    })
    return answer;
}