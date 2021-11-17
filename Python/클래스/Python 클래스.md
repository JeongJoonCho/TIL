# Python 클래스

## 객체와 클래스

- 클래스명 **첫글자는 항상 대문자로!!**

```python
class Car():						# Car 클래스의 정의 시작
    def __init__(self):				
        self.color = 0xFF0000		# 바디의 색
        self.wheel_size = 16		# 바퀴의 크기		--> Car 클래스 안에 차의
        self.displacement = 2000	# 엔진 배기량			색, 바퀴 크기, 배기량
        												#	을 나타내는 변수 정의
    def forward(self):
        pass
    def backward(self):
        pass						# Car 클래스 안에 전진, 후진 등의 함수 정의
    def turn_left(self):
        pass
    def turn_right(self):
        pass
    pass

```



```python
if __name__ = '__main__':
    my_car = Car()			#-> 앞에서 정의한 Car 클래스의 객체 my_car를 생성
    
    print('0x{:02X}'.format(my_car.color))
    print(my_car.wheel_size)
    print(my_car.displacement)		#-> my_car의 정보를 출력
    
    my_car.forward()
    my_car.backward()
    my_car.turn_left()
    my_car.turn_right()				#-> my_car의 메소드를 호출
```

