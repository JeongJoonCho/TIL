### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42626

매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

```
섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
```

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.





### 2. 제한사항

- scoville의 길이는 1 이상 1,000,000 이하입니다.
- K는 0 이상 1,000,000,000 이하입니다.
- scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
- 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

### 3. 입출력 예

| scoville             | K    | return |
| :------------------- | :--- | :----- |
| [1, 2, 3, 9, 10, 12] | 7    | 2      |

### 4. 입출력 예 설명

- 스코빌 지수가 1인 음식과 2인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.
  새로운 음식의 스코빌 지수 = 1 + (2 * 2) = 5
  가진 음식의 스코빌 지수 = [5, 3, 9, 10, 12]
- 스코빌 지수가 3인 음식과 5인 음식을 섞으면 음식의 스코빌 지수가 아래와 같이 됩니다.
  새로운 음식의 스코빌 지수 = 3 + (5 * 2) = 13
  가진 음식의 스코빌 지수 = [13, 9, 10, 12]
- 모든 음식의 스코빌 지수가 7 이상이 되었고 이때 섞은 횟수는 2회입니다.

### 5. 나의 풀이 (알고리즘 해설)

```java
import java.util.PriorityQueue;
 
class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for (int i : scoville) pq.add(i);
        
        int cnt = 0;
        while (true) {
            if (pq.peek()>=K) break;
            if (pq.size() == 1) return -1;
            pq.add(pq.poll()+(pq.poll()*2));
            cnt++;
        }
        
        return cnt;
    }
}
```

PriorityQueue를 활용한 기초적인 문제였습니다.



(line 10 ~ 15)

PriorityQueue에 주어진 scoville 점수를 모두 넣은 후, 순차적으로 2번 poll()하여 주어진 식에 맞게 계산한 후 다시 add() 해주며 count를 올려줍니다. 이 때 peek() (최소값)이 K를 넘는다면 조건을 만족한 것이므로 break하여 count를 return해 줍니다.

추가적으로 size()가 1이면 더이상 계산할 것이 없으므로 바로 -1을 return 해줍니다.

### 6. point

\- Integer의 PriorityQueue는 가장작은 값 부터 순서대로 poll 해주어 문제를 풀기 매우 수월하였습니다.