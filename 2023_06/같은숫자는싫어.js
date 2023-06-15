function solution(arr){
    // 0부터 9까지로 이루어져있다.
    // 이때 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 모두 제거
    // 단, 배열원소 순서를 유지해야함
    // blankArr = []해놓고 
    // blankArr에 원소가 없으면 추가
    // blankArr 리턴
    let blankArr = [];
    arr.map((el,i) => {
        if(!blankArr.includes(arr[i]) || el !== arr[i-1]) blankArr.push(el);
    });
    return blankArr
}

//다른풀이
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
