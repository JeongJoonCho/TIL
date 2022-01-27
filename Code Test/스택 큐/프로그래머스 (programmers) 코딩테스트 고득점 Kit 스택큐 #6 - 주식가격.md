### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42588




초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 유지된 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.





### 2. 제한사항

- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.

### 3. 입출력 예

| prices            | return    |
| :---------------- | :-------- |
| [498,501,470,489] | [2,1,1,0] |



### 4. 입출력 예 설명

- 1초 시점의 ₩498은 2초간 가격을 유지하고, 3초 시점에 ₩470으로 떨어졌습니다.
- 2초 시점의 ₩501은 1초간 가격을 유지하고, 3초 시점에 ₩470으로 떨어졌습니다.
- 3초 시점의 ₩470은 최종 시점까지 총 1초간 가격이 떨어지지 않았습니다.
- 4초 시점의 ₩489은 최종 시점까지 총 0초간 가격이 떨어지지 않았습니다.

### 5. 나의 풀이 (알고리즘 해설)

```java
class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        
        for (int i = 0; i < answer.length; i++) {
            for (int j = i+1; j < answer.length; j++) {
                if (prices[i] > prices[j]) {
                    answer[i] = j-i;
                    break;
                }
                if (j==answer.length-1) answer[i] = j-i;
            }
        }
        return answer;
    }
}
```

[5번 문제](https://developerdk.tistory.com/18)와 너무 유사하여 정말 빠르게 풀었던 문제입니다.



(line 5 ~ 14)

가격이 하락하는 index를 찾아 그 간격을 answer에 저장해주고 return 해주면 끝인 정말 간단한 문제입니다.

### 6. point

\- 5번 문제를 풀어보았기에 빠르게 풀 수 있었던 문제였습니다. 비슷한 유형의 문제를 많이 풀어보면 도움이 된다는 것을 느낄 수 있었습니다.