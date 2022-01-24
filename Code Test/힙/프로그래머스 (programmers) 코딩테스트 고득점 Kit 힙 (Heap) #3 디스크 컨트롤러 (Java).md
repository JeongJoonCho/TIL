### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42627

하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.

예를들어

```
- 0ms 시점에 3ms가 소요되는 A작업 요청
- 1ms 시점에 9ms가 소요되는 B작업 요청
- 2ms 시점에 6ms가 소요되는 C작업 요청
```

와 같은 요청이 들어왔습니다. 이를 그림으로 표현하면 아래와 같습니다.
![Screen Shot 2018-09-13 at 6.34.58 PM.png](md-images/38dc6a53-2d21-4c72-90ac-f059729c51d5.png)

한 번에 하나의 요청만을 수행할 수 있기 때문에 각각의 작업을 요청받은 순서대로 처리하면 다음과 같이 처리 됩니다.
![Screen Shot 2018-09-13 at 6.38.52 PM.png](md-images/90b91fde-cac4-42c1-98b8-8f8431c52dcf.png)

```
- A: 3ms 시점에 작업 완료 (요청에서 종료까지 : 3ms)
- B: 1ms부터 대기하다가, 3ms 시점에 작업을 시작해서 12ms 시점에 작업 완료(요청에서 종료까지 : 11ms)
- C: 2ms부터 대기하다가, 12ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 16ms)
```



이 때 각 작업의 요청부터 종료까지 걸린 시간의 평균은 10ms(= (3 + 11 + 16) / 3)가 됩니다.

하지만 A → C → B 순서대로 처리하면
![Screen Shot 2018-09-13 at 6.41.42 PM.png](md-images/a6cff04d-86bb-4b5b-98bf-6359158940ac.png)

```
- A: 3ms 시점에 작업 완료(요청에서 종료까지 : 3ms)
- C: 2ms부터 대기하다가, 3ms 시점에 작업을 시작해서 9ms 시점에 작업 완료(요청에서 종료까지 : 7ms)
- B: 1ms부터 대기하다가, 9ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 17ms)
```

이렇게 A → C → B의 순서로 처리하면 각 작업의 요청부터 종료까지 걸린 시간의 평균은 9ms(= (3 + 7 + 17) / 3)가 됩니다.



각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)





### 2. 제한사항

- jobs의 길이는 1 이상 500 이하입니다.
- jobs의 각 행은 하나의 작업에 대한 [작업이 요청되는 시점, 작업의 소요시간] 입니다.
- 각 작업에 대해 작업이 요청되는 시간은 0 이상 1,000 이하입니다.
- 각 작업에 대해 작업의 소요시간은 1 이상 1,000 이하입니다.
- 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.

### 3. 입출력 예

| jobs                     | return |
| :----------------------- | :----- |
| [[0, 3], [1, 9], [2, 6]] | 9      |

###  4. 입출력 예 설명

- - 문제에 주어진 예와 같습니다.
    - 0ms 시점에 3ms 걸리는 작업 요청이 들어옵니다.
    - 1ms 시점에 9ms 걸리는 작업 요청이 들어옵니다.
    - 2ms 시점에 6ms 걸리는 작업 요청이 들어옵니다.

### 5. 나의 풀이 (알고리즘 해설)

```java
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
 
public class Job implements Comparable<Job> {
    int start;
    int workTime;
    
    public Job(int start, int time) {
        this.start = start;
        this.workTime = time;
    }
    
    //걸리는 소요시간이 짧을수록, 시작 시간이 짧을 수록 우선수위를 높게함
    @Override
    public int compareTo(Job o) {
        if (this.workTime < o.workTime) return -1;
        else if (this.workTime == o.workTime) {
            if (this.start < o.start) return -1;
            else return 1;
        } else return 1;
    }
}
 
class Solution {
    public int solution(int[][] jobs) {
        PriorityQueue<Job> pq = new PriorityQueue<>();
        List<Job> list = new ArrayList<>();
        
        //PriorityQueue를 활용한 Job 정렬
        for (int i = 0; i < jobs.length; i++) {
            pq.add(new Job(jobs[i][0], jobs[i][1]));
        }
        
        //list에 우선순위 순으로 정렬된 Job 순차적으로 삽입
        for (int i = 0; i < jobs.length; i++) {
            list.add(pq.poll());
        }
        
        int time = 0;
        int sum = 0;
        while (list.size()>0) {
            for (int i = 0; i < list.size(); i++) {
                //시작시간이 현재 시간보다 이전이라면 시작 가능
                if (time>=list.get(i).start) {
                    time+=list.get(i).workTime;
                    sum+=time-list.get(i).start;
                    list.remove(i);
                    break;
                }
                //시작시간이 현재 시간보다 이전인 것이 없다면 시간 1초 증가
                if (i == list.size()-1) time++;
            }
        }
        
        int answer = (sum/jobs.length);
        return answer;
    }
}
```

앞선 [라면공장문제](https://developerdk.tistory.com/21)와 상당히 유사한 문제였습니다.



(line 5 ~ 23)

PriorityQueue를 이용할 것이기 때문에 Job이라는 class를 생성하고 compareTo 메소드를 이용해 걸리는 시간이 짧을수록 시작시간이 이를 수록 더 우선순위를 높게 해줍니다.



(line 31 ~ 33)

PriorityQueue를 이용해 Supply를 정렬합니다.



(line 36 ~ 38)

우선순위 순으로 정렬된 Job을 순차적으로 ArrayList에 담습니다.



(line 40 ~ 54)

우선순위대로 순차적으로 순회하면서 시작시간이 현재 시간보다 이르다면 작업을 수행합니다.

작업이 완료되면 현재시간+작업시간, 총 소요시간 sum에 (현재시간 - 시작시간)을 더해주고 list에서 해당 작업을 삭제합니다.

또, 현재 시간에 수행할 수 있는 작업이 존재하지 않는다면 대기합니다.

### 6. point

\- 처음에 할 수 있는 모든 경우의 수를 다 고려해서 가장 짧은 시간을 찾아야하나 생각했으나 생각해보니 예제에도 나와있듯 가장 이르고 짧은 작업을 먼저 끝내고 후의 작업을 진행하는 것이 전체적인 소요시간을 짧게할 수 있을것 같아 우선순위를 위와같이 설정하게 되었습니다. 모든 경우의 수를 고려해야했다면 상당히 복잡한 문제였을 것입니다.



\- 시작시간이 현재시간보다 이전인 작업을 생각하지 못해 몇개의 항목에 대해서는 시간초과가 떴었는데 빈 시간이 있을 수 있다는 것도 잘 고려해야겠습니다. 