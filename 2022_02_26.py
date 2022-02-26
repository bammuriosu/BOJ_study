#BOJ_11720
#N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
N = int(input())
nums = str(input())
sum = 0
for i in range(N):
    sum += int(nums[i]) 
print(sum)

'''
#두번째 방법
n = input()
nums = input()
total = 0
for i in nums :
    total += int(i)  #nums[i]가 아니라 i를 더했어야 했다 
print(total)
'''