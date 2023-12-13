function solution(myString) {
    return myString.split('x').map((el)=>el.length)
}


//다른풀이
const solution = (myString) => {
    const arr = myString.split('x');
    // console.log(arr)
    return arr.reduce((a,c)=>[...a,c.length],[]);
}