nums = []
n = int(input())
for i in range(5):
    nums.append(int(n % (10 ^ (i+1))))


print(nums)