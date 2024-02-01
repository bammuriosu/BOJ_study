function solution(ingredient) {
    // 1 2 3 1
    // 2 1 2 3 1
    // 문자열로 바꿔서 앞의 1231없애고 count++
    let count = 0; 
    let str = ingredient.join('')
    while( str.includes('1231') !== false){
        str = str.replace('1231','');
        count++;
    }
    return count
}