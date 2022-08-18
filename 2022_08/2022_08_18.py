#1 1 2 2 2 8
number = list(map(int, input().split()))
answer = [1,1,2,2,2,8]
chai = [0,0,0,0,0,0]
for i in range(6):
    chai[i] = answer[i] - number[i]

for j in range(len(chai)):
    print(j,end = " ")
