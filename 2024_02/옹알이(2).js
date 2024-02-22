function solution(babbling) {
    //배열 요소 하나하나가 four배열의 조합으로 만들수 있는거냐
    let four = ["aya","ye","woo","ma"];
    let set = new Set(); // 세트 : 배열과 비슷한 자료구조, 데이터를 순서없이 저장, 중복 허용안함
    numOfCase(four,'')
    function numOfCase(arr,str) {
        if(arr.length) {
            for(let i = 0; i <arr.length; i++) {
                let copy = [...arr];
                copy.splice(i,1); //i번째에 하나 넣음
                numOfCase(copy,str + arr[i]); 
            }
        }
        if(str.length > 0) set.add(str)
    }
    console.log(Array.from(set))
    let count = 0;
    for(let el of babbling){
        if(Array.from(set).indexOf(el)>=0) count++
    }
    
    return count;
}

//다른풀이
function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < can.length; j++){
            if(babble.includes(can[j].repeat(2))){
                break;
            }
            
            babble = babble.split(can[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            count += 1;
        }
    }
    
    return count;
}