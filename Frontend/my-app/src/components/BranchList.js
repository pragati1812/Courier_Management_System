import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import customerService from '../services/Customer.service';
import NavBar from './NavBar';
import './style.css';
import TopBar from './TopBar';
import {Redirect} from "react-router-dom"
import axios from "axios"
const BranchList = () => {
    const [branch, setBranch] = useState([]);

    const [searchTerm,setsearchTerm]=useState("");
    const history = useHistory();

    const getBranchDetails=()=>{

        axios.get('http://localhost:9090/api/branch').then((response)=>{
            const result = response.data
            console.log(result)
            setBranch(result)
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

         getBranchDetails();
      }, []);


      return(
    
    
        <div class="wrapper">
        <NavBar/>
    
        
        <div id="content">
    
            <TopBar/>
    
            
           
            <div class="container">


            <div class="form-row">
                <div class="col">
                    <h3>Branch Details</h3>
          <input
              type="text"
              placeholder='Search...'
              className='form-control'
              style={{marginTop:20,marginBottom:20,width:"50%"}}
              onChange={(e)=>{
                  setsearchTerm(e.target.value);
              }}
              />
              
             

         
          </div>
              
            </div>

            <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Branch Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Contact no</th>
            </tr>
          </thead>
          <tbody>
          {
            branch.filter((val)=>{
              if (searchTerm===''){
                return val;
              }
              else if(
                val.branch_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.pincode.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
            }).map(c => (
              <tr key={c.id}>
                <td>{c.branch_name}</td>
                <td>{c.street}</td>
                <td>{c.city}</td>
                <td>{c.state}</td>
                <td>{c.pincode}</td>
                <td>{c.contact}</td>
        
               
              </tr>
            ))
          }
         
          </tbody>
          
        </table>

                
           
           
    
    
            </div>
    
            </div>
    
        </div>
    
    );
    
    }
    
    export default BranchList;


