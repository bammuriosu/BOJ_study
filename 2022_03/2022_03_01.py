#BOJ_1157
#알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

words = input().lower() #문제에서 대소문자 구별x > 소문자로 통일
li = list(set(words)) #set함수로 중복을 제거해서 리스트에 넣음
countList = [] #카운트용 리스트 정의

# i = [m, i, s, s, i, s, i, p, i]
# li = [m, i, s, p]
for i in li:
    #i 리스트 원소가 words에 몇개있는지 카운트
    cnt = words.count(i) #count함수로 cnt변수에 i가 몇개있는지 저장
    countList.append(cnt) #countList = [1,4,3,1]

#가장 많이 사용된 알파벳이 여러개 존재하는 경우에는 ?를 출력
if countList.count(max(countList)) >= 2: # 만약 [2,2]처럼 카운트가 같다면 ?
    print("?")
else:
    # li 리스트중 countList에서 가장 큰 인덱스 반환, 대문자로 출력
    # countList = [1,4,3,1]중 4가 있는 인덱스인 2를 li[2]에 넣어서 i를 대문자로 출력
    print(li[countList.index(max(countList))].upper())
    


