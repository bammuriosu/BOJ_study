const pickMax = (arr) => {
    let maxVal = 0
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>maxVal) maxVal = arr[i]
    }
    return maxVal
}

function solution(numbers) {
    // 배열 numbers 원소중 
    // 두개를 곱해 만들수있는 
    // 최대값을 리턴
    // 최대원소 뽑고 삭제
    // 다시 최대값 구하기
    // 두개 곱해서 리턴
    let arr2 = numbers.slice();
    let num1 = pickMax(arr2)
    arr2.splice(arr2.indexOf(num1),1);
    let num2 = pickMax(arr2)
    return num1 * num2
}

//다른풀이

function solution(numbers) {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}
