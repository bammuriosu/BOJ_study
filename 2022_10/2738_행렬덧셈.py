#첫째 줄에 행렬의 크기 N 과 M이 주어진다. 
# 둘째 줄부터 N개의 줄에 행렬 A의 원소 M개가 차례대로 주어진다. 
#이어서 N개의 줄에 행렬 B의 원소 M개가 차례대로 주어진다.
# N과 M은 100보다 작거나 같고, 행렬의 원소는 절댓값이 100보다 작거나 같은 정수이다.

N, M = map(int, input().split()) 
a = [list(map(int, input().split())) for _ in range(N)] #행렬a 입력받기
for i in range(N) :
    b = list(map(int, input().split())) #행렬b 입력받기
    for j in range(M):
        print(a[i][j]+b[j], end=' ') #합치고 스페이스바
    print()# 프린트