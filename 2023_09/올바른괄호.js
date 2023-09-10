```answer
"()()"	true
"(())()"	true
")()("	false
"(()("	false
```
function solution(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);    // (면 넣는다
        } else if (s[i] === ")" && stack[stack.length - 1] === "(") {     // s[i]가 )고 사용자배열 마지막이 (면  (를 날린다.
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

//다른풀이
function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}
