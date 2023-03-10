function solution(numlist, n) {
    //numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return
    return numlist.sort((a,b) => {
        const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
        // 거리가 같다면 더 큰 수를 우선 배치
        if(aGab === bGab) return b-a
        // 다르다면 거리별 오름차순 정렬
        return aGab-bGab
    })
}