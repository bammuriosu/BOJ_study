#영수증
sum = int(input())
n = int(input())
count = 0
object = [0] * n
many = [0] * n
for i in range(n):
    object[i],many[i] = map(int, input().split())
    count += object[i] * many[i]

if count == sum:
    print("Yes")
else:
    print("No")

