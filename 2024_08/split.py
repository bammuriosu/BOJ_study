s = "Life is too short"
s.split() # 아무것도 없으면 공백을 기준으로 문자열을 나눈다.
['Life', 'is', 'too', 'short']

b = "a:b:c:d"
b.split(':')
['a', 'b', 'c', 'd']

c = "a,b,c,d,e,f,g"
c.split(',', 3) # ,기준으로 3개만 나누고 리스트를 반환함
['a', 'b', 'c', 'defg']