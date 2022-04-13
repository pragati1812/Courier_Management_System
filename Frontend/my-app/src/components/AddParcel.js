import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import customerService from "../services/Customer.service";
import parcelService from"../services/parcel.service";
import './style.css';
import TopBar from './TopBar';
import { useState } from "react";
import {Redirect} from "react-router-dom"
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import $ from 'jquery';

const AddParcel = () => {



//customer
  const[name, setName] = useState('');
  const[mobile, setMobile] = useState('');
  const[address, setAddress] = useState('');
 const[email,setEmail]=useState('');
 
 //parcel
const[recipient_name,setRecipientName]=useState('');
const[recipient_mobile,setRecipientMobile]=useState('');
const[recipient_address,setRecipientaddress]=useState('');
const[branch,setBranch]=useState('');
const[source,setSource]=useState('');
const[destination,setDestination]=useState('');
const[weight,setweight]=useState('');
const[distance,setDistance]=useState('');
const[price,setPrice]=useState('');
const[parcel_status,setStatus]=useState('Accepted');
const[source_pincode,setSourcePincode]=useState('');
const[destination_pincode,setDestinationPincode]=useState('');

const[AddBranch,setAddBranch]=useState([]);


const[ref_no,setRef_no]=useState('');
//const[customer_id,setcustomer_id]=useState('');
  const history = useHistory();
  const {id} = useParams();
const {customer_id}=useParams();

const courierCharge=0;



 /*  
    if(weight<=5)
    {
        setPrice(6);
    }
    else{
        weight=weight-5;
        setPrice(6+(weight*1.2));
    }

    if(distance<=50)
    {
        setPrice(courierCharge+4.2);
    }
    else{
        distance=distance-50;
        setPrice(courierCharge+(4.2+(distance*1.4)));
    }
    console.log(courierCharge);*/

   // setPrice(courierCharge);
  

 // var cost=parseInt($('#weight').val())+parseInt($('#distance').val());
  //console.log(cost);
 //price=parseInt($('#price').val(cost));
  //setPrice(cost);

 // console.log();




  const saveParcel = (e) => {
    e.preventDefault();
    let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    let phoneResult = phoneRGEX.test(recipient_mobile);
    let nameRGEX=/^[A-Za-z ]{3,50}$/;
    let nameResult=nameRGEX.test(recipient_name);
    //console.log(nameResult)
    let pincodeRGEX=/^$|[0-9]{6}/;
    let pincodeResult=pincodeRGEX.test(source_pincode);
    let pincodeDestination=pincodeRGEX.test(destination_pincode);
    const num = /^[0-9\b]+$/;


    //let sourceResult=nameRGEX.test(source);
   // let destinationResult=nameRGEX.test(destination);
   /* if(phoneResult == false)
    {
         alert('Please enter a valid phone number');
       
    }*/


    if(recipient_name.length===0 || recipient_mobile.length===0 || recipient_address.length===0 ||
        branch.length===0 || source.length===0 || destination.length===0 || weight.length===0 ||
        distance.length===0 || source_pincode.length===0 || destination_pincode===0
        )
    {
        alert("All fields are mandatory");
    }
    else if(phoneResult == false)
    {
        alert('Please enter a valid phone number');
    }
    else if(nameResult == false)
    {
        alert('Please enter recipient name');
    }
    else if(pincodeResult==false)
    {
        alert('Invalid pincode');
    }
    else if(pincodeDestination==false)
    {
        alert('Invalid destination pincode');
    }
    else if(!(num.test(weight)))
    {
        alert('Invalid weight');
    }
    else if(!(num.test(distance)))
    {
        alert('Invalid distance');
    }
    else if(!(num.test(price)))
    {
        alert('Invalid price');
    }
    
    

else{
   const data = {
       "recipient_name":recipient_name,
       "recipient_mobile":recipient_mobile,
      "recipient_address":recipient_address,
       "branch":branch,
       "source":source,
       "destination":destination,
       "weight":weight,
       "distance":distance,
       "price":price,
       "status":parcel_status,
       "source_pincode":source_pincode,
       "destination_pincode":destination_pincode,
       "customer_id":id
    }
        console.log(data);

    axios.post('http://localhost:9090/api/customer/'+id+'/parcel' , data).then((response)=>{
        const result = response.data
        console.log(response.status);
        if(response.status === 200){
          //  alert("Registration Successful")
          //console.log(id);
           console.log(response.data);
           console.log(response.data.ref_no);
           console.log('id='+id+'ref_no='+response.data.ref_no);
           //setRef_no(response.data.ref_no);

           history.push('/parcellist');



           const dat={
            "email":email,
            "ref_no":response.data.ref_no
    
        }
        console.log(dat);
        axios.post('http://localhost:9090/api/'+email+'/'+response.data.ref_no, dat).then((response)=>{
            const result = response.data
            console.log(response.status);
            if(response.status === 200){
              //  alert("Registration Successful")
              console.log("mail is sent");
             //  console.log(response.data);
             //  console.log(response.data.ref_no);
              // console.log('id='+id+'ref_no='+response.data.ref_no);
               //ref_no=response.data.ref_no;
             
    
            }
            else {
                //alert("Please fill all fields properly");
               console.log("error");
            }
        })



          // ref_no=response.data.ref_no;
         // history.push('/parcellist');

        }
        else {
            //alert("Please fill all fields properly");
           console.log("error");
        }
    }).catch(error => {
        console.log('Something went wrong', error);
      }) 

    





}
   
    
  }



  const getBranchDetails=()=>{

    axios.get('http://localhost:9090/api/branch').then((response)=>{
        const result = response.data
        console.log(result)
        setAddBranch(result)
    }).catch(error => {
        console.log('Something went wrong', error);
    }) 


  }
    


   


 


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


    getBranchDetails();

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
                    <p>Sender Information</p>
                </div>
                <div class="col">
                    <p>Reciepient Information</p>
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
                         placeholder="Enter sender name"
                         required
                         disabled="disabled"
                         />
                     </div>

                     <div class="col">
                        <label>Name</label>
                        <input type="text"
                         class="form-control" 
                         id="recipient_name"
                        // pattern="[a-zA-Z]+"
                        value={recipient_name}
                         onChange={(e) => setRecipientName(e.target.value)}
                         placeholder="Enter recipient name"
                         required
                         />
                     </div>
                </div>
                <br></br>


                <div class="form-row">
                     <div class="col">
                        <label>Contact No</label>
                        <input type="text"
                         class="form-control" 
                         id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                         placeholder="Enter sender contact no"
                         required
                         disabled="disabled"
                         />
                     </div>

                     <div class="col">
                        <label>Contact No</label>
                        <input type="text"
                         class="form-control" 
                         id="mobile"
                         value={recipient_mobile}
                         onChange={(e) => setRecipientMobile(e.target.value)}
                         placeholder="Enter recipient contact no"
                         required
                         />
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                     <div class="col">
                        <label>Address</label>
                        <input type="text"
                         class="form-control" 
                         id="address"
                         value={address}
                        onChange={(e) => setAddress(e.target.value)}
                         placeholder="Enter sender address"
                         required
                         disabled="disabled"
                         />
                     </div>

                     <div class="col">
                        <label>Address</label>
                        <input type="text"
                         class="form-control" 
                         id="address"
                         value={recipient_address}
                         onChange={(e) => setRecipientaddress(e.target.value)}
                         placeholder="Enter recipient address"
                         required
                         />
                     </div>
                </div>
                <br></br>
                <div class="form-row">
                     <div class="col">
                        <label>Source</label>
                        <input type="text"
                         class="form-control" 
                         id="source"
                         value={source}
                        onChange={(e) => setSource(e.target.value)}
                         placeholder="Enter city and state"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>Destination</label>
                        <input type="text"
                         class="form-control" 
                         id="destination"
                         value={destination}
                         onChange={(e) => setDestination(e.target.value)}
                         placeholder="Enter city and state"
                         required
                         />
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                     <div class="col">
                        <label>Pincode</label>
                        <input type="text"
                         class="form-control" 
                         id="source_pincode"
                         value={source_pincode}
                        onChange={(e) => setSourcePincode(e.target.value)}
                         placeholder="Enter Pincode"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>Pincode</label>
                        <input type="text"
                         class="form-control" 
                         id="destination_pincode"
                         value={destination_pincode}
                         onChange={(e) => setDestinationPincode(e.target.value)}
                         placeholder="Enter Pincode"
                         required
                         />
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                    

                     <div class="col">
                     <label>Branch</label>
                     <select class="form-control" aria-label="Default select example"  id="branch" value={branch}  onChange={(e) => setBranch(e.target.value)} >
                        <option selected>-select-</option>

                        {AddBranch.map((addbranch, index) =>
                                <option 
                                key={index}
                                value= {addbranch.id}
                                > {addbranch.branch_name} </option>
                              )}
                    </select>
                     </div>
                </div>
                <br></br>
                <hr></hr>

                <div class="form-row">
                     <div class="col">
                        <label>Weight</label>
                        <input type="text"
                         class="form-control" 
                         id="weight"
                         value={weight}
                        onChange={(e) => setweight(e.target.value)}
                         placeholder="Enter weight"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>Distance</label>
                        <input type="text"
                         class="form-control" 
                         id="distance"
                         value={distance}
                         onChange={(e) => setDistance(e.target.value)}
                         placeholder="Enter distance"
                         required
                         />
                     </div>

                     <div class="col">
                        <label>Cost</label>
                        <input type="text"
                         class="form-control" 
                         id="price"
                         value={price}
                         onChange={(e) => setPrice(e.target.value)}
                      //  disabled="disabled"
                      placeholder="Enter cost"
                         required
                         />
                     </div>
                </div>
                <br></br>
                <hr></hr>
                <div class="form-row">
                        
                     <div class="col">
                     <button onClick={(e) => saveParcel(e)} class="btn btn-dark btn-lg btn-lg">Submit</button>
                       </div>
                     <div class="col">
                     <button type="reset" class="btn btn-dark btn-lg btn-lg">Cancel</button></div>
                     <div class="col"></div>
                     <div class="col"></div>
                    <div class="col"></div>
                     <div class="col"></div>
                </div>
                <br></br>


                
            </form>
           
    
    
            </div>
    
          
    
        </div>
    </div>
    
    );
    
    }
    
    export default AddParcel;