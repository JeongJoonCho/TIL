# STS와 Python 연결

### Python

- funcModule.py

```python
import requests
def sendURL():
    url = 'http://localhost/echo/reqInfo'
    data = {'id':'admin', 'pwd':'1234'}

    response = requests.post(url,data)
    print(response.text)

    pass
```

- main.py

```python
from classThree.funcModule import sendURL

sendURL()
```



### STS

- homeController.java

```java
@ResponseBody
	@RequestMapping(value="/reqInfo" ,method = RequestMethod.POST)
	public void removeMember(@RequestParam("id") String id,
									@RequestParam("pwd") String pwd, 
			           HttpServletRequest request, HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("utf-8");
		System.out.println(id+", "+pwd);
		//브라우저 이동 없이 직접 브라우저에 데이터를 전달하는 코드 작성
		response.getWriter().print("working");
	}
```



## 실행 결과

- 파이썬에서 실행시

```
working
```

- 출력됨
- 또한, STS에서도

```
admin, 1234
```

- 시스템 상에서 출력됨

