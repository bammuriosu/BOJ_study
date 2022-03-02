#BOJ_1152
# 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

words = input()
count = 0
N = len(words)

for i in range(N):
    if i == 0 and words[0] != ' ':
        count += 1
    elif words[i - 1] == ' ':
        count += 1
    else:
        count += 0

print(count)


'''
word = input().split() # 띄어쓰기 된 글자마다 글자를 잘라줌
# word = [the,curious,case,of,ben,button]
print(len(word)) #len(word) = 6
'''

