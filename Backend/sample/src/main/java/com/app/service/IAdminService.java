package com.app.service;

import com.app.pojos.Admin;

public interface IAdminService {
	
	Admin login(String email,String password);

}
