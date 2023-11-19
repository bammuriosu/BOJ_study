function solution(s) {
    let sArr = [...s];
    let result = [];
    let newIndex = 0;
    for(let i = 0; i<sArr.length; i++){
        if(sArr.indexOf(sArr[i])===i){
            result.push(-1);

        }else{
            result.push(i-sArr.indexOf(sArr[i]));
        }
    }
    return result
}

//다른풀이
function solution(s) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        if(!stack.includes(s[i])){
            ans.push(-1);
            stack.push(s[i]);
            continue;
        }
        
        if(stack.includes(s[i])){
            ans.push(stack.length - stack.lastIndexOf(s[i]));
            stack.push(s[i]);
            continue;
        }
    }
    
    return ans;
}