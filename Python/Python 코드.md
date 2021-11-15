### 함수

##### **함수 선언은 def로 시작**

```python
def test():
    print("welcome!")
    pass


def test1(a,b):
    print(a+b)
    pass
```

- pass는 해당 함수가 끝났음을 나타냄

##### main.py에서 불러오기

```python
from classOne import step1

step1.test()
step1.test1(1,2)
```

- 함수는 위아래로 2줄씩 띄워야 함

##### 반복문

```python
def controlStatement():
    # 1~10까지 반복문 작성
    for i in range(1,11): #--> range 는 리스트로써 ()안의 숫자에 따라서 정해짐
        print(i, end=" ") #--> end=" "는 가로로 정렬해서 출력, 없으면 하나씩 세로로
   		pass
	print()
    for letter in 'abcde':
        print(letter, end="\t")
        pass
    print()
    for i in range(1,11):
        if(i%2==0):
            print(i, end="\t")
            pass
        pass

    pass
```



##### 21년 8월 달력

```python
def viewCalendar():
    # 8월 달력을 출력하는 코드 작성
    print("\t\t\t8월")
    print("일\t월\t화\t수\t목\t금\t토")
    for i in range(1,32):
        print(i, end="\t")
        #if i%7==0:
        if i==7 or i==14 or i==21 or i==28:
            print()
        pass
    pass
```



##### 윤년 체크 

```python
def isLeapYear():
    flag = False # 윤년이 아니다.
    year = 2021
    condition1 = year % 400 == 0
    condition2 = year % 4 == 0 and year % 100 != 0
    if condition1 or condition2:
        flag = True # 윤년이다.
        pass
    return flag
```



##### format()

```python
>>> dic = {'애플': 'www.apple.com',
          '파이썬': 'www.python.org',
          '마이크로소프트': 'www.microsoft.com'}
>>> for k, v in dic.items():			#딕셔너리는 key & value를 갖는다.
    	print("{0} : {1}".format(k,v)) 	#format(k,v)는 첫번째{}안에 k를 넣고,
        								#두번째{}안에 v를 넣는다.
        

        
파이썬 : www.python.org
애플 : www.apple.com
마이크로소프트 : www.microsoft.com
```



##### 랜덤 숫자

```python
import random

def makeRandomNumber():
    rnd = random.random() # 0.0 <= rnd < 1.0

    for _ in range(10): # i를 안쓰고 _를 쓴 이유는 i를 사용하지 않기에 _를 쓴다
        				# 순수하게 반복할 때 사용
        rnd2 = random.randrange(1, 3) # 1~2까지만 사용(일반적인 언어에서 이렇게 씀)
        #random.randint(1,3)은 1~3까지 다 사용(파이썬에서 이렇게 쓸수도 있음)
        print(rnd2)

    pass
```

