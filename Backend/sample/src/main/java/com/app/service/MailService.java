package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class MailService {

	@Autowired
	private JavaMailSender mailSender;

	public void sendSimpleEmail(String Email, long ref_no) {
		SimpleMailMessage message = new SimpleMailMessage();

		message.setFrom("courierservices916@gmail.com");
		message.setTo(Email);
		message.setText("Thank you for using courier services.\nYour parcel tracking number is "+ref_no+".\nYou can track your parcel using this link:  http://localhost:3000/trackparcel");
		message.setSubject("Tracking Number");

		mailSender.send(message);
		System.out.println("Mail Send...");
	}

}
