## 현재 시간 코드

```java
String pattern = "yyyy/mm/dd HH:mm:ss";
	SimpleDateFormat sdf = new SimpleDateFormat(pattern);
	String now = sdf.format(new Date());
	System.out.println(now);
```

