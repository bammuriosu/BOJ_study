#상하좌우
#첫째줄에 공간의 크기를 나타내는 N이 주어진다.
#둘째줄에 여행가 A가 이동할 계획서 내용이 주어진다.
#아웃풋은 여행가가 도착할 지점을 공백으로 구분하여 출력한다.
n = int(input())
x, y = 1, 1
plans = input().split()

#L,R,U,D에 따른 이동방향
dx = [0,0,-1,1]
dy = [-1,1,0,0]
move_types = ['L','R','U','D']

#이동계획을 하나씩 확인
for plan in plans:
    #이동 후 좌표 구하기
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    #공간을 벗어나는 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
    #이동수행
    x, y = nx, ny

print(x,y) 