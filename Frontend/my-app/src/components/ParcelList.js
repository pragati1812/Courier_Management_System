import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import customerService from '../services/Customer.service';
import NavBar from './NavBar';
import './style.css';
import TopBar from './TopBar';
import axios from "axios"
import {Redirect} from "react-router-dom"

const ParcelList = () => {

    const [searchTerm,setsearchTerm]=useState("");
    const [parcel, setParcel] = useState([]);
    const history = useHistory();
    

    useEffect(()=>{

      if(!localStorage.getItem("admininfo")){
        //  alert("please login first")
          // return( <Redirect to="/"/> )
          history.push('/');
       }
        getParcel()
    },[])

    const getParcel = () =>{
        axios.get('http://localhost:9090/api').then((response)=>{
            const result = response.data
            console.log(result)
           setParcel(result)
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
                    <h3>Parcel Details</h3>
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
              <th>Ref_no</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            parcel.filter((val)=>{
              if (searchTerm===''){
                return val;
              }
              else if(
                val.recipient_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.ref_no.toString().includes(searchTerm.toString())
              ){
                return val;
              }
            }).map(p => (
              <tr><td>{p.ref_no}</td>
                <td>{p.source}</td>
                <td>{p.destination}</td>
                <td>{p.status}</td>
                <td>{p.datecreated}</td>
               
                <td>
               
    
                 <Link className="btn btn-info" to={`/parcel/edit/${p.ref_no}`}>Edit</Link>
                
                
               </td>
  
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
    
    export default ParcelList;