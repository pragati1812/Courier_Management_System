package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="parcel")
public class Parcel {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long ref_no;
	@Column(length=20)
	@NotEmpty(message ="Name can't be blank")
	private String recipient_name;
	@Column
	@NotEmpty(message ="address can't be blank")
	private String recipient_address;
	@NotEmpty(message ="Mobile no can't be blank")
	@Pattern(regexp="(^$|[0-9]{10})")
	private String recipient_mobile;
	@NotEmpty(message ="source_pincode can't be blank")
	@Pattern(regexp="(^$|[0-9]{6})")
	private String source_pincode;
	@NotEmpty(message ="destination_pincode can't be blank")
	@Pattern(regexp="(^$|[0-9]{6})")
	private String destination_pincode;
	@Column
	private int branch_id;
	@Column
	@NotEmpty(message ="source can't be blank")
	private String source;
	@Column
	@NotEmpty(message ="destination can't be blank")
	private String destination;
	@Column
	private int weight;
	@Column
	private short distance;
	@Column
	private double price;
	@Column
	@NotEmpty(message ="status can't be blank")
	private String status;
	@Column
	private LocalDateTime datecreated=LocalDateTime.now();
	@Column
	private String delivery_person;
	
	@ManyToOne(fetch = FetchType.LAZY,optional = false)
	@JoinColumn(name="customer_id",nullable=false)
	@JsonIgnore
	private Customer customer;

	
	
	
	
	public Parcel() {}


	//private long countStatusNumbers;
	/*public Parcel(String status,long no)
	{
		this.status=status;
		countStatusNumbers=no;
	}*/


	public Parcel(long ref_no,
			 String recipient_name,
			String recipient_address,
			String recipient_mobile,
			 String source_pincode,
			 String destination_pincode,
			 int branch_id,
			String source,
			String destination, int weight, short distance,
			double price, String status, LocalDateTime datecreated,
			String delivery_person, Customer customer) {
		super();
		this.ref_no = ref_no;
		this.recipient_name = recipient_name;
		this.recipient_address = recipient_address;
		this.recipient_mobile = recipient_mobile;
		this.source_pincode = source_pincode;
		this.destination_pincode = destination_pincode;
		this.branch_id = branch_id;
		this.source = source;
		this.destination = destination;
		this.weight = weight;
		this.distance = distance;
		this.price = price;
		this.status = status;
		this.datecreated = LocalDateTime.now();
		this.delivery_person = delivery_person;
		this.customer = customer;
	}





	public long getRef_no() {
		return ref_no;
	}





	public void setRef_no(long ref_no) {
		this.ref_no = ref_no;
	}





	public String getRecipient_name() {
		return recipient_name;
	}





	public void setRecipient_name(String recipient_name) {
		this.recipient_name = recipient_name;
	}





	public String getRecipient_address() {
		return recipient_address;
	}





	public void setRecipient_address(String recipient_address) {
		this.recipient_address = recipient_address;
	}





	public String getRecipient_mobile() {
		return recipient_mobile;
	}





	public void setRecipient_mobile(String recipient_mobile) {
		this.recipient_mobile = recipient_mobile;
	}





	public String getSource_pincode() {
		return source_pincode;
	}





	public void setSource_pincode(String source_pincode) {
		this.source_pincode = source_pincode;
	}





	public String getDestination_pincode() {
		return destination_pincode;
	}





	public void setDestination_pincode(String destination_pincode) {
		this.destination_pincode = destination_pincode;
	}





	public int getBranch() {
		return branch_id;
	}





	public void setBranch(int branch_id) {
		this.branch_id = branch_id;
	}





	public String getSource() {
		return source;
	}





	public void setSource(String source) {
		this.source = source;
	}





	public String getDestination() {
		return destination;
	}





	public void setDestination(String destination) {
		this.destination = destination;
	}





	public int getWeight() {
		return weight;
	}





	public void setWeight(int weight) {
		this.weight = weight;
	}





	public short getDistance() {
		return distance;
	}





	public void setDistance(short distance) {
		this.distance = distance;
	}





	public double getPrice() {
		return price;
	}





	public void setPrice(double price) {
		this.price = price;
	}





	public String getStatus() {
		return status;
	}





	public void setStatus(String status) {
		this.status = status;
	}





	public LocalDateTime getDatecreated() {
		return datecreated;
	}





	public void setDatecreated(LocalDateTime datecreated) {
		this.datecreated = LocalDateTime.now();
	}





	public String getDelivery_person() {
		return delivery_person;
	}





	public void setDelivery_person(String delivery_person) {
		this.delivery_person = delivery_person;
	}





	public Customer getCustomer() {
		return customer;
	}





	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	

	

	
	


	
}
