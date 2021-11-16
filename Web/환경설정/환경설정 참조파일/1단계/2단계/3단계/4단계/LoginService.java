package mc.sn.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mc.sn.login.dao.LoginDAO;

@Service("loginService")
public class LoginService {
	@Autowired
	private LoginDAO loginDAO;

	public boolean checkLogin(String id, String pwd) {
		boolean flag = false; 
		flag = loginDAO.selectUser(id, pwd);
		return flag;
	}
}
