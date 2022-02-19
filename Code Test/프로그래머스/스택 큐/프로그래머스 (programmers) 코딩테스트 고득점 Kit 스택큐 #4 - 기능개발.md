### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42588

프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.





또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.



먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.



### 2. 제한사항

- 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
- 작업 진도는 100 미만의 자연수입니다.
- 작업 속도는 100 이하의 자연수입니다.
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.
- 

### 3. 입출력 예



| progresses | speeds   | return |
| ---------- | -------- | ------ |
| [93,30,55] | [1,30,5] | [2,1]  |



### progressesspeedsreturn[93,30,55][1,30,5][2,1]

###  

### 4. 입출력 예 설명

첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.



### 5. 나의 풀이 (알고리즘 해설)

```java
import java.util.ArrayList;
import java.util.List;
 
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int days = 0;
 
        List<Integer> list = new ArrayList<>();
        List<Integer> answerList = new ArrayList<>();
 
        for (int i = 0; i < progresses.length; i++) {
            if ((100-progresses[i])%speeds[i]==0)
                days = (100-progresses[i])/speeds[i];
            else
                days = (100-progresses[i])/speeds[i]+1;
            list.add(days);
        }
 
        int save = 0;
        outer: while (true) {
            int cnt = 1;
            for (int i = save+1; i < list.size(); i++) {
                if (list.get(save) < list.get(i)) {
                    save = i;
                    break;
                }
                cnt++;
                if (i==list.size()-1) {
                    answerList.add(cnt);
                    break outer;
                }
            }
            answerList.add(cnt);
            if (save==list.size()-1) {
                answerList.add(1);
                break;
            }
        }
 
        int[] answer = new int[answerList.size()]; 
        for (int i = 0; i < answerList.size(); i++) {
            answer[i] = answerList.get(i);
        }
 
        return answer;
    }
}
```

(line 11 ~ 17)

중요한 것은 progresses, speeds가 아닌 배포까지 시간이기 때문에 days를 구하여 list에 넣어줍니다.

days는 나머지가 있으면 +1을 해주어 모자라지 않게 해줍니다. 



(line 19 ~ 38)

list를 순회하며 배포 시간이 더 큰 요소가 나타나면 index를 save해주며 그동안의 count를 answerList에 저장합니다.

마찬가지로 마지막에 도달하면 count를 저장하고, 마지막 1개의 요소는 1을 저장해줍니다. 



### 6. point

\- input의 progresses, speeds는 크게 중요하지 않고 결국 days가 중요한 것이 인상깊었습니다.