function solution(X, Y) {
    let answer = "";
    X = X.split('');
    Y = Y.split('');
    for(let i = 0; i < 10; i++) {
        let x_cnt = X.filter(x => Number(x) === i).length;
        let y_cnt = Y.filter(y => Number(y) === i).length;
        answer += i.toString().repeat(Math.min(x_cnt, y_cnt));
    }    
    
    if(answer === "") { 
        return "-1";
    }
    else if(answer.split('').filter(x => x === "0").length === answer.length) { 
        return "0";
    }
    else {
        return answer.split('').sort().reverse().join('');
    }
    
}

//다른풀이
function solution(X,Y){
    let countX = new Array(10).fill(0);
    const xArr = X.split("");
    
    xArr.forEach((item) => {
        countX[item]++;
    })
    
    let countY = new Array(10).fill(0);
    const yArr = Y.split("");
    
    yArr.forEach((item) => {
        countY[item]++;
    })
    
    let ans = [];
    
    countX.forEach((item, index) => {
        if(item !== 0 && countY[index] !== 0){
            const min = Math.min(item, countY[index]);
            
            ans.push(String(index).repeat(min));
        }
    })
    
    if(ans.length === 0){
        return "-1";
    }
    
    if(Number(ans.join("")) === 0){
        return "0";
    }
    
    return ans.reverse().join("");
}