package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import lombok.*;


import javax.persistence.*;
@Entity
@Table(name="branch")
@Data
@NoArgsConstructor
public class Branch {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;
		@Column
		@NotEmpty(message ="branch name can't be blank")
		private String branch_name;
		@Column
		@NotEmpty(message ="street can't be blank")
		private String street;
		@Column
		@NotEmpty(message ="city can't be blank")
		private String city;
		@Column
		@NotEmpty(message ="state can't be blank")
		private String state;
		@Column
		@NotEmpty(message ="pincode can't be blank")
		@Pattern(regexp="(^$|[0-9]{6})")
		private String pincode;
		@Column
		@NotEmpty(message ="Mobile no can't be blank")
		@Pattern(regexp="(^$|[0-9]{10})")
		private String contact;
		public Branch(Integer id, @NotEmpty(message = "branch name can't be blank") String branch_name,
				@NotEmpty(message = "street can't be blank") String street,
				@NotEmpty(message = "city can't be blank") String city,
				@NotEmpty(message = "state can't be blank") String state,
				@NotEmpty(message = "pincode can't be blank") @Pattern(regexp = "(^$|[0-9]{6})") String pincode,
				@NotEmpty(message = "Mobile no can't be blank") @Pattern(regexp = "(^$|[0-9]{10})") String contact) {
			super();
			this.id = id;
			this.branch_name = branch_name;
			this.street = street;
			this.city = city;
			this.state = state;
			this.pincode = pincode;
			this.contact = contact;
		}
		
		

}
