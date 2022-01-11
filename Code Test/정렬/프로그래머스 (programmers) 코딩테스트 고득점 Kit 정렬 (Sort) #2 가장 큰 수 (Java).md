### 1. 문제 설명

문제: https://programmers.co.kr/learn/courses/30/lessons/42746

0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.



0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.





### 2. 제한사항

- numbers의 길이는 1 이상 100,000 이하입니다.
- numbers의 원소는 0 이상 1,000 이하입니다.
- 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

### 3. 입출력 예

| numbers           | return  |
| :---------------- | :------ |
| [6, 10, 2]        | 6210    |
| [3, 30, 34, 5, 9] | 9534330 |

### 4. 입출력 예 설명

문제 설명과 같음

### 5. 풀이 (알고리즘 해설)

```java
import java.util.Arrays;
import java.util.Comparator;
 
class Solution {
    public String solution(int[] numbers) {
        String answer = "";
        
        //int 배열을 String 배열로 변환
        String[] arr = new String[numbers.length];
        for (int i = 0; i < numbers.length; i++) {
            arr[i] = (String.valueOf(numbers[i]));
        }
        
        //배열 정렬, 정렬 규칙으로는 2개를 더하여 더 큰 쪽이 우선순위가 있도록 정렬
        Arrays.sort(arr, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return (s2+s1).compareTo(s1+s2);
            }
        });
        
        //0000 처럼 0으로만 구성되어있으면 0 return
        if (arr[0].equals("0")) return "0";
        
        //그 외의 경우 순차적으로 연결하여 answer return
        for (int i = 0; i < arr.length; i++) {
            answer+=arr[i];
        }
        return answer;
    }
}
```

(line 8 ~ 12)

input은 int형 배열이므로 단순 크기 비교로 정렬하기는 쉽지 않습니다. 정렬이 용이한 String형태로 변환합니다.



(line 14 ~ 20)

Arrays.sort를 활용하여 정렬합니다. Comparator를 활용하여 규칙을 만들어 주는데, 두 String을 합하여 더 큰 쪽이 우선순위가 있도록 구성해줍니다.



(line 23)

정렬을 하였으면 가장 앞자리가 큰 숫자가 arr[0]에 담기게 되는데 0이라는 것의 의미는 숫자가 0000 처럼 0으로만 구성되었다는 의미이므로 0을 return 해줍니다.



(line 26 ~ 29)

그 외의 경우에는 String에 순차적으로 저장하여 return 해줍니다.



### 6. point

\- 생각할 거리가 많은 좋은 문제였습니다. 처음에는 "그냥 String으로 사전식 배열에서 큰 숫자가 앞으로 가게하면 되지 않을까?"라는 생각으로 정렬해보았더니 3, 30의 순서가 일치하지 않았습니다. 330이 303보다 컸지만 303으로 정렬되었습니다.

```java
Arrays.sort(arr, new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        if (s1.equals(s2)) return 0;
        if ((s1.length() == 1 || s2.length() ==1) && s1.charAt(0)==s2.charAt(0)) {
            if (s1.length() < s2.length()) {
                return (String.valueOf(s2.charAt(1)).compareTo(s1));
            } else if (s1.length() > s2.length()) {
                return s2.compareTo(String.valueOf(s1.charAt(1)));
            }
        }
        if (s1.charAt(0)==s2.charAt(0))
            return compare(s1.substring(1), s2.substring(1));
        return s2.compareTo(s1);
    }
});
```

\- 처음 정렬 방법은 위와같이 3, 30을 정렬하는 것에 집중해보았습니다. 자리수를 줄여나가는 compare 함수를 이용하여 재귀함수로 구현하였고, 둘 중 하나가 1자리이며, 첫째자리가 같을 경우 긴 것의 2번째 자리와 1자리를 비교하여 더 큰것을 앞으로 보내는 방법이였습니다. 그러나 왜인지 모르겠지만 몇개의 항목에서 런타임 에러가 났습니다ㅠㅠ (프로그래머스 질문하기에도 올렸는데 혹시 보시다가 아시는 분 있으면 댓글 부탁드립니다.)



\- 0000 처럼 0으로 구성되었을 경우 "0"을 return해주는 경우도 생각해보아야 했습니다.





\- 정렬시 Comparator, CompareTo 등의 활용을 해볼 수 있는 좋은 문제였습니다.

참고 블로그 : https://cwondev.tistory.com/15



\- String.valueOf()도 활용하는 것을 배웠습니다. 원래 간단히 java에서 int를 String으로 변환할때는 그냥 ""+int를 활용하였는데 매우 효율성이 좋지 않다고 합니다.