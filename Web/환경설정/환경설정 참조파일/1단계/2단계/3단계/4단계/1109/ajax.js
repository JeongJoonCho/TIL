/**
 * 
 */
	function sendData(){
		alert("Hello");
		//id,pwd의 값을 읽어옵니다.
		var id = document.getElementById('user_id').value;
		var pwd = document.getElementById('user_pwd').value;
		alert(id+':'+pwd);
		return false;
	}
	// jQuery를 이용하여 가져오기
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
				url : '/LoginMVC/LoginController?cmd=login_check2',
				success : function(data, textStatus){
					//성공여부를 출력합니다.
					//alert(data);
					alert(data+"님 반갑습니다.\n"+textStatus);
					flag = true;
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
	