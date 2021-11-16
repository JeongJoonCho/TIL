## 파일 읽기

```python
# 파일 읽기
def testFile():
    file = open('./data/Abc1115.csv','r')
    lines = file.readlines()
    file.close()

    length = len(lines)
    print(length)
    
	# txt파일의 라인들을 하나씩 출력
    for line in lines:
        print(line)     
        pass

    # line을 리스트에 넣은 후 리스트를 한번에 출력
    list = []
    for line in lines:
        list.append(line)
        pass
    print(list)
    pass
```



## 슬라이싱

```python
def testSlice():
    file = open('./data/Abc1115.csv', 'r')
    lines = file.readlines()
    file.close()
    temp = []
    for line in lines[:5]:
        #temp.append(line[:len(line)-1])
        temp.append(line[:- 1])			# 파이썬은 배열에서 맨뒤의 인덱스가 -1부터 											앞으로 나온다.
        #print(len(line))
        pass
    print(temp)
    for item in temp:
        print(item)
    pass
```

## 스플릿

```python
# 파일의 한 줄을 , 로 분리하여 리스트로 만들고 해당 리스트를
# 다시 리스트에 element로 저장하여 출력하는 코드 작성
def testSplit():
    file = open('./data/Abc1115.csv', 'r')
    lines = file.readlines()
    file.close()
    mlist = []
    for line in lines:
        temp = line[:-1].split(',')
        mlist.append(temp)
        pass
    # 앞에서 5개까지 뽑고 거기서 2번째꺼
    print(mlist[:5][1])
    # 1~5까지의 email을 출력하시오
    for email in mlist[:5]:
        print(email[1])
        pass

    for item in mlist:
       # print(item)
        pass

    pass
```



## enumerate 함수

```python
def testFor():
    numbers = '12345'
    for idx, val in enumerate(numbers):		# enumerate가 알아서 인덱스와 각 인덱												스에 맞는 값들을 정해줌
        print("{0} : {1}".format(idx, val))
    pass
```

