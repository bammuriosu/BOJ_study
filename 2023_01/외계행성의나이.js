// age 숫자를 알파벳으로 치환
// 해서 리턴
// 배열로 바꾸고 알파벳 치환
function solution(age) {
    // age 숫자를 알파벳으로 치환
    // 해서 리턴
    // 배열로 바꾸고 알파벳 치환
    let arr = [...String(age)];
    let arr2 = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === '0') arr[i] = 'a';
        if(arr[i] === '1') arr[i] = 'b';
        if(arr[i] === '2') arr[i] = 'c';
        if(arr[i] === '3') arr[i] = 'd';
        if(arr[i] === '4') arr[i] = 'e';
        if(arr[i] === '5') arr[i] = 'f';
        if(arr[i] === '6') arr[i] = 'g';
        if(arr[i] === '7') arr[i] = 'h';
        if(arr[i] === '8') arr[i] = 'i';
        if(arr[i] === '9') arr[i] = 'j';
    }
    return arr.join("")

}

//다른풀이

function solution(age) {
  return age
    .toString()
    .split("")
    .map((v) => "abcdefghij"[v])
    .join("");
}