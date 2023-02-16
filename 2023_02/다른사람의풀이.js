function solution(array) {
    //정수배열 array가 주어졌을 때
    //가장 큰 수와 그 수의 인덱스를 담은 
    //배열을 리턴
    let maxIndex = 0;
    let maxNum = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i]>maxNum) {
            maxNum = array[i];
            maxIndex = i;
        }
    }
    return [maxNum, maxIndex]
}

//다른풀이

function solution(array) {
    let max = Math.max(...array);
    return [max, array.indexOf(max)];
}