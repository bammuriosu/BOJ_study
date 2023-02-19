function solution(my_string) {
    //모두 소문자로 바꾸고
    //알파벳순으로 정렬
    let new_string = my_string.toLowerCase()
    new_string = [...new_string].sort()
    return new_string.join('')
}