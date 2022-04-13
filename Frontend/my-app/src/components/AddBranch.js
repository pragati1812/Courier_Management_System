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


const AddBranch = () => {


    const[branch_name, setBranchName] = useState('');
    const[street,setStreet]=useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[pincode, setPincode] = useState('');
    const[contact, setContact] = useState('');
   
    const history = useHistory();
    const {id} = useParams();



    const saveBranch = (e) => {
        e.preventDefault();

       // const branch={branch_name,street,city,state,pincode,contact,id};

        let phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
        let phoneResult = phoneRGEX.test(contact);
        let nameRGEX=/^[A-Za-z ]{3,100}$/;
        let nameResult=nameRGEX.test(branch_name);
        let cityResult=nameRGEX.test(city);
        let stateResult=nameRGEX.test(state);
        let pincodeRGEX=/^$|[0-9]{6}/;
    let pincodeResult=pincodeRGEX.test(pincode);

        if(branch_name.length===0 || street.length===0 || city.length===0 || state.length===0 ||
            pincode.length===0 || contact.length===0)
            {
                alert("All fields are mandatory");
            }
            else if(phoneResult==false)
            {
              alert("Please enter valid contact no");
            }
            else if(nameResult == false)
            {
                alert('Please enter branch name');
            }
            else if(cityResult == false)
            {
                alert('Please enter city');
            }
            else if(stateResult == false)
            {
                alert('Please enter state');
            }
            else if(pincodeResult == false)
            {
                alert('Please enter pincode');
            }

            else
            {
                const data={
                    "branch_name":branch_name,
                    "street":street,
                    "city":city,
                    "state":state,
                    "pincode":pincode,
                    "contact":contact
                }


                console.log(data);

                axios.post('http://localhost:9090/api/branch' , data).then((response)=>{
                    const result = response.data
                    console.log(response.status);
                    if(response.status === 200){
                      
                       console.log(response.data);
                       history.push('/branchlist');
                    }
         

                    }).catch(error => {
                       console.log('Something went wrong', error);
                }) 



            }
        }



return(

    
    <div class="wrapper">
    <NavBar/>
 
     
     <div id="content">
 
        <TopBar/>
 
         
        
         <div class="container">


         <div class="form-row">
             <div class="col">
                 <p>Add Branch Details</p>
             </div>
            
         </div>

         <form>
             <div class="form-row">
                  <div class="col">
                     <label>Branch Name</label>
                     <input type="text"
                      class="form-control" 
                      id="branch_name"
                      value={branch_name}
                      onChange={(e) => setBranchName(e.target.value)}
                      placeholder="Enter branch name"
                      required
                      />
                  </div>

                  <div class="col">
                     <label>Street</label>
                     <input type="text"
                      class="form-control" 
                      id="street"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      placeholder="Enter Street"/>
                  </div>
             </div>
             <br></br>

             <div class="form-row">
                  

                  <div class="col">
                     <label>City</label>
                     <input type="text"
                      class="form-control" 
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter City name"/>
                  </div>
                  <div class="col">
                     <label>State</label>
                     <input type="text"
                      class="form-control" 
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Enter State name"/>
                  </div>
             </div>
             <br></br>

             <div class="form-row">
                  <div class="col">
                     <label>Pincode</label>
                     <input type="text"
                      class="form-control" 
                      id="pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter Pincode"
                      required
                      />
                  </div>

                  <div class="col">
                     <label>Contact no</label>
                     <input type="text"
                      class="form-control" 
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Enter Contact number"
                      required
                      />
                  </div>
             </div>
             <br></br>

             <div class="form-row">
                  <div class="col">
                  <button onClick={(e) => saveBranch(e)} class="btn btn-dark btn-lg btn-lg">Submit</button>
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
    
export default AddBranch;



