import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import customerService from '../services/Customer.service';
import NavBar from './NavBar';
import './style.css';
import TopBar from './TopBar';
import {Redirect} from "react-router-dom"

const CustomerList = () => {

    const [customer, setCustomer] = useState([]);

    const [searchTerm,setsearchTerm]=useState("");
    const history = useHistory();

    

    
    const init = () => {
        customerService.getAll()
          .then(response => {
            console.log('Printing customer data', response.data);
            console.log('Printing customer length', response.data.length);
            setCustomer(response.data);
          })
          .catch(error => {
            console.log('Something went wrong', error);
          }) 
      }



      useEffect(() => {
        if(!localStorage.getItem("admininfo")){
          //  alert("please login first")
            // return( <Redirect to="/"/> )
            history.push('/');
         }

        init();
      }, []);

      
      const handleDelete = (id) => {
        console.log('Printing id', id);
        customerService.remove(id)
          .then(response => {
            console.log('customer deleted successfully', response.data);
            init();
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


            <div class="form-row">
                <div class="col">
                    <h3>Customer Details</h3>
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
              <th>Name</th>
              <th>Email Id</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            customer.filter((val)=>{
              if (searchTerm===''){
                return val;
              }
              else if(
                val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.name.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
            }).map(c => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.address}</td>
        
                <td>
               
                <Link className="btn btn-primary" to={`/customer/${c.id}/parcel`}>Add Parcel</Link>&nbsp;
                  <Link className="btn btn-info" to={`/customer/edit/${c.id}`}>Edit</Link>
                  <br></br><br></br>
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(c.id);
                  }}>Delete</button>
                  &nbsp;
                  <Link className="btn btn-primary" to={`/customer/${c.id}`}>Details</Link>
                 
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
    
    export default CustomerList;