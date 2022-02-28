T = int(input()) #케이스 개수
for i in range(T): #케이스 개수만큼 반복
    R, S = input().split() # 반복횟수, 문자열 입력받음
    text = '' #결과문자열 초기화
    for i in S: #문자열 하나하나 요소에 대하여
        text += int(R) * i #결과문자열에 반복횟수*문자하나 반복해서 넣음
    print(text) #결과문자열 프린트