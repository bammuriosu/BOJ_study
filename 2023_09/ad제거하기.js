function solution(strArr) {
    return strArr.filter((el) => !el.includes("ad"))
}

//다른풀이

function solution(strArr) {

    strArr = strArr.filter((x)=>{
        return x.indexOf("ad") == -1
    })

    return strArr;
}