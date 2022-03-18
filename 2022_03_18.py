#BOJ_2869
A, B, V = map(int, input().split())
day = 0
total = 0
while V > total:
    total += A 
    day += 1
    total -= B

print(day)