# BOJ_5622
# 전화를 걸고 싶은 번호가 있다면, 숫자를 하나를 누른 다음에 금속 핀이 있는 곳 까지 시계방향으로 돌려야 한다. 숫자를 하나 누르면 다이얼이 처음 위치로 돌아가고, 다음 숫자를 누르려면 다이얼을 처음 위치에서 다시 돌려야 한다.

word = input()
time = 0
for i in word:
    if i in ['A','B','C']:
        time += 3
    if i in ['D','E','F']:
        time += 4
    if i in ['G','H','I']:
        time += 5
    if i in ['J','K','L']:
        time += 6
    if i in ['M','N','O']:
        time += 7
    if i in ['P','Q','R','S']:
        time += 8
    if i in ['T','U','V']:
        time += 9
    if i in ['W','X','Y','Z']:
        time += 10
print(time)

