
#BOJ_15596
#정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.
def solve(a):  #a란 배열을 받았을때
    ans = 0    #답변수 초기화
    n = len(a) #n은 a의 개수
    for i in range(n): #a에서
        ans = ans + a[i]   #답은 a배열값의 합
    return ans

#BOJ_4673
def d(n):
    num_list = list(map(int, str(n)))
    sum = 0
    n = len(num_list)
    for i in n:
        sum = sum + num_list[i] 
    return sum

a = 75
print(d(a))
