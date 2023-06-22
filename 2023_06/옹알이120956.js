function solution(babbling) {
    const spoke = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    for (const speak of babbling) {
        let modifiedSpeak = speak;

        for (const element of spoke) {
            modifiedSpeak = modifiedSpeak.split(element).join(" ");
        }

        modifiedSpeak = modifiedSpeak.replace(/\s+/g, "");

        if (modifiedSpeak === "") {
            answer++;
        }
    }

    return answer;
}
