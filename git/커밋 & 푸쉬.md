## 전날 복습

![복습](md-images/%EB%B3%B5%EC%8A%B5.PNG)

> `add` 와 `commit` 을 설명할 수 있는가?

* `add` 는 working directory 에서 staging area 로 넘기는 작업

  - ```bash
    $ git add . 	#  . 은 현재 위치 전체를 뜻함, 혹은 파일이나 폴더만도 가능
    ```

* `commit` 은 staging area 에서 커밋을 하는 작업

  - ```bash
    $ git commit -m '커밋메시지'	# '커밋메시지'로 커밋을 진행
    ```

> `status` 와 `log` 를 설명할 수 있는가?

* `status` 는 working directory 와 staging area 의 상태를 나타내줌
* `log` 는 커밋의 상태를 나타내줌
* `log -1` 은 최근 커밋한 커밋을 알려줌
* `log --oneline` 은 커밋들을 한줄로 나타내줌



> 커밋하는 과정을 설명할 수 있는가?

1. ```bash
   $ git init # 깃 저장소를 생성
   
   $ git touch txt.txt #txt파일을 생성
   
   $ git add .
   
   $ git commit -m '커밋 메시지'
   ```

   

> 원격저장소를 만들 수 있는가?

* 원격저장소는 GitHub에서 직접 만들어야 한다.



> 원격저장소에 push 할 수 있는가?

```bash
# 커밋을 완료한 상태

$ git remote add origin "url"

$ git push -u origin master
```



