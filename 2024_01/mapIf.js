function solution(members) {

    let mentions = new Array(members.length).fill(0);
    for(let el of arr){
        if(el[0]==="MESSAGE"){
            if(el[2].includes("ALL")){
                mentions.map((i) => i+1);      //이줄은 새로운 배열을 반환하지만, 그 배열은 mentions에 재할당되고있지 않다
            }  
        }
    }
    return mentions
}