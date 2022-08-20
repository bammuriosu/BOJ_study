#첫째줄에 맵의 세로크기 n 가로크기 m을 공백으로 구분하여 입력한다.
n, m = map(int, input().split())

#방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화
d = [[0] * m for _ in range(n)]
#현재 캐릭터의 X좌표, Y좌표, 방향을 입력받기
x,y,direction = map(int,input().split())
d[x][y] = 1 #현재 좌표 방문 처리

#