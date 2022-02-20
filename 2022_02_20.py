#BOJ_8958 
#"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

n = int(input()) #결과를 몇줄받을지 입력받음
for i in range(n):    #받은 줄만큼 반복
    ox = input()       #oxooxoxox 한줄을 입력받음
    oxList = list(ox)  #입력받은 한줄을 list화함
    sum = 0            #점수값 초기화
    count = 1          #o의 카운트값은 1
    for i in oxList:   
        if i == 'O':      #o가 있으면
            sum += count  #점수값에 카운트값을 더하고
            count += 1    #카운트값에 가중치 적용
        else:
            count = 1     #값이 o가 아니면 count값 초기화
    print(sum)            #점수값 print


