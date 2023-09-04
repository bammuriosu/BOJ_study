function solution(list) {
    //마지막원소가 그전원소보다 크면 마지막 - 그전원소 을 추가
    //마지막원소가 그전원소보다 작으면 마지막*2를 추가하여 리턴
    let lastNum = list.length-1;
    return list[lastNum] > list[lastNum-1] ? [...list,list[lastNum] - list[lastNum-1]] : [...list,list[lastNum]*2]
}