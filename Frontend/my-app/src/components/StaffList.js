import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import staffService from '../services/staff.service';
import NavBar from './NavBar';
import './style.css';
import TopBar from './TopBar';
import {Redirect} from "react-router-dom"

const StaffList = () => {

    const [staff, setStaff] = useState([]);
    const history = useHistory();

    
    
    const init = () => {
        staffService.getAll()
          .then(response => {
            console.log('Printing staff data', response.data);
            setStaff(response.data);
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
        staffService.remove(id)
          .then(response => {
            console.log('staff deleted successfully', response.data);
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
                    <p>Staff Details</p>
                </div>
               
            </div>

            <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Branch</th>
              <th>Email Id</th>
              <th>Type</th>
              <th>Contact no</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            staff.map(s => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.branch}</td>
                <td>{s.email}</td>
                <td>{s.type}</td>
                <td>{s.mobile}</td>
                <td>{s.joinDate}</td>
               
                <td>
                  <Link className="btn btn-info" to={`/staff/edit/${s.id}`}>Update</Link>
                          <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(s.id);
                  }}>Delete</button>

                 
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
    
    export default StaffList;