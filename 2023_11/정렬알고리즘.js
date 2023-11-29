//sort
// 배열만 가능함. 객체는 배열로 변환후 사용
// 문자 순서로 정렬되므로 [ 1, 14, 2, 22, 3]이 됨
const array = [2, 3, 1, 14, 22];
array.sort();
// 오름 또는 내림차순으로 정렬하고 싶다면, 인자를 사용해야 함
array.sort((a, b) => a - b); // 오름차순
array.sort((a, b) => b - a); // 내림차순

// 객체 정렬 시 배열 형태로 변환하면서 호출해야 함
const obj = { x: 5, y: 2, z: 3 };
let temp = Object.entries(obj).sort(([, a], [, b]) => a - b);
log(Object.fromEntries(temp));
