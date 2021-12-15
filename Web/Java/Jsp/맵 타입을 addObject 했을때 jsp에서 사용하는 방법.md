## 맵 타입을 addObject 했을때 jsp에서 사용하는 방법



```jsp
${map을 호출하는 키값[map에서의 키값] }

ex)
${Map[key]}

```



## forEach 안에서도 addObject한 맵타입을 사용할 수 있다

```jsp
<c:forEach var="coach" items="${coachesList}">

${reCount[coach.coach] }
    
</c:forEach>
<!-- forEach 안에서 맵을 호출해서 그 안에 키값을 forEach에서의 값으로 표현할 수 있다.-->
```

