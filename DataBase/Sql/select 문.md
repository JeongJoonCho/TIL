# 4장 , 6장 



## SELECT문

#### 테이블 전체를 select

```sql
select * from (tableName);
```

#### 조건문

1. 간단한 조건문

   ```sql
   SELECT * FROM userTBL WHERE userName = '김경호';
   ```

2.  관계 연산자

   ```sql
   SELECT userID, userName FROM userTBL 
   	WHERE birthYear >= 1970 AND height>=182;
   	--> 1970년 이후 출생이면서 신장이 182 이상인 사람
   SELECT userID, userName FROM userTBL 
   	WHERE birthYear >= 1970 OR height>=182;
   	--> 1970년 이후 출생했거나, 신장이 182 이상인 사람
   ```

3.  BETWEEN  AND , IN(), LIKE

   ```SQL
   ```

   