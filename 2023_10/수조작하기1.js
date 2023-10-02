function solution(n, control) {
    let control_arr = control.split('')
    for(let el of control_arr){
        if(el === "w"){
            n++;
        }else if(el === "s"){
            n--;
        }else if(el === "d"){
            n = n + 10;
        }else if(el === "a"){
            n = n - 10;
        }
    }
    return n;
}

//다른풀이
const operations = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };
  
  function solution(n, control) {
    return [...control].reduce((prev, op) => operations[op](prev), n);
  }