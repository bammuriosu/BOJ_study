function solution(gems) {
    var answer = [];
    const db = new Set(gems);
    if (db.size === 1) return [1, 1]

    gems.forEach((gem, idx) => {
        const visit = {};
        [...db].forEach(el => visit[el] = 1);
        visit[gem] = 0;

        var targetLen = db.size - 1, nextIdx = idx;
        for (; nextIdx < gems.length; nextIdx++) {
            const target = gems[nextIdx];
            if (visit[target]) {
                targetLen--;
                if (targetLen === 0) break;

                visit[target] = 0;
            }
        }
        if (!targetLen) answer.push([idx + 1, nextIdx + 1]);
    })
    return answer.reduce((ac, v) =>
        ac[1] - ac[0] > v[1] - v[0] ? v : ac, [1, gems.length]);
}