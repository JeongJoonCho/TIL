# branch 

> 독립된 작업 흐름을 만들기 위하여 `branch`를 사용
>
> 작업이 완료가 되면 `merge` 를 통해 병합한다.

## 브랜치

### 브랜치 생성

```bash
$ git branch <브랜치이름>
```

### 브랜치 이동

```bash
$ git checkout test
Switched to branch 'test'
(test) $
```

### 브랜치 생성 및 이동

```bash
$ git checkout -b test-1
Switched to a new branch 'test-1'
(test-1) $
```

### 브랜치 목록

```bash
$ git branch
* master
  test
```

### 브랜치 병합

```bash
(master) $ git merge test 
```

* 메인이 되는 브랜치로 이동한 이후 특정 작업 브랜치를 병합!

### 브랜치 삭제

```bash
$ git branch -d test
Deleted branch test (was 139169d).
```





![브랜치 예시(조별과제)](md-images/%EB%B8%8C%EB%9E%9C%EC%B9%98%20%EC%98%88%EC%8B%9C(%EC%A1%B0%EB%B3%84%EA%B3%BC%EC%A0%9C).PNG)

### 1. 마스터 브랜치와 A 브랜치가 있는데, 마스터에서 진행사항이 없었다면 무리 없이 merge가 된다.



### 2. 마스터 브랜치도 진행사항이 있고 A 브랜치도 진행사항이 있지만, 서로 겹치는 파일이 없다면 무리없이 merge가 된다.



### 3. 둘 다 진행사항이 있고, 겹치는 파일이 있다면 merge 할 때, 충돌이 발생하여 이를 해결해야 한다. 이는 [branch_scenario.md](./branch_scenario.md) 에서 확인가능함.

