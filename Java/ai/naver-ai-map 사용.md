## naver-ai 사용

- controller

  ```java
  public void getGeo(HttpServletRequest req, HttpServletResponse res) throws IOException {
  		req.setCharacterEncoding("utf-8");
  		String addr = req.getParameter("addr");
  		res.setContentType("text/text; charset=utf-8");
  		String result = projectService.geocode(addr);
  		res.getWriter().print(result);
  	}
  ```

- service

  ```java
  public String geocode(String words) {
  		StringBuffer res = null;
  		String clientId = "네이버ai 아이디";
  		String clientSecret = "네이버ai 비밀번호";
  		try {
  			String text = URLEncoder.encode(words, "UTF-8");
  			String apiURL = "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=" + text;
  			URL url = new URL(apiURL);
  			HttpURLConnection con = (HttpURLConnection) url.openConnection();
  			con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientId);
  			con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
  			con.setDoOutput(true);
  
  			int responseCode = con.getResponseCode();
  			BufferedReader br;
  			if (responseCode == 200) {
  				br = new BufferedReader(new InputStreamReader(con.getInputStream()));
  			} else {
  				br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
  			}
  			String inputLine;
  			res = new StringBuffer();
  			while ((inputLine = br.readLine()) != null) {
  				res.append(inputLine);
  			}
  			br.close();
  			// System.out.println("service " + res.toString());
  		} catch (Exception e) {
  			// System.out.println(e);
  		}
  
  		return res.toString();
  	}
  ```

  

