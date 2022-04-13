import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import staffService from "../services/staff.service";
import NavBar from './NavBar';
import {Redirect} from "react-router-dom"
import validator from 'validator';
import axios from "axios"
import './style.css';
import TopBar from './TopBar';


const AddStaff = () => {

    const[name, setName] = useState('');
    const[branch,setBranch]=useState('');
    const[email, setEmail] = useState('');
    const[type, setType] = useState('');
    //const[joinDate, setjoinDate] = useState('');
    const[mobile, setMobile] = useState('');
    const history = useHistory();
    const {id} = useParams();

    
    const[AddBranch,setAddBranch]=useState([]);

   
    const saveStaff = (e) => {
        e.preventDefault();
        
        const staff = {name,branch,email,mobile,type, id};

        const regexExp = /^[6-9]\d{9}$/gi;
        const mobileResult=regexExp.test(staff.mobile);
        let nameRGEX=/^[A-Za-z ]{3,30}$/;
        let nameResult=nameRGEX.test(staff.name);
        if(staff.name.length===0 || staff.branch.length===0 || staff.email.length===0 ||
            staff.mobile.length===0 || staff.type.length===0)
            {
                alert("All fields are mandatory");
            }
            else if(!validator.isEmail(staff.email))
            {
              alert("Please enter valid email");
            }
            else if(mobileResult==false)
            {
              alert("Please enter valid contact no");
            }
            else if(nameResult == false)
            {
                alert('Please enter valid name');
            }
            else if(staff.type==='-select-')
            {
                alert('Please select staff type');
            }


        if (id) {
            //update
            staffService.update(staff)
                .then(response => {
                    console.log('staff data updated successfully', response.data);
                    history.push('/stafflist');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            staffService.create(staff)
            .then(response => {
                console.log("staff added successfully", response.data);
                history.push("/stafflist");
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
    }
   
   
    useEffect(() => {

        if(!localStorage.getItem("admininfo")){
            //  alert("please login first")
              // return( <Redirect to="/"/> )
              history.push('/');
           }

        if (id) {
            staffService.get(id)
                .then(staff => {
                    setName(staff.data.name);
                    setBranch(staff.data.branch);
                    setEmail(staff.data.email);
                    setType(staff.data.type);
                  //  setjoinDate(staff.data.joinDate);
                   setMobile(staff.data.mobile);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }

        getBranchDetails();
    }, [])
   
   
    const getBranchDetails=()=>{

        axios.get('http://localhost:9090/api/branch').then((response)=>{
            const result = response.data
            console.log(result)
            setAddBranch(result)
        }).catch(error => {
            console.log('Something went wrong', error);
        }) 
    
    
      }
        
    
   
   
   
   
    return(
    
    
        <div class="wrapper">
       <NavBar/>
    
        
        <div id="content">
    
           <TopBar/>
    
            
           
            <div class="container">


            <div class="form-row">
                <div class="col">
                    <p>Add Staff Details</p>
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
                     <label>Branch</label>
                     <select class="form-control" aria-label="Default select example"  id="branch" value={branch}  onChange={(e) => setBranch(e.target.value)} >
                        <option selected>-select-</option>

                        {AddBranch.map((addbranch, index) =>
                                <option 
                                key={index}
                                value= {addbranch.branch_name}
                                > {addbranch.branch_name} </option>
                              )}
                    </select>
                     </div>
                </div>
                <br></br>


                <div class="form-row">
                     <div class="col">
                        <label>Email Id</label>
                        <input type="text"
                         class="form-control" 
                         id="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Enter Email Id"/>
                     </div>
                     <div class="col">
                        <label>type</label>
                     <select class="form-control" aria-label="Default select example"  id="type" value={type}  onChange={(e) => setType(e.target.value)} >
                        <option selected>-select-</option>
                         <option value="Office staff">Office Staff</option>
                        <option value="Delivery Staff">Delivery Staff</option>
                    </select>
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
                         placeholder="Enter Contact no"/>
                     </div>
                </div>
                <br></br>

                <div class="form-row">
                     <div class="col">
                     <button onClick={(e) => saveStaff(e)} class="btn btn-dark btn-lg btn-lg">Submit</button>
                       </div>
                     <div class="col">
                     <button type="reset" class="btn btn-dark btn-lg btn-lg">Cancel</button></div>

                     <div class="col"> </div>
                     <div class="col"> </div>
                     <div class="col"> </div>
                </div>
                <br></br>

            </form>
    
           
    
    
            </div>
    
            </div>
    
        </div>
    
    );
    
    }
    
    export default AddStaff;