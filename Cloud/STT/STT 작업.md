# STT 작업

- Controller

  ```java
  @RequestMapping(value="/clovaSTT", produces = "application/text; charset=UTF-8")
  	@ResponseBody
  	public String stt(@RequestParam("uploadFile") MultipartFile file,
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
  			  System.out.println(filePathName);
  			  //4. 서버로 전송
  			  file.transferTo(file1);
  			  
  			  result = aiService.clovaSpeechToText(filePathName, language);
  			  System.out.println("ai "+result);
  			  
  		}catch (IOException e) {
  			// TODO Auto-generated catch block
  			e.printStackTrace();
  		}
  		return result;
  	}
  
  ```

- Service

  ```java
  public String clovaSpeechToText(String filePathName, String language) {
  		// TODO Auto-generated method stub
  		String clientId = "owssfz800d";             // Application Client ID";
          String clientSecret = "RNejzi7lUpFL0bek9bkfkwR0hj2lKgfPIJ4Q2rwT";     // Application Client Secret";
          String result = null;
          try {
              String imgFile = filePathName;
              File voiceFile = new File(imgFile);
  
              //String language = "Kor";        // 언어 코드 ( Kor, Jpn, Eng, Chn )
              String apiURL = "https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=" + language;
              URL url = new URL(apiURL);
  
              HttpURLConnection conn = (HttpURLConnection)url.openConnection();
              conn.setUseCaches(false);
              conn.setDoOutput(true);
              conn.setDoInput(true);
              conn.setRequestProperty("Content-Type", "application/octet-stream");
              conn.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
              conn.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
  
              OutputStream outputStream = conn.getOutputStream();
              FileInputStream inputStream = new FileInputStream(voiceFile);
              byte[] buffer = new byte[4096];
              int bytesRead = -1;
              while ((bytesRead = inputStream.read(buffer)) != -1) {
                  outputStream.write(buffer, 0, bytesRead);
              }
              outputStream.flush();
              inputStream.close();
              BufferedReader br = null;
              int responseCode = conn.getResponseCode();
              if(responseCode == 200) { // 정상 호출
                  br = new BufferedReader(new InputStreamReader(conn.getInputStream(),"utf8"));
              } else {  // 오류 발생
                  System.out.println("error!!!!!!! responseCode= " + responseCode);
                  br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
              }
              String inputLine;
              
              if(br != null) {
                  StringBuffer response = new StringBuffer();
                  while ((inputLine = br.readLine()) != null) {
                      response.append(inputLine);
                  }
                  br.close();
                  System.out.println(response.toString());
                  result = response.toString();
              } else {
                  System.out.println("error !!!");
              }
          } catch (Exception e) {
              System.out.println(e);
          }
        
  		return result;
  	}
  ```

  