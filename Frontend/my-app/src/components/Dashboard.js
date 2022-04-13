import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import TopBar from './TopBar';
import {Redirect} from "react-router-dom"
import './style.css';
import { useEffect, useState } from 'react';
import axios from "axios";

const Dashboard = () => {


 // const [searchTerm,setsearchTerm]=useState("");
    const [parcel, setParcel] = useState('');
    const[customer,setCustomer]=useState('');
    const[staff,setStaff]=useState('');
    const[StatusAccepted,setStatusAccepted]=useState([]);
    const[StatusInTransit,setStatusInTransit]=useState([]);
    const[StatusShipped,setStatusShipped]=useState([]);
    const[StatusDelivered,setStatusDelivered]=useState([]);
    const[StatusOutOfDelivered,setStatusOutOfDelivery]=useState([]);
    const[StatusUnsuccessful,setStatusUnsuccessful]=useState([]);

    const history = useHistory();
    const[Accepted,setAccepted]=useState('Accepted');
    const[intransit,setInTransit]=useState('In-Transit');
    const[shipped,setShipped]=useState('Shipped');
    const[delivered,setDelivered]=useState('Delivered');
    const[outofdelivery,setOutofDelivery]=useState('Out for Delivery');
    const[unsuccessful,setUnsuccessful]=useState('Unsuccessful Delivery');

    useEffect(()=>{

      if(!localStorage.getItem("admininfo")){
        //  alert("please login first")
          // return( <Redirect to="/"/> )
          history.push('/');
       }
        getParcel();
        getCustomer();
        getStaff();
        getStatusAccepted();
        getStatusInTransit();
        getStatusShipped();
        getStatusDelivered();
        getStatusOutForDelivery();
        getStatusUnsuccessful();
    },[])

    const getParcel = () =>{
        axios.get('http://localhost:9090/api/parcel/count').then((response)=>{
            const result = response.data
            console.log(result)
           setParcel(result)
        })
    }

    const getCustomer = () =>{
      axios.get('http://localhost:9090/api/customer/count').then((response)=>{
          const result = response.data
          console.log(result)
         setCustomer(result)
      })
  }
  const getStaff = () =>{
    axios.get('http://localhost:9090/api/staff/count').then((response)=>{
        const result = response.data
        console.log(result)
       setStaff(result)
    })
}

const getStatusAccepted=()=>{
  axios.get('http://localhost:9090/api/status/'+Accepted).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusAccepted(result);
      
    })

}

const getStatusInTransit=()=>{
  axios.get('http://localhost:9090/api/status/'+intransit).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusInTransit(result);
      
    })

}

const getStatusShipped=()=>{
  axios.get('http://localhost:9090/api/status/'+shipped).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusShipped(result);
      
    })

}


const getStatusDelivered=()=>{
  axios.get('http://localhost:9090/api/status/'+delivered).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusDelivered(result);
      
    })

}

const getStatusOutForDelivery=()=>{
  axios.get('http://localhost:9090/api/status/'+outofdelivery).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusOutOfDelivery(result);
      
    })

}
const getStatusUnsuccessful=()=>{
  axios.get('http://localhost:9090/api/status/'+unsuccessful).then((response)=>{
        const result = response.data
        console.log(result)
       setStatusUnsuccessful(result);
      
    })

}







//console.log(StatusUnsuccessful.length);

   


return(


    <div class="wrapper">
    <NavBar/>
    
    <div id="content">

       <TopBar/>

      
       
        <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
           
                <li class="nav-item text-white">
                <Link to="/">Logout</Link>
                </li>
            </ul>
        </div>

		<div class="row">
        <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box text-black shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg> {customer}</h3>
                     <p  align="center">Total Customers</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
</svg> {parcel}</h3>
                     <p  align="center">Total Parcels</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg> {staff}</h3>
                     <p  align="center">Total Staff</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>
</div>
<br></br>
    
<div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg> {StatusAccepted.length}</h3>
                     <p  align="center">Item Accepted by Courier</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg> {StatusInTransit.length}</h3>
                     <p  align="center">In-Transit</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg> {StatusShipped.length}</h3>
                     <p  align="center">Shipped</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>
          

          </div>

          <br></br>

          <div class="row">
          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg> {StatusOutOfDelivered.length}</h3>
                     <p  align="center">Out for Delivery</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg> {StatusDelivered.length}</h3>
                     <p  align="center">Delivered</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <div class="small-box shadow-sm border">
            <div class="inner">
            <br></br>
                <br></br>
                <h3 align="center"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                    <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                    </svg> {StatusUnsuccessful.length}</h3>
                     <p  align="center">Unsuccessful Delivery Attempt</p>
                     <br></br>
                <br></br>
              </div>  
            </div>
          </div>



              </div>




</div>




           </div>

    </div>

);

}

export default Dashboard;