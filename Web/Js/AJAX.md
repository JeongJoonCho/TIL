## AJAX

비동기 ==> 화면 넘어가는 거 없이 처리

js파일

```js
$(document).ready(function(){
		
		$('#validate').click(function(){
			alert('jquery event');
			var flag = false;
			var id = $('#user_id').val();
			var pwd = $('#user_pwd').val();
			alert(id+":"+pwd);
			//Ajax연결해서 
			$.ajax({
				data :  {user_id : id, user_pwd : pwd },
				type : "post",
				dataType: "text",
				async: false,
				url : 'login_check2',
				success : function(data, textStatus){
					//성공여부를 출력합니다.
					//alert(data);
					alert(id+"님 반갑습니다.\n"+textStatus);
					//flag = true;
				},
				error : function(data, textStatus){
					$('#message').text('error');
				},
				complete : function(data,textStatus){
					alert(flag);
					alert('complete '+flag);
				}
			});
			
			return flag;
		})
		
		
	});
```





## @ResponseBody

컨트롤러

```java
@ResponseBody
	@RequestMapping(value = "/login_check2", method = RequestMethod.POST)
	public void check(@RequestParam("id") String id,
								@RequestParam("pwd") String pwd,
		                       HttpServletRequest request, HttpServletResponse response) throws IOException {
		boolean flag = loginService.checkLogin(id, pwd);
		response.getWriter().print(flag);
	}
```

--> ajax를 쓸때 창의 이동없이 그자리에서 바로 쏴주는것