package mc.sn.login.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import mc.sn.login.service.LoginService;

@Controller
public class LoginController {

	@Autowired 
	private LoginService loginService;
	
	
	public LoginController() {
		// TODO Auto-generated constructor stub
		System.out.println("controller");
	}
		
	@RequestMapping(value = "/view_login.do", method = RequestMethod.GET)
	public String form(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		return "/member/login_form";
	}
	
	
	@RequestMapping(value = "/login_check", method = RequestMethod.POST)
	public ModelAndView login(@RequestParam("id") String id,
								@RequestParam("pwd") String pwd,
		                       HttpServletRequest request, HttpServletResponse response) throws Exception {
		ModelAndView mav = new ModelAndView();
		String url = "/member/fail";
		boolean flag = loginService.checkLogin(id, pwd);
		if(flag) {
			url = "/member/success";
		}
		mav.setViewName(url);
		return mav;
	}
	

}
