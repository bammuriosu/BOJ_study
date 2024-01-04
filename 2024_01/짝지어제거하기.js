function solution(s)
{
    //빈배열 arr에 s를 하나씩 넣되, arr맨뒤요소===arr뒤에서2등요소면 두요소를 빼준다
    let arr = [];
    for(let i = 0; i<s.length; i++){
        arr.push(s[i]); 
        if(arr[arr.length-1]===arr[arr.length-2]){
            arr.pop();
            arr.pop();
        }
        
    }
    //arr에 남은게 있으면 0리턴
    return arr.length === 0 ? 1 : 0;
}

//다른풀이
const solution = (s) => {
    if (s.length % 2 != 0) return 0;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      const b = s.charAt(i);
      if (stack[stack.length - 1] === b) {
        stack.pop();
      } else {
        stack.push(b);
      }
    }
  
    return stack.length > 0 ? 0 : 1;
  };