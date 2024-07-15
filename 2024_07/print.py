
print("Hello, world!")  # 문자열 출력
print(10)  # 숫자 출력
x = 3
y = 5
print("x = {}, y = {}".format(x, y))  # 변수 출력


# 여러 값 출력 시 값들 사이에 공백 들어감
# print 함수문이 끝나면 행이 넘어감
print("a","b","c")
print("d","f","g")
# a b c
# d f g

# print문 출력시 맨 뒤에 붙는 것
print("a","b","c", end="")
print("a","b","c")
print("a","b","c", end="\n")
# a b ca b c
# a b c

print("a","b","c", end=" ")
print("a","b","c")
# a b c a b c

print("a","b","c", end="$$")
print("a","b","c")
# a b c$$a b c

# print 출력시 문자 값 사이에 붙는 것
print("010","3701","1394", sep="")
# 01037011394

print("010","3701","1394", sep="-")
# 010-3701-1394

#https://velog.io/@kya754/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC-%EC%8B%A4%EA%B8%B0-%EB%8C%80%EB%B9%84-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC