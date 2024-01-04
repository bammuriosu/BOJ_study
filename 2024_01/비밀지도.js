function solution(n, arr1, arr2) {
    //arr1, arr2를 이진수 변환하고
    //arr3에 arr1과 arr2를 or연산한값을 저장한다
    //arr3에 있는 1을 # 0을 " "로 변환후 리턴
    let arr3 = [];
    //2진수로 바꾼수의 길이가 n이 되도록 앞에 "0"을 넣어준다
    let newArr1 = arr1.map((el) => el.toString(2).length===n ? el.toString(2) : el.toString(2).padStart(n,"0"));
    let newArr2 = arr2.map((el) => el.toString(2).length===n ? el.toString(2) : el.toString(2).padStart(n,"0"));
    
    const OR = (num1,num2) => {
        if(num1 === "1" || num2 === "1") return "#";
        else return " "
    }
    //OR연산한 값을 arr3에 하나씩 넣어주고
    for(let i = 0; i<arr1.length; i++){
        arr3[i] = "";
        for(let j = 0; j<n; j++){
            arr3[i] += OR(newArr1[i][j] ,newArr2[i][j])
            console.log(arr3)
        }
    }
    
    return arr3
}

//다른풀이
function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    //manually turning decimals to binaries cos i can!
    for (let i=0; i<n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j=0; j<n; j++){
            s = (num1%2 + num2%2) ? '#'+s : ' '+s;
            num1 = Math.floor(num1/2);
            num2 = Math.floor(num2/2);
        }
        answer.push(s);
    }    
    return answer;
}