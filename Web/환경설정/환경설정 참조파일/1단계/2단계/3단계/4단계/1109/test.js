/**
 * 
 */
$(document).ready(function(){
	
	
	$('#idcheck_btn').click(function(){
		var id = $('#user_id').val();
		alert(id);
	});
	
	$('#pwd_btn').click(function(){
		var pwd1 = $('#pwd1').val();
		var pwd2 = $('#pwd2').val();
		if(pwd1==pwd2){
			alert('동일합니다.');
		} else {
			alert('틀립니다.');
		}
	});
	
	$('#email').change(function(){
		//선택한 이메일 값 읽어오기
		var email_val = this.value;
		$('#email2').val(email_val);
		
	});
	
	$('#direct').click(function(){
		if(this.checked){
			alert('선택');
			$('#email').removeAttr("disabled");
		} else {
			alert('선택해제');
			$('#email').attr("disabled",true);
		}
	});
	
	$('#box_btn').click(function(){
		var langs = $('.langs');
		var count = 0;
		var size = $('input[class="langs"]:checked').length;
		for(var i=0;i<langs.length;i++){
			if(langs[i].checked){
				//alert(langs[i].value);
				count++;
			}
		}
		alert("선택갯수는 "+size);
	});
	
	$('#name_btn').click(function(){
		//var c_name = $('#c_name').text(); --> 이름 읽기
		//alert(c_name);
		//$('#c_name').text('사용자이름'); --> 이름 수정하기
		$('#choice_box').html('<input type="checkbox" id="add_select">선택'); //태그삽입
	});
	
	var timer;
	$('#start').click(function(){
		
		var clock = function(){
			var now = new Date().toLocaleTimeString();
			$('#loc').html("<h3>"+now+"</h3>");
		}
		
		timer = setInterval(clock,1000);
		
	});
	$('#stop').click(function(){
		clearInterval(timer);
	});
});


