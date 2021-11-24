# TTS (Text To Speech)

- Controller

  ```java
  	@RequestMapping(value="/view_tts" ,method = RequestMethod.GET)
  	public ModelAndView viewTts(HttpServletRequest request, HttpServletResponse response) throws Exception{
  		ModelAndView mav = new ModelAndView();
  		String url = "/service/ttsResult";
  		mav.setViewName(url);
  		return mav;
  	}
  	
  	@RequestMapping(value="/tts", method=RequestMethod.POST)
  	@ResponseBody
  	public String tts(@RequestParam("uploadFile") MultipartFile file,
  								@RequestParam("language") String language) {
  		String result = "";
  		
  		try {
  			//1. 파일 저장 경로 설정 : 실제 서비스 되는 위치 (프로젝트 외부에 저장)
  			  String uploadPath =  "c:/ai/";
  			  
  			  //2.원본 파일 이름
  			  String originalFileName = file.getOriginalFilename();  
  			  
  			  //3. 파일 생성 
  			  String filePathName = uploadPath + originalFileName;
  			  File file1 = new File(filePathName);
  			  System.out.println("3");
  			  
  			  //4. 서버로 전송
  			  file.transferTo(file1);
  			  
  			  result = aiService.clovaTextToSpeech(filePathName, language);
  			  System.out.println(result);
  			  
  		}catch (IOException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
  		
  		return result;  //음성 일 이름 반환
  	}
  
  
  ```

- Service

  ```java
  	public String clovaTextToSpeech(String filePathName, String language) {
  		// TODO Auto-generated method stub
  		String result = null;
  		String clientId = "o9ahlzeysd";
          String clientSecret = "dAh41wlrvQGlQ7wQXb096HJV1ufhpnPHRD55TB7A"; 
          try {
          	File file = new File(filePathName);
          	FileReader fr = new FileReader(file,Charset.forName("utf-8"));
          	BufferedReader br1 = new BufferedReader(fr);
          	StringBuffer sb = new StringBuffer();
          	String temp = null;
          	while((temp=br1.readLine())!=null) {
          		sb.append(temp);
          	}
          	br1.close();
          	fr.close();
          	System.out.println(sb.toString());
              String text = URLEncoder.encode(sb.toString(), "UTF-8"); 
              String apiURL = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";
              URL url = new URL(apiURL);
              HttpURLConnection con = (HttpURLConnection)url.openConnection();
              con.setRequestMethod("POST");
              con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
              con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
              // post request
              String postParams = "speaker="+language+"&volume=0&speed=0&pitch=0&format=mp3&text=" + text;
              con.setDoOutput(true);
              DataOutputStream wr = new DataOutputStream(con.getOutputStream());
              wr.writeBytes(postParams);
              wr.flush();
              wr.close();
              int responseCode = con.getResponseCode();
              BufferedReader br= null;
              if(responseCode==200) { 
                  InputStream is = con.getInputStream();
                  int read = 0;
                  byte[] bytes = new byte[1024];
                 
                  String tempname = Long.valueOf(new Date().getTime()).toString();
                  result = "tts_"+tempname+".mp3";
                  File f = new File("c:/ai/"+result);
                  f.createNewFile();
                  OutputStream outputStream = new FileOutputStream(f);
                  while ((read =is.read(bytes)) != -1) {
                      outputStream.write(bytes, 0, read);
                  }
                  outputStream.flush();
                  outputStream.close();
                  is.close();
              } else {
                  br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
                  String inputLine;
                  StringBuffer response = new StringBuffer();
                  while ((inputLine = br.readLine()) != null) {
                      response.append(inputLine);
                  }
                  br.close();
                  System.out.println(response.toString());
                  result = response.toString();
              }
          } catch (Exception e) {
              System.out.println(e);
          }
  		return result;
  	}
  	
  ```

  

- 자바스크립트

  ```js
  /**
   * tts.js
   */
   
   $(function(){
  	$('#ttsForm').on('submit', function(event){
  		event.preventDefault(); //submit 후에  reload 안 되게
  		var formData = new FormData($('#ttsForm')[0]);	//language 랑 uploadFile의 두가지 값을 formData에 저장
  														//[0]은 form태그의 정보에서 첫번째 값이 language랑 uploadFile의 정보를 가지고 있음
  		$.ajax({
  			type:"post",
  			enctype:"multipart/form-data",
  			url:"tts",
  			data:formData,
  			processData:false, //필수
  			contentType:false, //필수
  			success:function(result){
  				$('audio').prop("src", '/ai/' + result);
  				$('#resultDiv').text(result);
  			},
  			error:function(e){
  				alert("에러 발생 : " + e);
  			}			
  		});
  	});
  	
  });
  ```

  

- jsp

  ```jsp
  <%@ page language="java" contentType="text/html; charset=UTF-8"
      pageEncoding="UTF-8"%>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
  <!DOCTYPE html>
  <html>
  	<head>
  		<meta charset="UTF-8">
  		<title>Text To Speech</title>
  		<script src="<c:url value='resources/js/jquery-3.6.0.min.js'/>"></script>
  		<script src="<c:url value='resources/js/tts.js'/>"></script>
  	</head>
  	<body> 
  		<h2>CLOVA Voice : TTS (텍스트를 음성으로 변환)</h2>
  		텍스트를 음성으로 변환<br><br>
  		
  		<form id="ttsForm"  method="post" enctype="multipart/form-data">	         
           	음성 파일 :  <input type="file" id="uploadFile" name="uploadFile"><br><br>
           	언어 : <select  name="language">
           				<option value="nara" selected>한국어, 여성</option>
           				<option value="jinho">한국어, 남성</option>
           				<option value="nhajun">한국어, 아동 (남)</option>
           				<option value="ndain">한국어, 아동(여)</option>
           				<option value="clara">영어, 여성</option>
           				<option value="matt">영어, 남성</option>
           				<option value="carmen">스페인어, 여성</option>
           				<option value="meimei">중국어, 여성</option>
           	 		</select><br><br>
  
             <input type="submit" value="결과 확인">
  		</form><br><br>		
  				
  		<h2>TTS : 텍스트를 음성으로 변환한 결과</h2>	
  		<div id="resultDiv"></div><br><br>	
  		
  		<div>
  			<audio preload="auto" controls></audio>
  		</div>
  		
  		<br><br>
  		<a href="">index 페이지로 이동</a>
  	</body>
  </html>
  ```

  