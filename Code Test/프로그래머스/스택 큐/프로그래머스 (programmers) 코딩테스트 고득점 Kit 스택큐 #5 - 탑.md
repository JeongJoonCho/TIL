### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42588

수평 직선에 높이가 서로 다른 탑 N대를 세웠습니다. 모든 탑의 꼭대기에는 신호를 송/수신하는 장치를 설치했습니다. 발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신합니다. 또한, 한 번 수신된 신호는 다른 탑으로 송신되지 않습니다.

예를 들어 높이가 6, 9, 5, 7, 4인 다섯 탑이 왼쪽으로 동시에 레이저 신호를 발사합니다. 그러면, 탑은 다음과 같이 신호를 주고받습니다. 높이가 4인 다섯 번째 탑에서 발사한 신호는 높이가 7인 네 번째 탑이 수신하고, 높이가 7인 네 번째 탑의 신호는 높이가 9인 두 번째 탑이, 높이가 5인 세 번째 탑의 신호도 높이가 9인 두 번째 탑이 수신합니다. 높이가 9인 두 번째 탑과 높이가 6인 첫 번째 탑이 보낸 레이저 신호는 어떤 탑에서도 수신할 수 없습니다.

| 송신 탑(높이) | 수신 탑(높이) |
| :------------ | :------------ |
| 5(4)          | 4(7)          |
| 4(7)          | 2(9)          |
| 3(5)          | 2(9)          |
| 2(9)          | -             |
| 1(6)          | -             |

맨 왼쪽부터 순서대로 탑의 높이를 담은 배열 heights가 매개변수로 주어질 때 각 탑이 쏜 신호를 어느 탑에서 받았는지 기록한 배열을 return 하도록 solution 함수를 작성해주세요.



### 2. 제한사항

- heights는 길이 2 이상 100 이하인 정수 배열입니다.
- 모든 탑의 높이는 1 이상 100 이하입니다.
- 신호를 수신하는 탑이 없으면 0으로 표시합니다.

### 3. 입출력 예

| heights         | return          |
| :-------------- | :-------------- |
| [6,9,5,7,4]     | [0,0,2,2,4]     |
| [3,9,9,3,5,7,2] | [0,0,0,3,3,3,6] |
| [1,5,3,6,7,6,5] | [0,0,2,0,0,5,6] |





### 4. 입출력 예 설명

입출력 예 #1
앞서 설명한 예와 같습니다.

입출력 예 #2

[1,2,3] 번째 탑이 쏜 신호는 아무도 수신하지 않습니다.
[4,5,6] 번째 탑이 쏜 신호는 3번째 탑이 수신합니다.
[7] 번째 탑이 쏜 신호는 6번째 탑이 수신합니다.

입출력 예 #3

[1,2,4,5] 번째 탑이 쏜 신호는 아무도 수신하지 않습니다.
[3] 번째 탑이 쏜 신호는 2번째 탑이 수신합니다.
[6] 번째 탑이 쏜 신호는 5번째 탑이 수신합니다.
[7] 번째 탑이 쏜 신호는 6번째 탑이 수신합니다.



### 5. 나의 풀이 (알고리즘 해설)

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
class Solution {
    public int[] solution(int[] heights) {
        int length = heights.length;
        
        List<Integer> list = new ArrayList<>();
        Map<Integer, Integer> answerMap = new HashMap<>();
 
        for (int i = 0; i < length; i++) {
            list.add(heights[i]);
        }
        
        for (int i = length-1; i > 0; i--) {
            for (int j = i-1; j >= 0; j--) {
                if (list.get(j) > list.get(i)) {
                    answerMap.put(i, j+1);
                    break;
                }
                if (j==0) answerMap.put(i, 0);
            }
        }
        
        int[] answer = new int[length];
        answer[0] = 0;
        for (int i = 1; i < length; i++) {
            answer[i] = answerMap.get(i);
        }
        return answer;
    }
}
```

간단한 문제를 복잡하게 생각하여 이리저리 궁리하다가 복잡한 답이 나왔네요.



(line 17 ~ 25)

이 문제의 핵심 로직입니다. 뒤에서부터 index를 감소시키면서 더 큰 값이 등장하면 정답에 넣는 방식으로 풀이하였습니다. 



### 6. point

다른사람의 풀이를 보니 정말 복잡하게 풀었다는 생각이 들었습니다.

```java
import java.util.*;
 
class Solution {
    public int[] solution(int[] heights) {
        int[] answer = new int[heights.length];
 
        for (int i=0; i<heights.length; i++){
            for (int j=i+1; j<heights.length; j++){
                if (heights[i] > heights[j]){
                    answer[j]=i+1;
                }
            }
        }
 
        return answer;
    }
}
```

\- 배열은 한계가 있을것 같아 list와 Map등을 사용하였는데 매우 불필요한 과정이였습니다. 단순히 index를 활용하여 값을 얻는 과정이였으니 배열만 이용해도 충분하였습니다.





\- 뒤에서 부터 index를 감소기키지 않아도 저렇게 돌리게 된다면 j와 가장 가까운 높은 탑(i+1)이 저장되어 결국 똑같아 지는 부분이 신기하였습니다.