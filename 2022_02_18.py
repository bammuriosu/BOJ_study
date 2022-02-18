#BOJ_2577 
#세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

a = int(input())     #a,b,c를 입력받고 int()로 바꾼다.
b = int(input())
c = int(input())

result = list(str(a * b * c)) #정수 a*b*c를 한뒤 str()하고 list()한다
for i in range(10):
    print(result.count(str(i))) #count()를 이용해서 숫자가 몇번 쓰였는지 print한다


#BOJ_3052
#수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

arr = []      #빈 리스트 생성
for i in range(10): #1~10까지
    n = int(input()) #입력받은 값을 n변수에 넣고
    arr.append(n%42) #n%42의 나머지를 리스트에 append한다
arr = set(arr)   #중복값을 없앰으로서 서로다른값만 남긴다
print(len(arr))  #서로다른값의 갯수는 arr배열의 길이이다.
