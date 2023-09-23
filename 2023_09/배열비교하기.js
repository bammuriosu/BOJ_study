function solution(arr1, arr2) {
    if(arr1.length > arr2.length){
        return 1
    }else if(arr1.length < arr2.length){
        return -1
    }else if(arr1.reduce((acc,val) => acc+val) > arr2.reduce((acc,val) => acc+val)){
        return 1
    }else if(arr1.reduce((acc,val) => acc+val) < arr2.reduce((acc,val) => acc+val)){
        return -1
    }else{
        return 0
    }
}

//다른풀이
const solution = (arr1, arr2) => {
    return arr1.length !== arr2.length ? compare(arr1.length, arr2.length) : compare(arr1, arr2, "reduce");
};

const compare = (a, b, option) => {
    if (option === "reduce") {
        a = a.reduce((acc, cur) => acc + cur);
        b = b.reduce((acc, cur) => acc + cur);
    }
    return a > b ? 1 : a < b ? -1 : 0;
};