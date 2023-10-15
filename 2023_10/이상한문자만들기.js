function solution(s) {
    let sArr = s.split(' ')
    let newArr = []
    for(let i = 0; i<sArr.length; i++){
        for(let j = 0; j<sArr[i].length; j++){
            console.log(j)
            if(j%2 === 0) newArr.push(sArr[i][j].toUpperCase());
            else newArr.push(sArr[i][j].toLowerCase())
        }
        if(i===sArr.length - 1) break;
        newArr.push(' ')
    }
    return newArr.join('')
}


//다른풀이

function toWeirdCase(s){
    return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
  }