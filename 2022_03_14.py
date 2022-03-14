#BOJ_1316
#그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
'''
N = int(input())
count = 0
isgroup = -1
def groupword(word):
    for i in len(word):
        if i == 0:
            isgroup = 1
        elif word[i-1] != word[i]:
            isgroup = isgroup * 0
        else:
            isgroup = 1

    return isgroup

for i in range(N):
    words = input()
    if groupword(words) != 0:
        count += 1
#실패
'''
n = int(input()) # 몇단어를 받을것인가?
count = n #우선 모든단어를 그룹단어로 놓는다

for i in range(n): #n번반복
    s = input() #단어입력받음, 이름은s
    for j in range(len(s)-1): #s-1만큼
        if s[j] == s[j+1]: #만약 현단어, 다음글자가 같다면 다음글자로
            pass 
        elif s[j] in s[j+1:]: #다음단어와 현단어가 다른데, 남은 단어안에 포함돼있다면 카운트 뺌
            count -= 1
            break #j반복문 나가고 다음단어받음

print(count)