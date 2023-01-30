//예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return
function solution(angle) {
    // 90보다 작은가?
    // 90인가?
    // 90보다크고 180보다 작은가?
    // 180인가?
    let result = angle < 90 ? 1
    : angle === 90 ? 2
    : angle >90 && angle < 180 ? 3
    : angle === 180 ? 4
    : null
    return result
}

// 추천풀이

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}