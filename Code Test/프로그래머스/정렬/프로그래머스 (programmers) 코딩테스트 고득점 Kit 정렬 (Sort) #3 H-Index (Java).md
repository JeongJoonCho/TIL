### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42747

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과[1](https://programmers.co.kr/learn/courses/30/lessons/42747/solution_groups?language=java&type=my#fn1)에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 `n`편 중, `h`번 이상 인용된 논문이 `h`편 이상이고 나머지 논문이 h번 이하 인용되었다면 `h`가 이 과학자의 H-Index입니다.



어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.





### 2. 제한사항

- 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.
- 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

### 3. 입출력 예

| citations       | return |
| :-------------- | :----- |
| [3, 0, 6, 1, 5] | 3      |

### 4. 입출력 예 설명

이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.



### 5. 풀이 (알고리즘 해설)

```java
import java.util.Arrays;
import java.util.Collections;
 
class Solution {
    public int solution(int[] citations) {
        Integer[] cArr = new Integer[citations.length];
        for (int i = 0; i < citations.length; i++) {
            cArr[i] = citations[i];
        }
        Arrays.sort(cArr, Collections.reverseOrder());
        for (int i = 0; i < citations.length; i++) {
            if (cArr[i]<i+1) {
                return i;
            }
        }
        return citations.length;
    }
}
```

풀이는 짧지만 문제 분석이 어렵고 생각할 것이 많은 어려운 문제였습니다.

나머지 논문이 h번 이하 인용이라는 말이 있으므로

"h번 이상 인용된 논문이 h편 이상인 h의 최대값"을 찾는 문제로 요약할 수 있습니다.



(line 6 ~ 10)

Int[]는 내림차순(Collections.reverseOrder())으로 정렬할 수 없으므로 Integer[]로 바꾸고 정렬합니다.



(line 11 ~ 15)

예시를 통해 보자면 내림차순 정렬한 배열 [6,5,3,1,0]에서

6 > 0

5 > 1

3 > 2

-------------------return 3

1 < 3



0 < 4

인용된 논문 수가 i+1 (편)보다 작아질 때 i를 return합니다.



(line 16)

[30,40] 등 논문의 갯수가 인용수의 최소값보다 작은 경우 해당 조건을 만족하지 못하므로 논문의 갯수를 return 해줍니다.



### 6. point

\- 굳이 Integer[]로 변환할 필요 없이 아래 2 메소드를 호출하면 내림차순으로 정렬할 수 있었습니다.

```java
Collections.sort(citations);
Collections.reverse(citations);
```

