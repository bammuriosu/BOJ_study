function solution(n, works) {
    //야근피로도 : 남은일의 작업량을 제곱하여 더한값
    //배열을 최대한 평탄하게 해라
    //가장 큰 요소에서 1빼고 [3,3,3]
    //가장 큰 요소에서 1빼고 [2,3,3]
    //이걸 n이 0될때까지 && 최대값이 0보다 클때까지
    while(n>0 && Math.max(...works)>0){
        n--;
        //Math.max로 뽑은 최대값의 indexOf를 추출
        let maxIndex = works.indexOf(Math.max(...works));
        //maxIndex요소의 값을 -1한값으로 splice
        works.splice(maxIndex,1,works[maxIndex]-1);

    }
    return works.reduce((acc,cur) => acc + cur*cur,0)
}

//다른풀이
function solution(n, works) {
    works.sort((a, b) => b - a);
    let i = 0;
    while (n > 0) {
        if (i < works.length - 1 && works[i] < works[i + 1]) {
            i++;
        }
        if (works[i] === 0) {
            break;
        }
        works[i]--;
        n--;
        if (i > 0 && works[i] < works[i - 1]) {
            i--;
        }
    }
    return works.reduce((acc, cur) => acc + cur * cur, 0);
}