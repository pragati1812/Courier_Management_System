import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import staffService from '../services/staff.service';
import NavBar from './NavBar';
import './style.css';
import './track.css';
import TopBar from './TopBar';
import axios from "axios"
import $ from 'jquery';

const TrackParcelCustomer = () => {

  const[parcel,setParcel]=useState([]);
  const[ref_no,setRef_no]=useState('');
  const history = useHistory();

 /* useEffect(()=>{

    if(!localStorage.getItem("admininfo")){
      //  alert("please login first")
        // return( <Redirect to="/"/> )
        history.push('/');
     }
     // getParcel();
  },[])*/

  const getParcelDetails=(e)=>{
    e.preventDefault();
    getParcel();
//getStatus();
   

  }

  const getParcel = () =>{
    axios.get('http://localhost:9090/api/'+ref_no).then((response)=>{
        const result = response.data
        console.log(result)
        console.log(response.status);
        if(response.status===200)
        {
          setParcel(result);
          console.log("details successfully got");
        }
        else{
          console.log("number is not valid");
        }
       
      
    }).catch(error=>{
      alert("Please provide valid number");
      setParcel([]);
    })
}
 


   // console.log($('#ref_no').val());
    //console.log(parcel.status);
   
    if(parcel.status==='Accepted')
    {
      $('#Accepted').css({"background-color":"green"});
      $('#In-Transit').css({"background-color":"white"});
      $('#Shipped').css({"background-color":"white"});
      $('#Out-for-Delivery').css({"background-color":"white"});
      $('#Delivered').css({"background-color":"white"});
      $('.step-icon').css({"color":"black"});
    }
    else if(parcel.status==='In-Transit')
    {
      $('#Accepted').css({"background-color":"green"});
      $('#In-Transit').css({"background-color":"green"});
      $('#Shipped').css({"background-color":"white"});
      $('#Out-for-Delivery').css({"background-color":"white"});
      $('#Delivered').css({"background-color":"white"});
      $('.step-icon').css({"color":"black"});
    }

    else if(parcel.status==='Shipped')
    {
      $('#Accepted').css({"background-color":"green"});
      $('#In-Transit').css({"background-color":"green"});
      $('#Shipped').css({"background-color":"green"});
      $('#Out-for-Delivery').css({"background-color":"white"});
      $('#Delivered').css({"background-color":"white"});
      $('.step-icon').css({"color":"black"});
    }
    else if(parcel.status==='Out for Delivery')
    {
      $('#Accepted').css({"background-color":"green"});
      $('#In-Transit').css({"background-color":"green"});
      $('#Shipped').css({"background-color":"green"});
      $('#Out-for-Delivery').css({"background-color":"green"});
      $('#Delivered').css({"background-color":"white"});
      $('.step-icon').css({"color":"black"});
    }
    else if(parcel.status==='Delivered')
    {
      $('#Accepted').css({"background-color":"green"});
      $('#In-Transit').css({"background-color":"green"});
      $('#Shipped').css({"background-color":"green"});
      $('#Out-for-Delivery').css({"background-color":"green"});
      $('#Delivered').css({"background-color":"green"});
      $('.step-icon').css({"color":"black"});
    }
    else{
      $('#Accepted').css({"background-color":"white"});
      $('#In-Transit').css({"background-color":"white"});
      $('#Shipped').css({"background-color":"white"});
      $('#Out-for-Delivery').css({"background-color":"white"});
      $('#Delivered').css({"background-color":"white"});
      $('.step-icon').css({"color":"black"});
    }

  


    return(


        <div class="wrapper">
        
    
        
        <div id="content">
    
            
    
            
           
            <div class="container">
<form>
<h3 align="center">Track Parcel</h3>
<br></br>
            <div class="form-row">

            <div class="col">
                        
                       
   
                        </div>
                     <div class="col">
                     <input
                      type="number"
                      placeholder='Enter tracking number'
                      className='form-control'
             // style={{marginTop:20,marginBottom:20,width:"50%"}}

                      id="ref_no"
                      value={ref_no}
                      onChange={(e) => setRef_no(e.target.value)}
             
              
              />

                     </div>
                     <div class="col">
                        
                     <button id='but' onClick={(e) => getParcelDetails(e)} class="btn btn-dark btn-md btn-md">Track</button>

                     </div>
                </div>
                <br></br>




   
           
       
</form>
<hr></hr>
            <div className="main_container">
     
     
<br></br>

     
 <div class="container padding-bottom-3x mb-1">
 <div class="card mb-3">
   <div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking No - </span><span class="text-medium">{parcel.ref_no}</span></div>
   <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
     <div class="w-100 text-center py-1 px-2"><span class="text-medium">Destination:</span> {parcel.destination}</div>
     <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span> {parcel.status}</div>
     <div class="w-100 text-center py-1 px-2"><span class="text-medium">Date:</span> {parcel.datecreated}</div>
   </div>
   <div class="card-body">
     <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
       <div class="step">
         <div class="step-icon-wrap">
           <div class="step-icon"  id='Accepted'><i class="pe-7s-cart"></i></div>
         </div>
         <h4 class="step-title">Accepted</h4>
       </div>
       <div class="step">
         <div class="step-icon-wrap">
           <div class="step-icon"  id='In-Transit'><i class="pe-7s-config"></i></div>
         </div>
         <h4 class="step-title">In-Transit</h4>
       </div>
       <div class="step">
         <div class="step-icon-wrap">
           <div class="step-icon"  id='Shipped'><i class="pe-7s-map-marker"></i></div>
         </div>
         <h4 class="step-title">Shipped</h4>
       </div>
       <div class="step">
         <div class="step-icon-wrap">
           <div class="step-icon"  id='Out-for-Delivery'><i class="pe-7s-car"></i></div>
         </div>
         <h4 class="step-title">Out for Delivery</h4>
       </div>
       <div class="step">
         <div class="step-icon-wrap">
           <div class="step-icon"  id='Delivered'><i class="pe-7s-home"></i></div>
         </div>
         <h4 class="step-title">Delivered</h4>
       </div>
     </div>
   </div>
 </div>
 <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
  
  
 </div>
</div>
</div>




                </div>
                </div>

</div>
        );
    
    }
    
    export default TrackParcelCustomer;  