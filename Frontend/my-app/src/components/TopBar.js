import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './style.css';

const TopBar = () => {

    const history = useHistory();
  /*  if(!localStorage.getItem("userinfo")){
        alert("please login first")
        return( <Redirect to="/"/> )
    }
    localStorage.clear();*/

    const processLogout=()=>{
       // e.preventDefault();
        localStorage.clear();
        if(!localStorage.getItem("admininfo")){
          //  alert("please login first")
           // return( <Redirect to="/"/> )
           history.push('/');
        }
        
      //  return( <Redirect to="/"/> )
    }
   


return(

    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">

        <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span>Courier Management System</span>
        </button>
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="nav navbar-nav ml-auto">
           
                <li class="nav-item text-white">
                  
                <button onClick={() => processLogout()} class="btn btn-dark btn-lg btn-lg">Logout</button>
                </li>
            </ul>
        </div>
    </div>
</nav>

    );

}

export default TopBar;