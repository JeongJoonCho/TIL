**문제**

김탑은 TV를 사러 인터넷 쇼핑몰에 들어갔다. 쇼핑을 하던 중에, TV의 크기는 그 TV의 대각선의 길이로 나타낸 다는 것을 알았다. 하지만, 김탑은 대각선의 길이가 같다고 해도, 실제 TV의 크기는 다를 수도 있다는 사실에 직접 TV를 보러갈걸 왜 인터넷 쇼핑을 대각선의 길이만 보고있는지 후회하고 있었다.

인터넷 쇼핑몰 관리자에게 이메일을 보내서 실제 높이와 실제 너비를 보내달라고 했지만, 관리자는 실제 높이와 실제 너비를 보내지 않고 그것의 비율을 보내왔다.

TV의 대각선 길이와, 높이 너비의 비율이 주어졌을 때, 실제 높이와 너비의 길이를 출력하는 프로그램을 작성하시오.

**문제풀이**

**피타고라스의 정리**만 알면 풀 수 있는 쉬운 문제



** 주의사항

**미리부터 루트를 씌워버리면 틀릴 수 있기 때문에,** 마지막에 계산할 수 있도록 하자!



https://github.com/shinsung3/Algorithm-BOJ-/blob/master/Main_1297.java

[![img](md-images/src=https%253A%252F%252Favatars0.githubusercontent-16460967982571.com%252Fu%252F46014771%253Fs%253D400%2526v%253D4&type=ff120)](https://github.com/shinsung3/Algorithm-BOJ-/blob/master/Main_1297.java)[ **shinsung3/Algorithm-BOJ-**백준 알고리즘 문제풀이. Contribute to shinsung3/Algorithm-BOJ- development by creating an account on GitHub.github.com](https://github.com/shinsung3/Algorithm-BOJ-/blob/master/Main_1297.java)

**입력**

첫째 줄에 TV의 대각선 길이, TV의 높이 비율, TV의 너비 비율이 공백 한 칸을 사이에 두고 주어진다. 대각선 길이는 5보다 크거나 같고, 1,000보다 작거나 같은 자연수, 높이 비율은 1보다 크거나 같고, 99보다 작거나 같은 자연수 너비 비율은 2보다 크거나 같고, 100보다 작거나 같은 자연수이다. 너비 비율은 항상 높이 비율보다 크다.

**출력**

첫째 줄에 TV의 높이와 TV의 너비를 공백 한 칸을 이용해서 구분지은 후 출력한다. 만약, 실제 TV의 높이나 너비가 소수점이 나올 경우에는 그 수보다 작으면서 가장 큰 정수로 출력한다. (예) 1.7 -> 1

**예제 입력 1** 

52 9 16 

**예제 출력 1** 

25 45

**소스코드** 

```java
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
//		sc = new Scanner(src);
		int TV = sc.nextInt();
		int R = sc.nextInt();
		int C = sc.nextInt();

		long RR = R * R;
		long CC = C * C;
		long TV2 = TV * TV;
		double ans = (double) TV2 / (double) (RR + CC);
		System.out.println((int) Math.sqrt(ans * RR) + " " + (int) Math.sqrt(CC * ans));
	}

	private static String src = "52 9 16";
}
```

