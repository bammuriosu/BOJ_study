#첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 위치한 행 번호와
#  열 번호를 빈칸을 사이에 두고 차례로 출력한다. 
# 최댓값이 두 개 이상인 경우 그 중 한 곳의 위치를 출력한다.
table = [list(map(int, input().split())) for _ in range(9)] 

max_num = 0
max_row, max_col = 0, 0 #행렬
for row in range(9): #9행까지행ㅡ돌 가로임
    for col in range(9): #9열까지 9여ㅕㅕㅕㅕ세로임
        if max_num <= table[row][col]: #최대값보다 new값이 크면 하나씩 up
            max_row = row + 1
            max_col = col + 1
            max_num = table[row][col]

print(max_num)
print(max_row, max_col) #출력
