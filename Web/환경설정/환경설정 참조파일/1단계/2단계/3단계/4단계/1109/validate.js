/**
 * 
 */
 function hello(){
		alert('Welcome~');
	}
	
	function getId(){
		var ele = document.getElementById("user_id");
		//alert(ele.value);
		//값이 비어있으면 경고를 출력하시오 (값을 입력하세요 문구를 메시지 창으로 출력)
		var id = ele.value;
		if (id==""){
			alert("아이디를 입력하세요");
		} else {
			alert(id);
		}
		
	}
	
	//함수 이름이 compare_password 인 함수 작성하시오
	function compare_password(){
		alert('ok');
		var pwd1 = document.getElementById('pwd1');
		var pwd2 = document.getElementById('pwd2');
		if(pwd1.value!=pwd2.value){
			alert('두 비밀번호가 틀립니다.');
		} else {
			alert('동일한 비밀번호 입니다.');
		}
		
		return false;
	}
	//패스워드확인이라는 이름을 가진 버튼하고 위의 함수를 연결하시오
	
	//두개의 비밀번호가 같은지 판별하는 코드를 함수안에 작성하시오
	
	function check_radio(){
		//alert('ok');
		var eles = document.getElementsByClassName("tools");
		//alert(eles.length);
		for(var i=0;i<eles.length;i++){
			if(eles[i].checked){
				alert(eles[i].value);
			}
		}
	}
	
	
	function check_box(){
		var eles = document.getElementsByClassName("langs");
		//alert(eles.length);
		for(var i=0;i<eles.length;i++){
			if(eles[i].checked){
				alert(eles[i].value);
			}
		}
	}
	var time;
	function test(){
		var clock = function(){
			var now = new Date().toLocaleTimeString();
			//alert(now);
			console.log(now);
		}
		time = setInterval(clock,1000);
	}
	
	function stop(){
		clearInterval(time);
	}
	
	