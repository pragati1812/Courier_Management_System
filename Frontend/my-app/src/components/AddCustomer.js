import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import customerService from "../services/Customer.service";
import NavBar from './NavBar';
import {Redirect} from "react-router-dom"
import './style.css';
import TopBar from './TopBar';
import validator from 'validator';


const AddCustomer = () => {



    const[name, setName] = useState('');
    const[email,setEmail]=useState('');
    const[mobile, setMobile] = useState('');
    const[address, setAddress] = useState('');
   
    const history = useHistory();
    const {id} = useParams();

   



    const saveCustomer = (e) => {
        e.preventDefault();
        
        const customer = {name,email, mobile,address, id};
        const regexExp = /^[6-9]\d{9}$/gi;
        const mobileResult=regexExp.test(customer.mobile);
        const regName = /^[A-Za-z ]{3,40}$/;
          if(customer.name.length===0 || customer.mobile.length===0 || customer.address.length===0)
          {
            alert("All fields are mandatory");
          }
          else if(!validator.isEmail(customer.email))
          {
            alert("Please enter valid email");
          }
          else if(mobileResult==false)
          {
            alert("Please enter valid contact no");
          }
          else if(!regName.test(customer.name)){
            alert('Please enter valid name');
        }






        if (id) {
            //update
            customerService.update(customer)
                .then(response => {
                    console.log('customer data updated successfully', response.data);
                    history.push('/customerlist');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
           // validateEmail();



   /*        const data = {
            "email":email,
        }
        console.log(data);
        axios.post('http://localhost:9090/api/customer/email' , data).then((response)=>{
            console.log(data)
            const result = response.data
            console.log(result)
           // console.log(result.id)
          //  console.log(response.status)     
                //if(result.email === 'admin123@gmail.com' && result.password==='admin123'){
                if(response.status===200) 
                {
                    //alert("Login Successfull...")  
                       
                    console.log("Email is already Exits");  

                }
                else{
                    //alert("Invalid username or Password")
                  // console.log('you can add customer details');*/

                  customerService.create(customer)
                  .then(response => {

                        console.log(response.data.id);
                        if(response.data.id===null)
                        {
                            //console.log('Email already exits');
                            alert('Email already exits');
                        }
                        else{
                            console.log("customer added successfully", response.data);
                            history.push('/customerlist');
                        }
                     
                  })
                  .catch(error => {
                      console.log('something went wrong', error);
                  })



                }
                    
            }  
          
       // })



           
        
    
   
    useEffect(() => {
        

        if(!localStorage.getItem("admininfo")){
           //  alert("please login first")
             // return( <Redirect to="/"/> )
             history.push('/');
          }

            if (id) {
                customerService.get(id)
                    .then(customer => {
                        setName(customer.data.name);
                        setEmail(customer.data.email);
                        setAddress(customer.data.address);
                        setMobile(customer.data.mobile);
                        
                       
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    })
            }
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


   

    return(

        <div class="wrapper">
       <NavBar/>
    
        
        <div id="content">
    
           <TopBar/>
    
            
           
            <div class="container">


            <div class="form-row">
                <div class="col">
                    <p>Add Customer Details</p>
                </div>
               
            </div>

            <form>
                <div class="form-row">
                     <div class="col">
                        <label>Name</label>
                        <input type="text"
                         class="form-control" 
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         placeholder="Enter name"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>Email</label>
                        <input type="text"
                         class="form-control" 
                         id="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Enter Email ID"/>
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                     <div class="col">
                        <label>Phone No</label>
                        <input type="text"
                         class="form-control" 
                         id="mobile"
                         value={mobile}
                         onChange={(e) => setMobile(e.target.value)}
                         placeholder="Enter Phone number"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>address</label>
                        <input type="text"
                         class="form-control" 
                         id="address"
                         value={address}
                         onChange={(e) => setAddress(e.target.value)}
                         placeholder="Enter Address"/>
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                     <div class="col">
                     <button onClick={(e) => saveCustomer(e)} class="btn btn-dark btn-lg btn-lg">Submit</button>
                       </div>
                     <div class="col">
                     <button type="reset" class="btn btn-dark btn-lg btn-lg">Cancel</button></div>
                </div>
                <br></br>

                     </form>
           
    
           
    
    
            </div>
    
            </div>
    
        </div>

        );
    
    }
    
    export default AddCustomer;