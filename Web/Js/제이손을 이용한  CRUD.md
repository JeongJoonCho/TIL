제이손을 이용한  CRUD

```jsp

$(function() {
      $("#deleteJson").click(function() {
      	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              };
  
  	$.ajax({    
        type:"DELETE",
        url:"${contextPath}/boards/114", 
        
        contentType: "application/json",
        data :JSON.stringify(article),
      success:function (data,textStatus){
    	  var temp = JSON.stringify(data);
          alert(temp);
          
      },
      error:function(data,textStatus){
        alert("에러가 발생했습니다.");ㅣ
      },
      complete:function(data,textStatus){
      }
   });  //end ajax	

   });
      
});$(function() {
      $("#postJson").click(function() {
      	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              }; 
  	$.ajax({ 	  	
  	  	type:"POST",
        url:"${contextPath}/boards", 	      
        contentType: "application/json",
        data :JSON.stringify(article),
      success:function (data,textStatus){
    	  var temp = JSON.stringify(data);
          alert(temp);     
      },
      error:function(data,textStatus){
        alert("에러가 발생했습니다.");ㅣ
      },
      complete:function(data,textStatus){
      }
   });  //end ajax	

   });
});

$(function() {
    $("#allJson").click(function() {
    	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              };

	$.ajax({	  
    	type:"GET",
      url:"${contextPath}/boards/all",     
      contentType: "application/json",
    success:function (data,textStatus){
  	  var temp = JSON.stringify(data);
        alert(temp);
        var jsonObj = JSON.parse(temp);
        for(var i=0 ; i<jsonObj.length ; i++){
      	  console.log(jsonObj[i].writer);
        }  
    },
    error:function(data,textStatus){
      alert("에러가 발생했습니다.");ㅣ
    },
    complete:function(data,textStatus){
    }
 });  //end ajax	

 });
});

$(function() {
    $("#getJson").click(function() {
    	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              };
	$.ajax({
    	type:"GET",
      url:"${contextPath}/boards/114",
      contentType: "application/json",
    success:function (data,textStatus){
  	  var temp = JSON.stringify(data);
        alert(temp);
        alert(jsonObj.writer);
    },
    error:function(data,textStatus){
      alert("에러가 발생했습니다.");ㅣ
    },
    complete:function(data,textStatus){
    }
 });  //end ajax	

 });
});

$(function() {
    $("#putJson").click(function() {
    	var article = {articleNO:"114", 
	               writer:"박지성",
	               title:"안녕하세요", 
	               content:"상품 소개 글입니다."
	              };
	$.ajax({
      type:"PUT",
      url:"${contextPath}/boards/114", 
      contentType: "application/json",
      data :JSON.stringify(article),
    success:function (data,textStatus){
  	  var temp = JSON.stringify(data);
        alert(temp);
    },
    error:function(data,textStatus){
      alert("에러가 발생했습니다.");ㅣ
    },
    complete:function(data,textStatus){
    }
 });  //end ajax	

 });
});
```

