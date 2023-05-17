function solution(n) {
    let str = String(n);
    let arr = str.split("");
    let arr2 = arr.map((el) => {
        return Number(el);
    })
    let arr3 = arr2.sort((a,b) => {return b-a});
    let str2 = arr3.join("");
    return Number(str2);
}

//다른풀이
function solution(n) {
    const newN = n + "";
    const newArr = newN
      .split("")
      .sort()
      .reverse()
      .join("");
  
    return +newArr;
  }