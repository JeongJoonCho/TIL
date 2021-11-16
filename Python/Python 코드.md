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

##### 랜덤 숫자 리스트

```python
import random
def makeRandomNumber():
    # 1~45까지 수 중 랜덤으로 6개의 수를 생성해서 리스트에 삽입한 후 출력
    # 하는 코드 작성
    list = []
    for _ in range(6):
        rnd = random.randint(1,45)
        list.append(rnd)
        #print(rnd,end=" ")
    print(list)
    print(sorted(list))     # list안의 내용을 sort한 다음에 출력
    print(list)             # 원래의 list가 유지됨
    print(list.sort())      # list를 sort함 -> 리턴하지 않기에 출력은 되지 않음
    print(list)             # 위에서 리스트를 sort한게 유지됨

    pass

def getLottoNumber():
    # 위의 함수를 --> 중복처리 하시오
    mlist = []
    while True:
        rnd = random.randint(1,45)
        if rnd not in mlist:
            mlist.append(rnd)
            pass
        if len(mlist)==6:
            break
    print(sorted(mlist))

    pass
```

##### 달력

```python
import calendar
def getMonthData():
    date, lastDay = calendar.monthrange(2021,11)
    print (date, lastDay)
    pass

def viewCalendar1(year,month):
    # 만년 달력을 출력하는 코드 작성
    space, lastDay = calendar.monthrange(year,month)
    print("\t\t{0}년 {1}월\t\t".format(year,month))
    print("일\t월\t화\t수\t목\t금\t토")
    for _ in range(space+1):
        print(" ",end="\t")
    for i in range(1,lastDay+1):
        print(i, end = "\t")
        if (i+space+1)%7==0:
            print()
        pass

    
    #####################################################################
    ############main.py###################
from classTwo import step1

year = int(input('please input year>>>'))
month = int(input('please input month>>>'))
step1.viewCalendar1(year,month)
```



##### 딕셔너리

```python
def testDict():
    mDict = {'one':10 , 'two':2}
    print(mDict)
    mDict['three'] = 3
    print(mDict)
    mDict['one'] = 1
    print(mDict)
    del mDict['three']
    print(mDict)
    print(mDict['one'])
    pass
```

