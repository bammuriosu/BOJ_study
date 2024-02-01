function solution(ingredient) {
    // 1 2 3 1
    // 2 1 2 3 1
    // 문자열로 바꿔서 앞의 1231없애고 count++
    let count = 0; 
    let str = ingredient.join('')
    while( str.includes('1231') !== false){
        str = str.replace('1231','');
        count++;
    }
    return count
}

//다른풀이
function solution(ingredient) {
    let answer = 0;
    const stack = [];
  
    for (let i of ingredient) {
      stack.push(i);
  
      if (stack.slice(-4).join('') == '1231') {
        stack.splice(-4);
        answer++;
      }
    }
    return answer;
  }