#BOJ_1065

#어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

def hansu(num):    #num = 468
    num1 = num%10  #num1 = 8
    numcut1 = num//10 #numcut1 = 46
    num2 = numcut1%10 #num2 = 6
    num3 = numcut1//10 #num3 = 4  
    if num < 100:
        hansu_num = num
    elif num == 1000:
        hansu_num = -1
    elif num1 - num2 == num2 - num3:
        hansu_num = num
    else:
        hansu_num = -1
    return hansu_num


N = int(input())
result = []

for i in list(range(1,N+1)):
    if hansu(i) != -1:
        result.append(hansu(i))

print(len(result))