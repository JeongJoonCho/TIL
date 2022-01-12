### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42840

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.



1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...

2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...

3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...





1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.





### 2. 제한사항

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

### 3. 입출력 예

| answers     | return  |
| :---------- | :------ |
| [1,2,3,4,5] | [1]     |
| [1,3,2,4,2] | [1,2,3] |

###  4. 입출력 예 설명

입출력 예 #1

- 수포자 1은 모든 문제를 맞혔습니다.
- 수포자 2는 모든 문제를 틀렸습니다.
- 수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

- 모든 사람이 2문제씩을 맞췄습니다.

### 5. 풀이 (알고리즘 해설)

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
 
class Solution {
    public int[] solution(int[] answers) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] arr3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
 
        HashMap<Integer, Integer> hm = new HashMap<>();
        hm.put(1, 0);
        hm.put(2, 0);
        hm.put(3, 0);
        //정답 갯수 Count
        for (int i = 0; i < answers.length; i++) {
            int num = answers[i];
            if (arr1[i%5] == num) hm.replace(1, hm.get(1)+1);
            if (arr2[i%8] == num) hm.replace(2, hm.get(2)+1);
            if (arr3[i%10] == num) hm.replace(3, hm.get(3)+1);
        }
        //최대 값 구하기
        int max = hm.get(1);
        for (Integer val : hm.values()) {
            if (val > max) {
                max = val;
            }
        }
        //정답 리스트 형성
        ArrayList<Integer> answerList = new ArrayList<>();
        for (Integer key : hm.keySet()) {
            if (hm.get(key) == max) {
                answerList.add(key);
            }
        }
        //정렬 및 배열로 변환
        int[] answer = new int[answerList.size()];
        Collections.sort(answerList);
        for (int i = 0; i < answer.length; i++) {
            answer[i] = answerList.get(i);
        }
        return answer;
    }
}
```

(line 7 ~ 9)

문제에 나온 정답의 반복되는 패턴을 배열로 만들어줍니다.



(line 11 ~ 21)

HashMap을 활용하여 Key로 학생의 번호, Value로 정답 갯수를 설정해줍니다.

for문으로 주어진 정답 배열을 돌면서 %(각 학생의 정답 배열의 길이)를 통해 맞은 갯수를 Count 해줍니다. 



(line 22 ~ 28)

HashMap의 Value 중 최대값을 구해줍니다.



(line 30 ~ 35)

최대값이랑 일치하는 Key를 answerList에 저장해줍니다.



(line 37 ~ 42)

Collections.sort를 활용해 오름차순으로 정렬하고 answer 배열로 변환 후 return해줍니다.









### 6. point

\- 최대값을 찾는 부분에서 다른 사람의 풀이를 보니 Math.max를 2번 활용하여 찾는 부분이 인상적이였습니다.

\- Math.max, Math.min의 활용을 거의 못해봤는데 다음에 풀때는 적용하여 더 간결한 코드를 만들어야겠습니다.

```java
int maxScore = Math.max(score[0], Math.max(score[1], score[2]));
```

