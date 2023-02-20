function solution(array) {
    //정수배열 array가 주어질때
    //7이 총 몇개있는지 리턴
    // map, includes
    let result = 0;
    let str = "";
    let arr2 = array.map((el) => {
        str = str + String(el);
    })
    let arr3 = [...str]
    let arr4 = arr3.map((el) =>{
        if(String(el).includes("7")) result++;
    })
    return result
}

//다른풀이
function solution(array) {
    return(array.join().split("").filter((el)=>{return el=="7"}).length)
}
