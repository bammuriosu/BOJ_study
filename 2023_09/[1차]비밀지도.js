function solution(n, arr1, arr2) {
    let Arr1 = [];
    let Arr2 = [];
    let Arr3 = [];
    let Arr4 = [];
    let sumArr = [];
    let answer = [];
    let txt = '';
    for(let i = 0; i<n; i++){
        Arr1.push(arr1[i].toString(2));
        Arr2.push(arr2[i].toString(2));
        if(Arr1[i].length < n) {
            Arr3.push('0'.repeat(n-Arr1[i].length) + Arr1[i]);
        }else{
            Arr3.push(Arr1[i]);
        }
        if(Arr2[i].length < n) {
            Arr4.push('0'.repeat(n-Arr2[i].length) + Arr2[i]);
        }else{
            Arr4.push(Arr2[i]);
        }
        for(let j = 0; j<n; j++){
            if(Arr3[i][j] === Arr4[i][j]){
                sumArr.push(Arr3[i][j])
            }
            else{
                sumArr.push('1');
            }
        }
    }
    const num1 = sumArr.length;
    for(let k = 0; k<num1; k++){
        if(sumArr.shift()==='1'){
            txt+='#'
        }else{
            txt+=' '
        }
        if(txt.length === n){
            answer.push(txt);
            txt = '';
        }
    }
    return answer
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
