### img 태그에서 이미지 없을때 디폴트 값 정해놓기

```jsp
<img onerror="this.src='디폴트 이미지 경로'">
```

### js파일이나 css 파일 수정했는데 적용 안될때

```jsp
<script type="text/javascript" src="resources/js/ajax.js?ver=1"></script>
<!-- 위 처럼 쿼리스트링 ?ver=1을 추가해서 리로드 되게 해준다
```

