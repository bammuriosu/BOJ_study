function solution(arr) {
    //가장 작은 인덱스를 찾아서 
    //그 인덱스값 하나를 없앤다
    if(arr.length === 1) return [-1];
    let minVal = arr[0];
    for(let el of arr){
        if(el<minVal){
            minVal = el;
        }
    }
    let minIndex = arr.findIndex(el => el === minVal);
    arr.splice(minIndex,1);
    return arr;
}

//다른풀이

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}