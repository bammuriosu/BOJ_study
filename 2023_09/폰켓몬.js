function solution(nums) {
    // 우선 nums/2 숫자를 maxNum으로 저장
    // 중복제거한 숫자가 maxNum보다 크면 maxNum을 리턴
    // 중복제거한 숫자가 maxNum보다 작으면 그 배열 length를 리턴
    let maxNum = nums.length/2;
    let set = new Set(nums) 
    return [...set].length > maxNum ? maxNum : [...set].length
}