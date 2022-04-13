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


const UpdateStatus = () => {

        const[parcel,setParcel]=useState([]);
        const[status,setStatus]=useState('');


        const[recipient_name,setRecipientName]=useState('');
const[recipient_mobile,setRecipientMobile]=useState('');
const[recipient_address,setRecipientaddress]=useState('');
const[branch,setBranch]=useState('');
const[source,setSource]=useState('');
const[destination,setDestination]=useState('');
const[weight,setweight]=useState('');
const[distance,setDistance]=useState('');
const[price,setPrice]=useState('');
//const[parcel_status,setStatus]=useState('Accepted');
const[source_pincode,setSourcePincode]=useState('');
const[destination_pincode,setDestinationPincode]=useState('');

        const history = useHistory();
        const {id} = useParams();

        useEffect(() => {

            if(!localStorage.getItem("admininfo")){
                //  alert("please login first")
                  // return( <Redirect to="/"/> )
                  history.push('/');
               }
    
           if (id) {
                parcelService.get(id)
                    .then(parcel => {
                    /*    setRecipientName(parcel.data.recipient_name);
                        setRecipientMobile(parcel.data.recipient_mobile);
                        setRecipientaddress(parcel.data.recipient_address);
                        setBranch(parcel.data.branch);
                        setSource(parcel.data.source);
                       setDestination(parcel.data.destination);
                       setweight(parcel.data.weight);
                       setDistance(parcel.data.distance);
                       setPrice(parcel.data.price);
                       setSourcePincode(parcel.data.source_pincode);
                       setDestinationPincode(parcel.data.destination_pincode);*/
                       setStatus(parcel.data.status);
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    })
            }
        }, [])

       


       




        const saveParcel = (e) => {
            e.preventDefault();

            const parcel={recipient_name,recipient_mobile,recipient_address,branch,source,destination,weight,distance,price,source_pincode,destination_pincode,status,id};
/*
           const data = {
              "Status" :status,
               "id":id
            }
            console.log(data);*/
       /*     if (id) {
                //update
                parcelService.update(parcel)
                    .then(response => {
                        console.log('parcel data updated successfully', response.data);
                        history.push('/Parcellist');
                    })
                    .catch(error => {
                        console.log('Something went wrong', error);
                    }) 
            } */
           
         /*   axios.put('http://localhost:9090/api/'+parcel.status+'/'+parcel.id).then((response)=>{
                const result = response.data
                console.log(response.data.status);
              // setParcel(result)
              console.log("data updated");
              setStatus(response.data.status);
             
            })*/

            axios.put('http://localhost:9090/api/'+parcel.status+'/'+parcel.id).then(response => {
                console.log('parcel data updated successfully', response.data);
                history.push('/Parcellist');
            })
            .catch(error => {
                console.log('Something went wrong', error);
            }) 
        }

        


    return(
<div class="wrapper">
        <NavBar/>
    
        
        <div id="content">
    
            <TopBar/>
    
            
           
            <div class="container">
            <h4>Update Status</h4>
            <br></br>

            <form>
                <div class="form-row">
                     <div class="col">
                        <label>Status</label>
                        <select class="form-control" aria-label="Default select example"  id="status" value={status}  onChange={(e) => setStatus(e.target.value)} >
                        <option value="Accepted">Accepted</option>
                         <option value="In-Transit">In-Transit</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Unsuccessful Delivery">Unsuccessful Delivery</option>
                    </select>
                     </div>

                     
                </div>
                <br></br>

                <div class="form-row">
                <div class="col">
                     <button onClick={(e) => saveParcel(e)} class="btn btn-dark btn-lg btn-lg">Submit</button>
                       </div>
                     </div>



<hr></hr>
                     


           
               </form>

                </div>
                </div>
                </div>



    );
}
export default UpdateStatus;