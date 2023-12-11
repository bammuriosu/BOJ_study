function solution(food) {
    let str = "";
    food.shift();
    for(let i = 0; i<food.length; i++){
        if(food[i] % 2 === 1){
            food[i] = food[i] - 1; 
        }
        for(let j = 0; j<food[i] / 2; j++){
            str += i+1
        }
    }
    
    return str + 0 + str.split('').reverse().join('');
}


//다른풀이

function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}