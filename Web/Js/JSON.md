## AJAX

AJAX를 하기 위해선 스프링 프레임워크 4.1.1로 바꿔야함 ->  pom.xml에서 변경



## JSON

JSON을 하기위해선

#### pom.xml에서

```xml
<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.5.4</version>
		</dependency>
```

추가 해야함

#### VO파일도

```java
@Override
	public String toString() {
		String info = id+", "+ pwd+", "+ name+", "+ email;
		return info;
	}
```

식으로 오버라이드 해야함





## @RestController

--> 페이지 이동 없음