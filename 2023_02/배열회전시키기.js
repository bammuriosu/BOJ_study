function solution(numbers, direction) {
    // 정수담긴배열 numbers
    // 문자열 direction
    // 한칸씩 direction방향으로 회전시킨 배열을 리턴
    // 마지막꺼 pop하고 
    let copyedArray = numbers.slice();
    let k = numbers[0]
     if(direction === "right")  {
        k = copyedArray.pop()
        copyedArray.unshift(k)
     }else if(direction ==="left"){
        
            k = copyedArray.shift()
            copyedArray.push(k)
        }
    return copyedArray
    
}

// 다른풀이

function solution(numbers, direction) {
  return direction === "right" // 엔터치고 ?할수있음
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}
