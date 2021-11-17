#  XML

프로젝트를 만들때 사용되는 xml은 pom.xml이다.
--> 프로젝트를 정의하고 pom.xml이 jar 파일들을 생성,관리(dependency)

--> 코딩을위한, 라이브러리들을 위한 준비작업



프로젝트 시작시

제일 먼저 읽어 드리는 것은 web.xml이다.

- 서블릿
  --> servlet-context.xml을 실행
- 리스너
  -->  스프링 프레임워크 이외의 것들은 context-param으로 action-mybatis.xml을 실행 (sql관련 프레임워크) --> member.xml, modelConfig.xml 실행
  --> action-mybatis.xml에서 jdbc.properties를 실행
  --> action-mybatis.xml에서 Session들을 실행

위의 작업들로 xml파일들을 대부분 실행



# JSP

- 이전에는 wepapp에 파일을 저장
- 이제부터는 WEB-INF에 파일을저장
- 이유는 보안상의 문제로 WEB-INF에 저장하면 외부에서 접속 불가
- 컨트롤러를 통해서 접속





# Controller

redirect:/member/loginForm.do

--> redirect는 또다른 컨트롤러를 호출할 때 사용한다.

redirect 없이 url만 적으면 해당 url로 이동한다.





# 한글화

jdbc.properties를 변경

```properties
jdbc.driverClassName=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/kdt13?useUnicode=true&characterEncoding=utf8
jdbc.username=root
jdbc.password=1234
```

