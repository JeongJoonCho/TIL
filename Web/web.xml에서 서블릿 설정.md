```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd" id="WebApp_ID" version="4.0">
  <display-name>MVCBasic</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
  </welcome-file-list>
  <servlet>  //--> 서블릿의 이름과 클래스를 지정
  	<servlet-name>controller</servlet-name>
  	<servlet-class>mc.sn.controller.MemberController</servlet-class>
  </servlet>
  <servlet-mapping>	//--> controller 서블릿의 url을 지정해서 지정한 url을 쓰면 서블릿을 					//		호출할 수 있게
  	<servlet-name>controller</servlet-name>
  	<url-pattern>/CmdController</url-pattern>
  </servlet-mapping>
</web-app>
```

