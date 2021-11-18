/**
 * 
 */
alert('outside jsfile');
function sendWords(){
		words = $('#words').val();
		alert(words); // 1번
		$.ajax({
	         type:"",
	         url:"",
	         contentType: "application/text",
	         data :{"words":$("#words").val()},
		     success:function (data,textStatus){
		    	  alert(data); // 2번
		    	  resultText = JSON.parse(data);
		    	  text = resultText.message.result.translatedText;
		    	  alert(text); // 3번
		    	  $('#message').text(text);
		     },
		     error:function(data,textStatus){
		        alert("에러가 발생했습니다.");
		     },
		     complete:function(data,textStatus){
		    	 
		     }
		  });
	}