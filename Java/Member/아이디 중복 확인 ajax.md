### 아이디 중복 확인 ajax

- jsp 

```jsp
<tr>
	<td>
    	<div class="fone">
        	<i class="fas fa-id-card" style="color: black; padding-left: 10px;"></i> 
            	<input type="text" name="id" id="id" class="form-control" style="padding-					left: 30px;" placeholder="아이디(ID)">
		</div>
    </td>

	<td align="center">
		<input type="button" id="idCheck" style="color: white; padding: 7px; font-size: 			12px;" class="btn btn-success" value="중복확인">
	</td>
</tr>
```

- js

```js
$('#idCheck').click(function(){
	var _id = $("#id").val();
	if (_id == "") {
	alert("ID를 입력하세요");
	return;
	}
	$.ajax({
		type : "post",
		async : true,
		url : "/cocoa/idChk",
		dataType : "json",
		data : {"id" : _id},
				
		success : function(data, textStatus) {
			if (data == 1) {
				alert("사용할 수 없는 ID입니다.");
			} else {
				alert("사용할 수 있는 ID입니다.");
			}
		},
				
		error : function(data) {
			alert("에러가! 발생했습니다.");
		},
		complete : function(data) {
			//alert("작업을 완료 했습니다");
		}
	}); //end ajax	 
});
```

- controller

```java
@Override
@ResponseBody
@RequestMapping(value = "/idChk", method = RequestMethod.POST)
public int idChk(MemberVO vo) throws Exception {
    int result = 0;
    result = memberService.idChk(vo);
    return result;
}
```

