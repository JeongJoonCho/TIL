### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42629

라면 공장에서는 하루에 밀가루를 1톤씩 사용합니다. 원래 밀가루를 공급받던 공장의 고장으로 앞으로 k일 이후에야 밀가루를 공급받을 수 있기 때문에 해외 공장에서 밀가루를 수입해야 합니다.



해외 공장에서는 향후 밀가루를 공급할 수 있는 날짜와 수량을 알려주었고, 라면 공장에서는 운송비를 줄이기 위해 최소한의 횟수로 밀가루를 공급받고 싶습니다.



현재 공장에 남아있는 밀가루 수량 stock, 밀가루 공급 일정(dates)과 해당 시점에 공급 가능한 밀가루 수량(supplies), 원래 공장으로부터 공급받을 수 있는 시점 k가 주어질 때, 밀가루가 떨어지지 않고 공장을 운영하기 위해서 최소한 몇 번 해외 공장으로부터 밀가루를 공급받아야 하는지를 return 하도록 solution 함수를 완성하세요.

dates[i]에는 i번째 공급 가능일이 들어있으며, amounts[i]에는 dates[i] 날짜에 공급 가능한 밀가루 수량이 들어 있습니다.





### 2. 제한사항

- stock에 있는 밀가루는 오늘(0일 이후)부터 사용됩니다.
- stock과 k는 2 이상 100,000 이하입니다.
- dates의 각 원소는 1 이상 k 이하입니다.
- supplies의 각 원소는 1 이상 1,000 이하입니다.
- dates와 supplies의 길이는 1 이상 20,000 이하입니다.
- k일 째에는 밀가루가 충분히 공급되기 때문에 k-1일에 사용할 수량까지만 확보하면 됩니다.
- dates에 들어있는 날짜는 오름차순 정렬되어 있습니다.
- dates에 들어있는 날짜에 공급되는 밀가루는 작업 시작 전 새벽에 공급되는 것을 기준으로 합니다. 예를 들어 9일째에 밀가루가 바닥나더라도, 10일째에 공급받으면 10일째에는 공장을 운영할 수 있습니다.
- 밀가루가 바닥나는 경우는 주어지지 않습니다.

### 3. 입출력 예

| stock | dates       | supplies    | key  | return |
| ----- | ----------- | ----------- | ---- | ------ |
| 4     | [4, 10, 15] | [20, 5, 10] | 30   | 2      |



### 4. 입출력 예 설명

- - 현재 밀가루가 4톤 남아 있기 때문에 오늘과 1일 후~3일 후까지 사용하고 나면 모든 밀가루를 다 사용합니다. 따라서 4일 후에는 반드시 밀가루를 공급받아야 합니다.
  - 4일째 공급받고 나면 15일 이후 아침에는 9톤의 밀가루가 남아있게 되고, 이때 10톤을 더 공급받으면 19톤이 남아있게 됩니다. 15일 이후부터 29일 이후까지 필요한 밀가루는 15톤이므로 더 이상의 공급은 필요 없습니다.
  - 따라서 총 2회의 밀가루를 공급받으면 됩니다.

### 5. 나의 풀이 (알고리즘 해설)

```java
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;
 
class Supply implements Comparable<Supply> {
    int date;
    int supply;
    
    public Supply(int date, int supply) {
        this.date = date;
        this.supply = supply;
    }
 
    //공급량이 많을수록 공급 날짜가 빠를수록 더 우선순위를 줌
    @Override
    public int compareTo(Supply o) {
        if (this.supply > o.supply) {
            return -1;
        } else if (this.supply == o.supply) {
            if (this.date < o.date) return -1;
            else return 1;
        } else return 1;
    }
}
 
class Solution {
    public int solution(int stock, int[] dates, int[] supplies, int k) {
        PriorityQueue<Supply> pq = new PriorityQueue<>();
        List<Supply> list = new ArrayList<>();
        
        //우선순위 큐를 이용하여 Supply 정렬
        for (int i = 0; i < supplies.length; i++) {
            pq.add(new Supply(dates[i], supplies[i]));
        }
        
        //List에 우선순위 순으로 삽입
        for (int i = 0; i < supplies.length; i++) {
            list.add(pq.poll());
        }
        
        int cnt = 0;
        //stock이 k일까지 버틸 수 있을때까지 반복
        while (stock < k) {
            //우선순위 순으로 List를 순회하며 supply 공급받음
            for (int i = 0; i < list.size(); i++) {
                //date가 stock보다 작거나 같다면 현재 stock만으로 수령 가능
                if (stock >= list.get(i).date) {
                    stock += list.get(i).supply;
                    list.remove(i);
                    cnt++;
                    break;
                }
            }
        }
        
        return cnt;
    }
}
```

보기에는 상당히 복잡한 문제였지만 차근차근 분석하면 어렵지 않았던 문제였습니다



(line 5 ~ 24)

PriorityQueue를 이용할 것이기 때문에 Supply라는 class를 생성하여 date, supply를 하나로 묶어줍니다.

compareTo 메소드를 이용하여 공급량이 많을수록 날짜가 빠를수록 더 우선순위를 줍니다.



(line 32 ~ 33)

PriorityQueue를 이용해 Supply를 정렬합니다.



(line 37 ~ 39)

정렬된 Supply를 순차적으로 ArrayList에 담습니다.



(line 41 ~ 53)

Stock이 K이면 K일까지 버틸 수 있으므로 그 전까지는 while문을 돌며 공급을 받아야합니다.

많이 공급을 받을 수 있는 우선순위 순으로 list에 담겨있기 때문에 첫번째 요소부터 순회하며 공급이 가능하다면 (date가 stock보다 작거나 같다면) 공급을 받습니다. 공급을 받을 때마다 count를 늘려주고 count를 return 해줍니다.

### 6. point

\- 함께 생각할 요소는 Class로 묶고 우선순위는 CompareTo로 정리하는 것을 연습하기 좋은 예제였습니다.



\- PriorityQueue는 공급이 불가능한 date를 건너뛰는 순회를 할 수 없기 때문에 pq의 값을 list로 옮기는 작업이 필요하였습니다. 이때 index 접근이 용이한 ArrayList로 구현하여 효율성을 높일 수 있었습니다.